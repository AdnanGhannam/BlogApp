import mongoose from "mongoose";
import Post from "./post.model";
import Tag from "./tag.model";
import User from "./user.model";

/**
 * Load dotenv file before calling this function using 'env.config()' from 'dotenv' package
 */
const init = () => {
    const { DB_HOST: HOST, DB_NAME: NAME, DB_PORT: PORT } = process.env;

    if (!HOST || !NAME || !PORT) {
        throw new Error("Couldn't load dotenv file!, or some required fields are missing");
    }

    const uri = `mongodb://${HOST}:${PORT}/${NAME}`
    mongoose
        .connect(uri)
        .then(() => console.info(`Successfully connected to MongoDB at port: ${PORT}`))
        .catch(err => { throw new Error(`MongoDB connection Error: ${err}`) });
}

const db = {
    init,
    Post,
    User,
    Tag
}

export default db;