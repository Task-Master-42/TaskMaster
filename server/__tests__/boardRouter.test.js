// const request = require('supertest');
// const { app } = require('../server.ts');
// let server;
// const db = require('../database.ts');

// beforeAll(() => {
//   const serverModule = require('../server.ts');
//   server = serverModule.server || serverModule.app.listen(3002);
// });

// describe('Board Routes', () => {

//   describe('POST /board/card', async () => {
//     it('should create a new card in a board'), async () => {

//     }
//     it('should reject requests missing a board parameter'), async () => {
      
//     }
//     it('should reject requests missing a column parameter'), async () => {
      
//     }
//     it('should reject requests missing a name parameter'), async () => {
      
//     }
//     it('should reject requests to boards that do not exist'), async () => {
      
//     }
//     it('should reject requests to columns that do not exist'), async () => {
      
//     }
//   })

//   describe('GET /board/card', async () => {
//     it('should send all cards from a given board'), async () => {
      
//     }
//   })

//   describe('PATCH /board/card', async () => {
    
//   })

//   describe('DELETE /board/card', async () => {
    
//   })
// })

// afterAll((done) => {
//   if (server) server.close(done);
// });

/*

Create a card
	{board: num, column: num, name: string, desc?: string}
	{card: num}
Read all cards
Update card column
	{card: num, newColumn: num}
	{success: boolean}
Update card name
	{card: num, newName: string}
	{success: boolean}
Update card desc
	{card: num, newDesc: string}
	{success: boolean}
Delete a card
	{card: num}

*/