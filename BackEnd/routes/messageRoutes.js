import express from 'express';
import { sendMessage, getMessages } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', sendMessage); // send a message
router.get('/:matchId', getMessages); // obtains match messages

export default router;
