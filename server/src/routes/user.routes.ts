import { Express } from "express";
import endpoints from '../controllers/users.controller'
import auth from "../middlewares/auth.middlewares";

const userRoutes = (app: Express) => {
    app.post("/login", endpoints.loginEndpoint);
    app.post("/signup", endpoints.signupEndpoint);
    app.post("/change-password", [auth.checkToken, auth.isAuthenticated], endpoints.changePasswordEndpoint);
    app.get("/user/:id", endpoints.getUserEndpoint);
    app.get("/users", endpoints.getUsersEndpoint);
    app.put("/user/:id", endpoints.updateUserEndpoint)
    app.delete("/user/:id", [auth.checkToken, auth.isAuthenticated],endpoints.deleteUserEndpoint);
};

export default userRoutes;