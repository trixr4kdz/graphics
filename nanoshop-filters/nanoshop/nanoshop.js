/*
 * This is a very simple module that demonstrates rudimentary,
 * pixel-level image processing.
 */
var Nanoshop = {
    /*
     * Applies the given filter to the given ImageData object,
     * then modifies its pixels according to the given filter.
     *
     * A filter is a function (x, y, r, g, b, a) that returns another
     * pixel as a 4-element array representing an RGBA value.
     */

    brighter: function (x, y, r, g, b, a) {
        return [r + 50, g + 50, b + 50, a];
    },

    darkener: function (x, y, r, g, b, a) {
        return [r / 2, g / 2, b / 2, a];
    },

    sepia: function (x, y, r, g, b, a) {
        return [r + 112, g + 66, b + 20, a + 10];
    },

    grid: function (x, y, r, g, b, a) {
        var colorX = x % 50,
            colorY = y % 50;

        if (colorX === 0 || colorY === 0) {
            return [0, 0, 0, 255];
        }
        return [r, g, b, a];
    },

    applyFilter: function (imageData, filter) {
        // For every pixel, replace with something determined by the filter.
        var pixelArray = imageData.data;

        for (var i = 0, max = imageData.width * imageData.height * 4; i < max; i += 4) {
            var pixelIndex = i / 4;

            var pixel = filter(
                pixelIndex % imageData.width, Math.floor(pixelIndex / imageData.height),
                pixelArray[i], pixelArray[i + 1], pixelArray[i + 2], pixelArray[i + 3]
            );

            for (var j = 0; j < 4; j += 1) {
                pixelArray[i + j] = pixel[j];
            }
        }

        return imageData;
    }
};