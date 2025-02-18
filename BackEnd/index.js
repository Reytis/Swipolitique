import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import matchRoutes from './routes/matchRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

dotenv.config(); // load environnement variables

const app = express();
app.use(express.json()); // Middleware for JSON

// Connect to DB
connectDB();

app.use('/api/users', userRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/messages', messageRoutes);

// Config port
const PORT = process.env.PORT || 8192;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
