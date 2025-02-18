import express from 'express';
import { createMatch, getUserMatches } from '../controllers/matchController.js';

const router = express.Router();

router.post('/', createMatch); // Create match
router.get('/:userId', getUserMatches); // Obtains user's matches

export default router;
