const express = require("express");
const router = express.Router();


// Load input validation
const validateTimelineInput = require("../../validation/register");

// Load Timeline model
const Timeline = require("../../models/Timeline");

// @route POST api/Timelines
// @desc Register Timeline
// @access Public
router.post("/", async (req, res) => {
  // Form validation

  //const { errors, isValid } = validateRegisterInput(req.body);
  const { timeline } = req.body
  console.log("=======starting==>")

  try{
    const existingTimeline = await Timeline.findOne({userId: timeline.userId, url: timeline.url, completed: true})
    console.log("=======existing", existingTimeline)
    if(!existingTimeline){
      console.log("=============2")
      const newTimeline = new Timeline(timeline)
      const data = await newTimeline.save()
      return res.json({
        timeline: data
      })
    }else{
      console.log("==========3")
      return res.status(400).json({message: "timeline already exists"})
    }
  }catch(e){
    console.log("====e.message", e.message)
    return res.status(400).json({message: e.message})
  }
});

router.get("/:userId", async (req, res) => {
  // Form validation

  //const { errors, isValid } = validateRegisterInput(req.body);
  const { userId } = req.params
  try{
    const timelines = await Timeline.find({userId})
    return res.json({
      timelines
    })
  }catch(e){
    return res.status(400).json({message: e.message})
  }
});

router.delete("/:timelineId", async (req, res) => {
  // Form validation

  //const { errors, isValid } = validateRegisterInput(req.body);
  const { timelineId } = req.params
  try{
    const timeline = await Timeline.findOne({_id : timelineId})
    if(!timeline){
      return res.status(404).json({
        message: "Timeline does not exist"
      })
    }
    await Timeline.deleteOne({_id: timelineId})
    return res.json({
      message: "timeline deleted successfully"
    })
  }catch(e){
    return res.status(400).json({message: e.message})
  }
});



module.exports = router;
