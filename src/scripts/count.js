function Count () {
    this.count = 0
}

Count.prototype.increment = function () {
    this.count += 1;
}

Count.prototype.reset = function () {
    this.count = 0;
}

Count.prototype.value = function () {
    return this.count;
}

module.exports = Count;