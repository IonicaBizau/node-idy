function Id(length) {
    length = length || 10;
    return Math.random().toString(35).substr(2, length);
}

module.exports = Id;
