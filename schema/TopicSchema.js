var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('./PathSchema');

var TopicSchema = new Schema({
  date_created: {type: Date, default: Date.now()},
  name: String,
  paths: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Path'
  }]
});

module.exports = mongoose.model('Topic', TopicSchema);
