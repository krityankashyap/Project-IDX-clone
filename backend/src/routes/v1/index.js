import express from 'express'
import { pingCheck } from '../../controllers/pingCheck.js';

const router = express.Router();

router.use('/ping' , pingCheck);

export default router;