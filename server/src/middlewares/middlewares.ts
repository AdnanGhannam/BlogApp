import express, { Express } from "express";

const config = (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

const middlewares = {
    config
};

export default middlewares;