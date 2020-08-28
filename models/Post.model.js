const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: String,
    createId: Number,
    picPath: String,
    picName: String
  },
  { timestamps: true }
);

module.exports = model('Post', postSchema);