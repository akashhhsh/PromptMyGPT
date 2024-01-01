import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "User already exist!"],
        required: [true, "Email is necessary!"]
    },
    username: {
        type: String,
        required: [true, "Username is necessary!"]
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);
export default User