const db = require('../database.ts');

import { Request, Response, NextFunction } from 'express';

const boardController = {

  createCard: async (req:Request, res: Response, next: NextFunction) => {
    try {
      const { boardId, columnId, name, desc } = req.body;

      const newCard = await db.query(
        'INSERT INTO cards (board_id, column_id, name, desc) VALUES ($1, $2, $3, $4) RETURNING card_id;',
        [boardId, columnId, name, desc]
      );

      const cardId = newCard.rows[0].card_id;
      res.locals.cardId = cardId;
      next();
    } catch(error) {
      next({
        log: error,
        message: { error: 'Error occured while creating card.'}
      });
    }
  },

  getAllCards: async (req:Request, res: Response, next: NextFunction) => {
    try {
      const {boardId} = req.params;
      const cards = await db.query('SELECT * FROM cards WHERE board_id = $1;', [boardId]);

      res.locals.cards = cards.rows;
      next();
    } catch(error) {
      next({
        log: error,
        message: { error: 'Error occured while getting cards.'}
      });
    }
  },

  updateCard: async (req:Request, res: Response, next: NextFunction) => {
    try {
      const { cardId, param, updateInfo } = req.body;
      const result = await db.query('UPDATE cards SET ${param} = $1 WHERE card_id = $2', [updateInfo, cardId]);

      const success = result.rowCount > 0;
      res.locals.success = success;
      next();
    } catch(error) {
      next({
        log: error,
        message: { error: 'Error occured while updating card.'}
      });
    }
  },

  deleteCard: async (req:Request, res: Response, next: NextFunction) => {
    try {
      const {cardId} = req.body;
      const result = await db.query('DELTE FROM cards WHERE card_id = $1;', [cardId])

      const success = result.rowCount > 0;
      res.locals.success = success;
      next();
    } catch(error) {
      next({
        log: error,
        message: { error: 'Error occured while creating card.'}
      });
    }
  },

}

export default boardController;