import express from 'express'
import { pingCheck } from '../../controllers/pingCheck.js';
import projectRouter from './projectRouter.js';


const router = express.Router();

router.use('/ping' , pingCheck);
router.use('/projects' , projectRouter);

export default router;