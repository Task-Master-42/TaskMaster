const express = require('express');
const authController = require('../controllers/authController.ts');
import {Request, Response} from 'express';

const router = express.Router();

router.post(
  '/login',
  (req: Request, res: Response) => {
    res.status(200).json({});
  }
);

router.post(
  '/signup',
  (req: Request, res: Response) => {
    res.status(200).json({});
  }
);

router.get(
  '/check',
  (req: Request, res: Response) => {
    res.status(200).json({});
  }
);

router.get(
  '/logout',
  (req: Request, res: Response) => {
    res.status(200).json({});
  }
);

export default router;