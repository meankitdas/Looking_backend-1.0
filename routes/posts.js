const express = require("express");
const router = express.Router();
const { User_Details_Schema, User_Answer } = require("../models/Posts");

router.post("/details", (req, res) => {
  const user_details = new User_Details_Schema({
    Name: req.body.Name,
    user_id: req.body.user_id,
    Primary_Language: req.body.Primary_Language,
    Secondary_Language: req.body.Secondary_Language,
    Phone_Number: req.body.Phone_Number,
    valid: req.body.valid,
  });

  user_details
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});


router.post("/answers", (req, res) => {
    const user_answers = new User_Answer({
        user_id: req.body.user_id,
        answers: req.body.answers,
    });
    
    user_answers
        .save()
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.json({ message: err });
        });
})


module.exports = router;
