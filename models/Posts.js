const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const users = new Schema(
//     {
//       Name: {
//         type: String,
//         required: true,
//         default: null
//       },
//       UID: {
//         type: String,
//         required: true,
//         default: null
//       },
//       Phone_Number: {
//         type: Number,
//         required: true,
//         default: null
//       },
//       date: {
//         type: Date,
//         default: Date.now,
//       },
//     },
//   )

// const PostSchema = new Schema({
//   unique: {
//     type: String,
//     required: true,
//   },
//   messages: [chats]
// });

const GeoSchema = mongoose.Schema({
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number], //the type is an array of numbers
    index: "2dsphere",
  },
});

const User_Details_Schema = new Schema({
  Name: {
    type: String,
    required: true,
    default: null,
  },
  user_id: {
    type: String,
    required: true,
    default: null,
  },
  Primary_Language: {
    type: String,
    required: true,
    default: null,
  },
  Secondary_Language: {
    type: String,
    required: true,
    default: null,
  },
  Phone_Number: {
    type: Number,
    required: true,
    default: null,
  },
  valid: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User_Answer = new Schema({
  user_id: {
    type: String,
    required: true,
    default: null,
  },
  answers: {
    type: Object,
    required: true,
    default: null,
  },
});

// module.exports = mongoose.model("Posts", PostSchema);

module.exports = {
  User_Details_Schema: mongoose.model("User_Details", User_Details_Schema),
  User_Answer: mongoose.model("User_Answer", User_Answer),
};
