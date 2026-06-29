import { schema, model } from "mongoose";


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
            type: schema.Types.Objectid,
            ref: "User",
            require:true,
        },
        trip: {
            type: schema,Types,Objectid,
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