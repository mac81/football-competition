import mongoose, {Schema} from 'mongoose';
import findOrCreate from 'mongoose-findorcreate';

// const PredictionShema = new Schema({
//   matchId: {
//     type: Number,
//     required: true,
//     unique: true,
//   },
//   homeScore: {
//     type: String,
//   },
//   awayScore: {
//     type: String,
//   },
// });

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  predictions: [
    {
      matchId: {
        type: String,
        unique: true,
      },
      homeScorePrediction: Number,
      awayScorePrediction: Number,
    },
  ],
});

//PredictionShema.plugin(findOrCreate);

//export const Prediction = mongoose.model('Prediction', PredictionShema);
const User = mongoose.model('User', UserSchema);

export default User;
