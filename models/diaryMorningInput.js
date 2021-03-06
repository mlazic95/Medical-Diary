const mongoose = require('mongoose');

const { Schema } = mongoose;

const DiaryMorningInputSchema = new Schema({
  user: { type: Schema.ObjectId, ref: 'User', required: true },
  date: { type: Date },
  sleepDuration: { type: Number },
  sleepQuality: { type: Number },
  overallFeeling: { type: Number },
  sick: { type: Boolean },
  strangeSyndrome: { type: Boolean },
  stressLevel: { type: Number },
  notes: { type: String },
});

module.exports = mongoose.model('DiaryMorningInput', DiaryMorningInputSchema);
