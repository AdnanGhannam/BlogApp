import { Express } from "express";

type Routes = (app: Express) => void;

const config = (app: Express, ...routes: Array<Routes>) => {
    routes.forEach(route => route(app));
}

const routes = { config };

export default routes;