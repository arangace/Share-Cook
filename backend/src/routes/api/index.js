import express from 'express';

const router = express.Router();

import button from './routes';
router.use('/button', button);

export default router;