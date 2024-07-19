import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
      },
});

const User = mongoose.models.User  || mongoose.model('User', UserSchema);

export default User;