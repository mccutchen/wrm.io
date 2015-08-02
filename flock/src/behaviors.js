var Vector = require('./vector');

function alignment() {
    return function(boid, others) {
        var velocities = others.map(function(other) { return other.vel; });
        return Vector.mean(velocities);
    };
}

function cohesion() {
    return function(subject, others) {
        var positions = others.map(function(other) { return other.pos; });
        return Vector.mean(positions);
    };
}

function separation(minDist) {
    return function(subject, others) {
        var othersWithDistances = others.map(function(other) {
            return [other, subject.distance(other)];
        });
        var encroachers = othersWithDistances.filter(function(pair) {
            return pair[1] < minDist;
        });
        var fleeVectors = encroachers.map(function(pair) {
            return Vector.sub(subject, pair[0]).scale(-1);
        });
        return Vector.mean(fleeVectors);
    };
}

module.exports = {
    alignment: alignment,
    cohesion: cohesion,
    separation: separation,
};
