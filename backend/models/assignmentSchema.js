import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema({
    title: String,
    description: String,
    upload: {
        type:[String],
        required :false,
    },
    deadline: String,
    // teacher: {
    //     type: Object,
    //     ref: 'users'
    // }
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;