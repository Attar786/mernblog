const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const CreateSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            min:4,
            unique: true
        },
        password: {
            type: String,
            required: true,
            min:4
            
        }

    });

const UserModel = model ('user', UserSchema);
module.exports = UserModel;

