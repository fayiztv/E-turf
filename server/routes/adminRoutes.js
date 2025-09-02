import express from 'express';
import { addTurfAdmin, loginMainAdmin } from '../controllers/adminController.js';
import { adminOnly, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', loginMainAdmin);

// Turf Admin Management (protected)
router.post('/turf-admins', protect, adminOnly, addTurfAdmin);

export default router;