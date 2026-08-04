import { Schema, model } from "mongoose";


const Baggageschema = new Schema(
    {
        
        Name: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type:Boolean,
            default:false,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            require:true,
        },
        trip: {
            type: Schema.Types.ObjectId,
            ref: "Trip",
            require: true,
        }
    },
    {
        timestamps: true,
    }
);

const Baggage = model("Baggage", Baggageschema);
export default Baggage;