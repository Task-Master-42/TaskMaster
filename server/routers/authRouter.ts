import express from 'express';
import authController from '../controllers/authController.ts';
import {Request, Response} from 'express';

const router = express.Router();

router.post(
  '/login',
  authController.handleUserDetails,
  authController.login,
  authController.startSession,
  (req: Request, res: Response) => {
    res.status(200).json({ profile: res.locals.profile });
  }
);

router.post(
  '/signup',
  authController.handleUserDetails,
  authController.signup,
  authController.startSession,
  (req: Request, res: Response) => {
    res.status(200).json({ profile: res.locals.profile });
  }
);

router.get(
  '/check',
  authController.isLoggedIn, 
  (req: Request, res: Response) => {
    res.status(200).json({ isLoggedIn: res.locals.isLoggedIn });
  }
);

router.get(
  '/logout',
  authController.logout,
  (req: Request, res: Response) => {
    res.status(200).json({ message: 'Logged out' });
  }
);

export default router;