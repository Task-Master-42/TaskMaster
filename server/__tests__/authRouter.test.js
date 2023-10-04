const request = require('supertest');
const { app } = require('../server.ts');
let server;
const db = require('../database.ts');

beforeAll(() => {
  const serverModule = require('../server.ts');
  server = serverModule.server || serverModule.app.listen(3001);
});

describe('Auth Routes', () => {

  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let username = '';
  for (let i = 0; i < 20; i++) {
    username += letters[Math.floor(Math.random() * 26)]
  }

  describe('POST /auth/signup', () => {
    it('should successfully create new user account with valid credentials', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({username: username, password: 'egg'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBeTruthy();
    });
    it('should reject requests with no username', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({password: 'egg'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
    it('should reject requests with no password', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({username: 'jxqhrbklpnmtsyvfweg'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
    it('should reject requests with a username already in database', async () => {
      const response = await request(app)
        .post('/auth/signup')
        .send({username: username, password: 'leggomyeggo'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
  })
    
  describe('POST /auth/login', () => {
    it('should successfully login to user account', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({username: username, password: 'egg'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBeTruthy();
    });
    it('should reject request if no username', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({password: 'egg'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
    it('should reject request if no password', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({username: username});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
    it('should reject request if username is incorrect', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({username: 'hello', password: 'egg'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
    it('should reject request if password is incorrect', async () => {
      const response = await request(app)
        .post('/auth/login')
        .send({username: username, password: 'leggomyeggo'});
      expect(response.statusCode).toBe(200);
      expect(response.body.profile).toBe(null);
    });
  })

  describe('GET /auth/check', () => {
    it('should return isLoggedIn as true if there\'s a valid cookie', async () => {
      const agent = request.agent(app);
      await agent.post('/auth/login').send({username, password: 'egg'});

      const response = await agent.get('/auth/check');
      expect(response.status).toBe(200);
      expect(response.body.isLoggedIn).toBe(true);
    });
    it('should return isLoggedIn as false if there\'s no cookie', async () => {
      const response = await request(app).get('/auth/check');
      expect(response.status).toBe(200);
      expect(response.body.isLoggedIn).toBe(false);
    });
    /*
    it('should return isLoggedIn as false if cookie information is incorrect', async () => {
      const agent = request.agent(app);
      await agent.post('/auth/login').send({username, password: 'egg'});
      const response = await agent
        .get('/auth/check')
        .set('Cookie', 'jwt=eggo');
      expect(response.status).toBe(200);
      expect(response.body.isLoggedIn).toBe(false);
    });
    */
  })
    
  describe('GET /auth/logout', () => {
    it('should successfully end a session on logout request', async () => {
      const agent = request.agent(app);
      await agent.post('/auth/login').send({username, password: 'egg'});
      const response = await agent.get('/auth/logout')
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Logged out');

      //check isLoggedIn false
      const checkCookie = await agent.get('/auth/check');
      expect(checkCookie.status).toBe(200);
      expect(checkCookie.body.isLoggedIn).toBe(false);
    });
  })
})

afterAll(async () => {
  if (server) server.close();
  await db.end();
})