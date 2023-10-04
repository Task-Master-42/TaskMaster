const express = require('express');
const boardController = require('../controllers/boardController.ts');
import {Request, Response} from 'express';

const router = express.Router();

router.post(
  '/card',
  boardController.createCard,
  (req: Request, res: Response) => {
    res.status(200).json({});
  }
);

router.get(
  '/card',
  boardController.getAllCards,
  (req: Request, res: Response) => {
  res.status(200).json({});
  }
);

router.patch(
  '/card',
  boardController.updateCard,
  (req: Request, res: Response) => {
  res.status(200).json({});
  }
);

router.delete(
  '/card',
  boardController.deleteCard,
  (req: Request, res: Response) => {
  res.status(200).json({});
  }
);

export default router;