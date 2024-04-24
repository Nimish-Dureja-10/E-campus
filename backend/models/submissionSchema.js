import mongoose from "mongoose";

const submissonSchema = mongoose.Schema({
    assignment: {
        type: Object,
        ref: 'assignment'
    },
    student: {
        type: Object,
        ref: 'users',
        required: false //change
    },
    submissionDate: {
        type: Date,
        default: Date.now
    },
    submissionFiles: [String]
});

const submission = mongoose.model('submission', submissonSchema);

export default submission;