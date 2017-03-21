import test from 'ava';
import app from '../../app';
import supertest from 'supertest';

const request = supertest.agent(app.listen());

test('/', async t => {
  const res = await request.get('/');
  t.is(res.status, 200);
});

test('/explore', async t => {
  const res = await request.get('/explore');
  t.is(res.status, 200);
});

test('/articles/:slug', async t => {
  const res = await request.get('/articles/a-drop-in-the-ocean-daniel-regan');
  t.is(res.status, 200);
});