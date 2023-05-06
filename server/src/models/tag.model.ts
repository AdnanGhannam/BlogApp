import { model, Schema } from "mongoose";
import { TAG } from "../constants/db.const";

const tagSchema = new Schema({
    name: String
});

const Tag = model(TAG, tagSchema);

export default Tag;