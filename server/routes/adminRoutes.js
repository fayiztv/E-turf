import express from 'express';
import { addTurfAdmin, blockTurfAdmin, deleteTurfAdmin, getTurfAdmins, loginMainAdmin } from '../controllers/adminController.js';
import { adminOnly, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/login', loginMainAdmin);

// Turf Admin Management (protected)
router.post('/turf-admins', protect, adminOnly, addTurfAdmin);
router.get('/turf-admins', protect, adminOnly, getTurfAdmins);
router.patch('/turf-admins/:id/block', protect, adminOnly, blockTurfAdmin);
router.delete('/turf-admins/:id', protect, adminOnly, deleteTurfAdmin);

export default router;