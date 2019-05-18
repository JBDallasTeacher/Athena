const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
  teacherID: { type: integer, required: true, unique: true },
  teacherName: { type: String, required: true },
  teacherClass: { type: String, required: true },
  teacherPassword: { type: String, required: true },
  teacherSubject: { type: String, required: false },
  teacherGrade: { type: integer, required: true },
});

const Teachers = mongoose.model("Teachers", studentsSchema);

module.exports = Students;
