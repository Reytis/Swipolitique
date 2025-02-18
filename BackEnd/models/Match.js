import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema(
    {
        user1: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        user2: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        status: { type: String, enum: ['matched', 'rejected'] },
    },
    { timestamps: true }
);

const Match = mongoose.model('Match', matchSchema);

export default Match;
