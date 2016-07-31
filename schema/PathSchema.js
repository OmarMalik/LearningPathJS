var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PathSchema = new Schema({
  date_created: {type: Date, default: Date.now()},
  name: String,
  steps: [{
    index: Number,
    name: String,
    desc: String,
    link: String 
  }],
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic'
  }
});

module.exports = mongoose.model('Path', PathSchema);
