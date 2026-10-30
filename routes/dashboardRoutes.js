import express from 'express';
import { dashboard } from '../controllers/dashboardController.js';
const router=express.Router();
export default (auth) => { router.get('/',auth,dashboard); return router; };
