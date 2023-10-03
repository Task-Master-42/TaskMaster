const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../database.ts');
import { Request, Response, NextFunction } from 'express';

const WORKFACTOR = 12;
const AUTHKEY = '3d62d002-9ab0-4a79-b0e2-68c269208eff';

const authController = {
  handleUserDetails: async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.locals.valid = true;
      const { username, password } = req.body;
      console.log(`Handling auth request for "${username}".`);
      if (!username || typeof username !== 'string') {
        res.locals.valid = false;
        console.log(`Invalid username format in signup.`);
      }
      if (!password || typeof password !== 'string') {
        res.locals.valid = false;
        console.log('Invalid password format in signup.');
      }
      if (res.locals.valid)
        res.locals.hpassword = await bcrypt.hash(password, WORKFACTOR);
      next();
    }catch(error){
      next(error);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {

    }catch(error){
      next(error);
    }
  },

  signup: async (req: Request, res: Response, next: NextFunction) => {
    try {

    }catch(error){
      next(error);
    }
  },

  startSession: async (req: Request, res: Response, next: NextFunction) => {
    try {

    }catch(error){
      next(error);
    }
  },

  isLoggedIn: async (req: Request, res: Response, next: NextFunction) => {
    try {

    }catch(error){
      next(error);
    }
  },

  logout: async (req: Request, res: Response, next: NextFunction) => {
    try {

    }catch(error){
      next(error);
    }
  }
};

export default authController;