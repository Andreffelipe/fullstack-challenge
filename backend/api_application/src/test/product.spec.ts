import request from 'supertest';
import { app } from '../server';

describe('', () => {
  it('should return \'Fullstack Challenge 2021\'', (done) => {
    let msg = 'Fullstack Challenge 2021';
    request(app)
      .get('/v1/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.message).toEqual(msg)
        return done();
      });
  });

  it('should return one product', () => {
    request(app)
      .get('/v1/products/')
  });

})
