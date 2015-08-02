function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.fromAngle = function(angle, mag) {
    return new Vector(mag * Math.cos(angle), mag * Math.sin(angle));
};

Vector.mean = function(vectors) {
    var length = vectors.length;
    switch (length) {
    case 0:
        return new Vector();
    case 1:
        return vectors[0];
    default:
        var sum = vectors.reduce(function(acc, v) {
            return acc.add(v);
        }, new Vector());
        return sum.scale(1 / length);
    }
};

Vector.add = function(v1, v2) {
    return new Vector(v1.x + v1.x, v1.y + v2.y);
};

Vector.sub = function(v1, v2) {
    return new Vector(v1.x - v1.x, v1.y - v2.y);
};

Vector.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.scale = function(n) {
    this.x *= n;
    this.y *= n;
    return this;
};

Vector.prototype.add = function(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
};

Vector.prototype.sub = function(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
};

Vector.prototype.normalize = function() {
    var m = this.magnitude();
    switch (m) {
    case 0:
        return this.scale(0);
    default:
        return this.scale(1 / m);
    }
};

Vector.prototype.zero = function() {
    this.x = 0;
    this.y = 0;
    return this;
};

Vector.prototype.validate = function() {
    if (isNaN(this.x + this.y)) {
        return this.zero();
    } else {
        return this;
    }
};

Vector.prototype.toString = function() {
    return 'Vector(' + this.x + ',' + this.y + ')';
};

module.exports = Vector;
