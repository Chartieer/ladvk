// require the server
const request = require('supertest');
const server = require('../src/server');
// require supertest
// close the server after each test
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

describe('routes: hello', () => {
  test('should respond as expected', async () => {
    const response = await request(server).get('/hello');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual({"version": "asdfdf"});
  });
});

describe('routes: 404', () => {
  test('should allways protected', async () => {
    const response = await request(server).get('/sdfasfsf');
    expect(response.status).toEqual(401);
    //expect(response.type).toEqual('application/json');
    //expect(response.body).toEqual({"version": "asdfdf"});
  });
});

