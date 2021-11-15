import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const buttonSchema = new Schema(
    {
        _id: { type: Number, default: 1 },
        pressed: { type: Boolean, required: true },
    },
);

const Button = mongoose.model("Button", buttonSchema);

export { Button };