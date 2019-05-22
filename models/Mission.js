const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const missionSchema = new Schema({
  missionTEKs: {
    type: String,
    required: true
  },
  missionDescription: {
    type: String,
    required: true
  },
  missionQuestions: [
    { q: {type: String, required: true},
      k: { type: String, required: true},
      a: { type: String, required: true},
     }
 ],
  studentID: { 
    type: String, 
    required: true, 
    nique: true 
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Mission = mongoose.model("Mission", missionSchema);

module.exports = Mission;
