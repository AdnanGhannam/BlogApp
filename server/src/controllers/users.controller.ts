import { RequestHandler, query } from "express";
import { Types } from "mongoose";
import ResponseModel from "../helpers/response";
import db from "../models/models";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs";

const loginEndpoint: RequestHandler = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Both name and password are required!" }]));
    }
    
    const user = await db.User.findOne({ name });

    if (!user) {
        return res
            .status(404)
            .json(new ResponseModel(false, null, [{ message: `User with name '${name}' is not found` }]));
    }
    
    const passwordIsValid = bcrypt.compareSync(password, user.password!);
    if (!passwordIsValid) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Password is wrong" }]));
    }

    // JWT Token
    const secret = process.env.SECRET;

    if (!secret ) {
        return res
            .status(500)
            .json(new ResponseModel(false, null, [{ message: "Something went wrong!" }]));
    }

    const token = jwt.sign({ id: user.id }, secret, { expiresIn: "3h" });
    res.status(200)
        .json(new ResponseModel(true, { token }));
};

const signupEndpoint: RequestHandler = (req, res) => {
    if (!Object.keys(req.body).length) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Request body is required" }]));
    }
    
    const { name, password, bio } = req.body;

    const hashPassword = bcrypt.hashSync(password, 8);
    const user = new db.User({ name, password: hashPassword, img: `assets/${name}`, bio });

    user.save()
        .then(results => {
            res
                .status(201)
                .json(new ResponseModel(true));
        })
        .catch(err => {
            res
                .status(400)
                .json(new ResponseModel(false, null, err));
        });
};

const getUserEndpoint: RequestHandler = (req, res) => {
    const id = req.params["id"];
    
    if (!Types.ObjectId.isValid(id)) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Id is not valid" }]));
    }

    db.User
        .findById(id, "-password")
        .exec()
        .then(user => {
            if (!user)  {
                return res
                    .status(404)
                    .json(new ResponseModel(
                        true, null, [{ message: `User with id: '${id}' is not found!` }]));
            }

            res
                .status(200)
                .json(new ResponseModel(true, user));
        })
        .catch(err => {
            res
                .status(400)
                .json(new ResponseModel(true, null, err));
        });
    
};

const changePasswordEndpoint: RequestHandler = async (req, res) => {
    const id = req.headers.userId;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    if (!oldPassword || !newPassword) {
        return res.status(400)
            .json(new ResponseModel(false, null, [{ message: "Both old password and new password are required!" }]));
    }

    const user = await db.User.findById(id);

    if (!user) {
        return res.status(500)
            .json(new ResponseModel(false, null, [{ message: "Something went wrong" }]));
    }

    const passwordIsValid = bcrypt.compareSync(oldPassword, user.password!);

    if (!passwordIsValid) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Password is wrong" }]));
    }

    user.password = bcrypt.hashSync(newPassword, 8);
    user.save()
        .then(results => {
            return res
                .status(202)
                .json(new ResponseModel(true));
        })
        .catch(err => {
            res
                .status(400)
                .json(new ResponseModel(false, null, err));
        });
};

const getUsersEndpoint: RequestHandler = (req, res) => {
    // TODO
};

const updateUserEndpoint: RequestHandler = (req, res) => {
    // TODO
};

const deleteUserEndpoint: RequestHandler = async (req, res) => {
    const clientId = req.headers.userId;
    const userId = req.params["id"];

    if (clientId != userId) {
        return res.status(401)
            .json(new ResponseModel(false, null, [{ message: "Unauthorized!" }]))
    }

    const user = await db.User.findByIdAndDelete(userId).select("-password");

    res.status(202)
        .json(new ResponseModel(true, user));
};

const endpoints = {
    loginEndpoint,
    signupEndpoint,
    changePasswordEndpoint,
    getUserEndpoint,
    getUsersEndpoint,
    updateUserEndpoint,
    deleteUserEndpoint
};

export default endpoints;