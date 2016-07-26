var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StepSchema = new Schema({
  date_created: {type: Date, default: Date.now()},
  name: String,
  desc: String,
  link: String
});

var PathSchema = new Schema({
  date_created: {type: Date, default: Date.now()},
  name: String
});

var TopicSchema = new Schema({
  date_created: {type: Date, default: Date.now()},
  name: String,
  paths: [PathSchema]
});

module.exports = mongoose.model('Topic', TopicSchema);