const request = require('supertest');
import app from '../server/app';

describe("ExpressTS test suite", () => {
    it("should return 200 in homepage", (done) => {
        request(app).get("/")
            .expect(200, done);
    });

    it("should return 404 in homepage", (done) => {
        request(app).get("/random-page")
            .expect(404, done);
    });
});
