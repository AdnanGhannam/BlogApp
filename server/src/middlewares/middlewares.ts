import express, { Express } from "express";
import cors from 'cors';

const config = (app: Express) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: ["http://localhost:4200"],
        optionsSuccessStatus: 200
    }));
}

const middlewares = {
    config
};

export default middlewares;