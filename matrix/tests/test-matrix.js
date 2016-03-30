var expect = chai.expect;

describe("Constructing a matrix", function () {
    it("successfully creates the 4x4 identity matrix", function (done) {
        var m = new Matrix();
        expect(m.elements).to.eql([
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ]);
        done();
    });

    it("successfully creates an arbitrary 4x4 matrix", function (done) {
        var m = new Matrix(
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6],
            [4, 5, 6, 7]
        );
        console.log("m.elements " + m.elements.length);
        expect(m.elements).to.eql([
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6],
            [4, 5, 6, 7]
        ]);
        done();
    })
});

describe("Matrix multiplication", function () {
    it("successfully multiplies 2 matrices", function (done) {
        var m1 = new Matrix(
            [1, 2, 3, 4],
            [4, 3, 2, 1],
            [2, 1, 3, 4],
            [4, 2, 1, 3]
        );
        var m2 = new Matrix(
            [4, 5, 6, 7],
            [7, 6, 5, 4],
            [7, 4, 6, 5],
            [4, 7, 6, 5]
        );
        var result = m1.multiply(m2);
        expect(result.elements).to.eql([
            [55, 57, 58, 50],
            [55, 53, 57, 55],
            [52, 56, 59, 53],
            [49, 57, 58, 56]
        ]);
        done();
    });
});


describe("Rotating", function () {
    it("successfully rotates the matrix", function (done) {
        var m = new Matrix();
        done();
    });
});

describe("Translating", function () {
    it("successfully translates the matrix", function (done) {
        var m = new Matrix(),
            translated = m.getTranslationMatrix(1, 2, 3);

        expect(translated.elements).to.eql([
            [1, 0, 0, 1],
            [0, 1, 0, 2],
            [0, 0, 1, 3],
            [0, 0, 0, 1]
        ]);
        done();
    });
});

describe("Scaling", function () {
    it("successfully scales the matrix", function (done) {
        var m = new Matrix(),
            scaled = m.getScalingMatrix(1, 2, 3);

        expect(scaled.elements).to.eql([
            [1, 0, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 3, 0],
            [0, 0, 0, 1]
        ]);
        done();
    });
});

describe("Conversion for WebGL consumption", function () {
    it("successfully creates a 16x1 vector", function (done) {
        var m = new Matrix(
            [1, 2, 3, 4],
            [2, 3, 4, 5],
            [3, 4, 5, 6],
            [4, 5, 6, 7]
        );
        expect(m.convert()).to.eql([
            1, 2, 3, 4,
            2, 3, 4, 5,
            3, 4, 5, 6,
            4, 5, 6, 7
        ]);
        done();
    });
});
