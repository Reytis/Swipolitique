import Message from '../models/Message.js';

// Send a message
export const sendMessage = async (req, res) => {
    try {
        const { match, sender, content } = req.body;

        const message = new Message({ match, sender, content });
        await message.save();

        res.status(201).json(message);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Obtains messages from a match
export const getMessages = async (req, res) => {
    try {
        const { matchId } = req.params;

        const messages = await Message.find({ match: matchId }).populate('sender', 'name mainImg');
        res.json(messages);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
