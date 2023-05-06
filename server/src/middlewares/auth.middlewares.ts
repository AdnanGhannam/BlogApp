import { RequestHandler } from "express";
import ResponseModel from "../helpers/response";
import jwt, { JwtPayload } from "jsonwebtoken";

const checkToken: RequestHandler = (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];
    const secret = process.env.SECRET;

    if (!authorizationHeader) {
        return res.status(400)
            .json(new ResponseModel(false, null, [{ message: "JWT token is required" }]))
    }

    if (authorizationHeader.split(" ").length != 2) {
        return res.status(400)
            .json(new ResponseModel(false, null, [{ message: "JWT token is not valid" }]))
    }

    if (!secret) {
        return res.status(500)
            .json(new ResponseModel(false, null, [{ message: "Something went wrong" }]))
    }

    const token = authorizationHeader.split(" ")[1];
    req.headers.token = token;
    next();
};

const isAuthenticated: RequestHandler = (req, res, next) => {
   const token = req.headers.token as string;
   const secret = process.env.SECRET;

    try {
        const id = (<JwtPayload>jwt.verify(token, secret!))["id"];
        req.headers.userId = id;
        next();
    } catch (error) {
        return res.status(403)
            .json(new ResponseModel(false, null, [{ message: "You're not authenticated!" }]));
    }
}

const auth = {
    checkToken,
    isAuthenticated
};

export default auth;