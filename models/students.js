const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  studentID: { type: integer, required: true, unique: true },
  studentName: { type: String, required: true },
  studentClass: { type: String, required: true },
  studentTeacher: { type: String, required: true },
  studentAddress: { type: String, required: false },
  studentMissionGrade: { type: integer, required: true },
  studentRole: { type: String, required: true },
});

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;
