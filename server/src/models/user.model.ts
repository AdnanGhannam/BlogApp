import { model, Schema } from "mongoose";
import { USER } from "../constants/db.const";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxlength: 20
    },
    password: String,
    img: String,
    bio: {
        type: String,
        maxlength: 100
    },
    fb: String,
    tw: String,
    lnk: String,
    joinDate: {
        type: Number,
        immutable: true,
        default: Date.now()
    },
    nofp: {
        type: Number,
        default: 0
    }
});

const User = model(USER, userSchema);

export default User;