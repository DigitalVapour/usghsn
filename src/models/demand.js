import mongoose from "mongoose";

const demandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    date:  {
        type: String,
        required: true,
    },
    demand: {
        type: String,
        required: true,
    },
    approved: {
        type: Boolean,
        default: false,
    }
});

const Demand = mongoose.models.demands || mongoose.model("demands", demandSchema);

export default Demand;