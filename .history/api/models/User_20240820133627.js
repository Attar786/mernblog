const mongoose = require('mongoose');
const {Schema} = mongoose;
const CreateSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            min:4,
            unique: true
        }

    }
)