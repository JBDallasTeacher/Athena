const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teachersSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  teacherID: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  teacherClass: { 
    type: String, 
    required: true 
  },
  teacherUsername:  {
    type: String, 
    required: true 
  },
  teacherSubject: { 
    type: String, 
    required: false 
  },
  teacherGrade: { 
    type: Number, 
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Teacher = mongoose.model("Teacher", teachersSchema);

module.exports = Teacher;
