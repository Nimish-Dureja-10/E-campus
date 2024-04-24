import assignment from "../models/assignmentSchema.js";

export const createassignment = async (req, res) => {
  try {
    // const userId = req.user._id;
    const {title,description,upload,deadline} = req.body;
    const assignments = await assignment.create({
        title,description,upload,deadline
    });
    res.status(201).json({
      success: true,
      message: "Successfully created",
      assignments,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Either of the fields are empty",
      error
    });
  }
};

export const getAllAssignments = async (req, res) => {
  try {
    const allAssignments = await assignment.find({});
    res.status(200).json({
      success: true,
      allAssignments,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error,
    });
  }
};

export const getAssignmentById = async (req, res) => {
    try {
      const _id = req.params.id;
      if (!_id) {
        return res.status(404).json({
          success: false,
          message: "No ID provided",
        });
      }
  
      const assignments = await assignment.findById(_id);
      if (!assignments) {
        return res.status(404).json({
          success: false,
          message: "Assignment not found",
        });
      }
  
      res.status(200).json({
        success: true,
        assignments,
      });
    } catch (error) {
      console.error("Error retrieving assignment:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      });
    }
  };
  export const deleteAssignmentById = async (req, res) => {
    try {
      const _id = req.params.id;
      const deletedAssignment = await assignment.findByIdAndDelete(_id);
      if (!deletedAssignment) {
        return res.status(404).json({ message: "Assignment not found" });
      }
      res.status(200).json({ message: "Assignment deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
