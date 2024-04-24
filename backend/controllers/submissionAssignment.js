import submission from "../models/submissionSchema.js";

export const createSubmission = async (req, res) => {
  try {
    const assignmentId = req.params.id;
    // const student = req.user.id;
    console.log(assignmentId)

    const { submissionFiles } = req.body;

    const submissionCreate = await submission.create({
        assignment: assignmentId,
        // student: studentId,
        submissionFiles: submissionFiles
      });

    res.status(200).json({
      success: true,
      submissionCreate,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};
