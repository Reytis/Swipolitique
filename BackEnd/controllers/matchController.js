import Match from '../models/Match.js';
import User from '../models/User.js';

// Create a match
export const createMatch = async (req, res) => {
    try {
        const { user1, user2, swipeAccuracy } = req.body;

        // Verify if match already exists between users
        const existingMatch = await Match.findOne({
            $or: [
                { user1, user2 },
                { user1: user2, user2: user1 }
            ]
        });

        if (existingMatch) {
            return res.status(400).json({ error: 'Match already exists' });
        }

        const match = new Match({ user1, user2, swipeAccuracy });
        await match.save();

        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// get user's matches
export const getUserMatches = async (req, res) => {
    try {
        const { userId } = req.params;

        const matches = await Match.find({
            $or: [{ user1: userId }, { user2: userId }]
        }).populate('user1 user2', 'name mainImg');

        res.json(matches);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
