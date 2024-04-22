import mongoose from "mongoose";

const submissonSchema = mongoose.Schema({
    assignment: {
        type: Object,
        ref: 'assignment'
    },
    student: {
        type: Object,
        ref: 'users'
    },
    submissionDate: Date,
    submissionFiles: [String]
});

const submission = mongoose.model('submission', submissonSchema);

export const submission;