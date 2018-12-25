// require the server
const request = require('supertest');
const server = require('../src/server');
// require supertest
// close the server after each test

let jwt = 'nischt';
afterEach(() => {
  server.close();
});


describe('routes: index', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual('Hello Welt');
  });
});

describe('routes: api', () => {
  const pack = require('../package.json');
  test('should respond as expected', async () => {
    const response = await request(server).get('/api');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.version).toEqual(pack.version);
  });
});

describe('routes: Login', () => {
  test('should Fail and respond as expected', async () => {
    const response = await request(server).post('/api/login').send({
      email: 'admin2@example.com',
      password: 'password'
    });
    expect(response.status).toEqual(422);
    expect(response.type).toEqual('text/plain');
  });

  test('should receive token', async () => {
    const response = await request(server).post('/api/login').send({ email: 'admin2@example.com', password: 'password123' });
    expect(response.status).toEqual(201);
    expect(response.type).toEqual('application/json');

    jwt =  response.body.token;

    console.log("YXXXCXCXCXCXCCC", jwt)
  });
});

describe('routes: hello', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/hello');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual({ version: 'asdfdf' });
  });
});

describe('routes: 404', () => {
  test('should protected', async () => {
    const response = await request(server).get('/sdfasfsf');
    expect(response.status).toEqual(401);
    // expect(response.type).toEqual('application/json');
    // expect(response.body).toEqual({"version": "asdfdf"});
  });
});
