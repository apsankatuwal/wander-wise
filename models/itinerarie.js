import { Schema, model } from "mongoose";

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    notes: [String],
});

const itinerarySchema = new Schema(
    {
        trip: {
            type: Schema.Types.ObjectId
        }
    }
)