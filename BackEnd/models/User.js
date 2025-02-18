import mongoose from 'mongoose';

const swipePrecisionSchema = new mongoose.Schema({
    total: { type: Number, default: 0 },
    accuracy: { type: Number, default: 0 }
});

const userSchema = new mongoose.Schema(
    {
        id: { type: Number, unique: true },
        name: { type: String, required: true },
        mainImg: { type: String },
        imgs: [{ type: String }],
        age: { type: Number, required: true },
        gender: { type: String, enum: ['male', 'female', 'nonBinary'], required: true },
        side: { type: String, enum: ['left', 'right', 'center'], required: true },
        verification: { type: String, enum: ['none', 'waiting', 'verified'], default: 'none' },
        swipePrecision: swipePrecisionSchema,
        userSwipePrecision: swipePrecisionSchema,
        matchList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }],
        lookFor: {
            age: { min: Number, max: Number },
            gender: [{ type: String, enum: ['male', 'female', 'nonBinary'] }],
            isIncognito: { type: Boolean, default: false }
        },
        blockedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
