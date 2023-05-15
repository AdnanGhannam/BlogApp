import express from 'express';
import db from './models/models';
import env from 'dotenv';
import routes from './routes/routes';
import userRoutes from './routes/user.routes';
import middlewares from './middlewares/middlewares';
import postRoutes from './routes/post.routes';

// Load dotenv
env.config();

db.init();

const app = express();
middlewares.config(app);
routes.config(app,
    userRoutes,
    postRoutes);

// Setting up a listener
const { PORT } = process.env;
if (!PORT) {
    throw new Error(`Can't find 'PORT' field in dotenv file!`);
}
app.listen(PORT, () => {
    console.info(`Express app is running on port: ${PORT}`);
});
