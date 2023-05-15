import { RequestHandler } from "express";
import { Types } from "mongoose";
import ResponseModel from "../helpers/response";
import db from "../models/models";

const getPostsEndpoint: RequestHandler = (req, res) => {
    db.Post
        .find()
        .populate(["author", "tags"])
        .exec()
        .then(posts => {
            res.status(200)
                .json(new ResponseModel(true, posts));
        })
        .catch(err => {
            res.status(400)
                .json(new ResponseModel(false, null, err));
        });
};

const getPostEndpoint: RequestHandler = (req, res) => {
    const id = req.params["id"];

    if (!Types.ObjectId.isValid(id)) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Id is not valid" }]));
    }

    db.Post
        .findById(id)
        .populate(["author", "tags"])
        .exec()
        .then(post => {
            if (!post)  {
                return res
                    .status(404)
                    .json(new ResponseModel(
                        true, null, [{ message: `Post with id: '${id}' is not found!` }]));
            }

            res
                .status(200)
                .json(new ResponseModel(true, post));
        })
        .catch(err => {
            res.status(400)
                .json(new ResponseModel(false, null, err));
        });
};

const createPostEndpoint: RequestHandler = async (req, res) => {
    if (!Object.keys(req.body).length) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Request body is required!" }]));
    }

    const authorId = req.headers.userId;
    
    const { title, content, tags } = req.body;

    // Add Tags
    let tagsIds: string[] = [];

    for (const tag of tags) {
        let dbTag = await db.Tag.findOne({ name: tag.trim() });

        if (!dbTag) {
            dbTag = await db.Tag.create({ name: tag.trim() });
        }

        tagsIds.push((await dbTag.save()).id);
    }

    // Add Post
    const post = new db.Post({ title, content, author: authorId, tags: tagsIds });

    post.save()
        .then(results => {
            console.log()
            res.status(201)
                .json(new ResponseModel(true, results));
        })
        .catch(err => {
            res
                .status(400)
                .json(new ResponseModel(false, null, err));
        });
};

const updatePostEndpoint: RequestHandler = (req, res) => {
    // TODO
};

const deletePostEndpoint: RequestHandler = async (req, res) => {
    const { userId } = req.headers;
    const postId = req.params["id"];

    if (!Types.ObjectId.isValid(postId)) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: "Id is not valid" }]));
    }

    const post = await db.Post.findById(postId);

    if (!post) {
        return res
            .status(400)
            .json(new ResponseModel(false, null, [{ message: `Post with Id: ${postId} is not found` }]));
    }

    if (post.author != userId) {
        return res.status(401)
            .json(new ResponseModel(false, null, [{ message: "Unauthorized!" }]));
    }

    const results = await db.Post.deleteOne({ _id: postId });

    if (results.deletedCount == 0) {
        return res
            .status(500)
            .json(new ResponseModel(false, null, [{ message: "Something went wrong!" }]));
    }

    res.status(202)
        .json(new ResponseModel(true));
};

const endpoints = {
    getPostsEndpoint,
    getPostEndpoint,
    createPostEndpoint,
    updatePostEndpoint,
    deletePostEndpoint
};

export default endpoints