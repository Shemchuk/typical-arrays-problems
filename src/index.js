
exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }

    let result = array.reduce((minimum, current) => {
        if (minimum > current) {
            minimum = current;
        }
        return minimum;
    }, array[0]);

    return result;
};

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }

    let result = array.reduce((maximum, current) => {
        if (maximum < current) {
            maximum = current;
        }
        return maximum;
    }, array[0]);

    return result;
};

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }

    return array.reduce((prev, current) => prev + current, 0) / array.length;
};

