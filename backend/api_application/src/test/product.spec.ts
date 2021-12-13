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

  it('should return one product', (done) => {
    request(app)
      .get('/v1/product/0012d9a5-8486-442b-9f77-418a24a031ec')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.product_name).toBe('Emmental Cœur de Meule - Président - 250 g')
        return done();
      });
  });

  it('should return many product paginated', (done) => {
    request(app)
      .get('/v1/products/0')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        expect(res.body.length).toEqual(9)
        return done();
      });
  });

})
