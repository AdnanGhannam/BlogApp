import { model, Schema, Types } from 'mongoose';
import { POST, TAG, USER } from '../constants/db.const';

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 40
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: Types.ObjectId,
        ref: USER,
        required: true
    },
    tags: [{
        type: Types.ObjectId,
        ref: TAG
    }],
    claps: [{
        type: Types.ObjectId,
        ref: USER
    }],
    creationTime: {
        type: Number,
        immutable: true,
        default: Date.now()
    }
});

const Post = model(POST, postSchema);

export default Post;