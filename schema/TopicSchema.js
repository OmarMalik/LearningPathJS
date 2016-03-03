var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var topicSchema = new Schema({
  date_created: {type: Date, default: Date.now()},
  title: String,
});

module.exports = mongoose.model('Topic', topicSchema);