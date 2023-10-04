const express = require('express');
const boardController = require('../controllers/boardController.ts');
import {Request, Response} from 'express';

const router = express.Router();

router.post(
'/card',
  (req: Request, res: Response) => {
    res.status(200).json({});
  }
);

router.get(
'/card',
    (req: Request, res: Response) => {
    res.status(200).json({});
    }
);

router.patch(
'/card',
    (req: Request, res: Response) => {
    res.status(200).json({});
    }
);

router.delete(
'/card',
    (req: Request, res: Response) => {
    res.status(200).json({});
    }
);

export default router;