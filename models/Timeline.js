const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TimelineSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  time: {
    type: String,
    required: true
  }
});
module.exports = Timeline = mongoose.model("timelines", TimelineSchema);