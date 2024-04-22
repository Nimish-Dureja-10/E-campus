import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema({
    title: String,
    description: String,
    uploads: String,
    deadline: Date,
    teacher: {
        type: Object,
        ref: 'users'
    }
});

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;