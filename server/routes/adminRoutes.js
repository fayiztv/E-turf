import express from 'express';
import { loginMainAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/login', loginMainAdmin);

export default router;