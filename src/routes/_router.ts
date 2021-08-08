import { Router } from "express";

const router = Router();

import apiRouter from './api/_router';
import pagesRouter from './pages/_router'

router.use('/api',apiRouter);
router.use('/pages',pagesRouter);

export default router;