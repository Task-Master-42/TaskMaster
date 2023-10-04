const request = require('supertest');
const { app } = require('../server.ts');
let server;

beforeAll(() => {
  const serverModule = require('../server.ts');
  server = serverModule.server || serverModule.app.listen(3000);
})

describe('Server Routes', () => {
  describe('GET /', () => {
    it('should respond with the index.html file', async() => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.type).toBe('text/html');
    });
  });

  describe('Unknown Route', () => {
    it('should respond with a 404 error', async () => {
      const response = await request(app).get('/unknownpath');
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe('File not found');
    })
  })
})

afterAll((done) => {
  if (server) server.close(done);
});