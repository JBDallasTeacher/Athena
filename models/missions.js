const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionSchema = new Schema({
  missionID: { type: String, required: true, unique: true },
  missionTEKs: { type: String, required: true },
  missionDescription: { type: String, required: true },
  missionGrade: { type: Numeric, required: true },
  missionQuestions: { type: [String], required: false },
  
});

const Mission = mongoose.model("Mission", studentsSchema);

module.exports = Mission;
