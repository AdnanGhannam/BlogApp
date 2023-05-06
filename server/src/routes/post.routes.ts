import { Express } from "express";
import endpoints from "../controllers/posts.controller";
import auth from "../middlewares/auth.middlewares";

const postRoutes = (app: Express) => {
    app.get("/posts", endpoints.getPostsEndpoint);
    app.get("/post/:id", endpoints.getPostEndpoint);
    app.post("/post", [auth.checkToken, auth.isAuthenticated], endpoints.createPostEndpoint);
    app.put("/post/:id", endpoints.updatePostEndpoint);
    app.delete("/post/:id", [auth.checkToken, auth.isAuthenticated], endpoints.deletePostEndpoint);
};

export default postRoutes;