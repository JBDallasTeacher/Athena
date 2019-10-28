const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
  studentID: { 
    type: String, 
    required: true
  },
  studentClass: { 
    type: String, 
    required: true 
  },
  studentAddress: {
     type: String, 
     required: false 
    },
  averageGrade: [
    {  missionID: {type: String, required: false},
      averageGrade: { type: String, required: false} 
    }
  ],
  role: { 
    type: String, 
    required: true 
  },
  teacherID: { 
    type: String, 
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;

