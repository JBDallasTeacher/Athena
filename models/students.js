const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
  studentID: { type: integer, required: true, unique: true },
  studentUsername:  { type: String, required: true },
  studentPassword:  { type: String, required: true },
  studentName: { type: String, required: true },
  studentClass: { type: String, required: true },
  studentTeacher: { type: String, required: true },
  studentAddress: { type: String, required: false },
  studentMissionGrades: { type: [String], required: false },
  studentRole: { type: String, required: true },
});

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;
