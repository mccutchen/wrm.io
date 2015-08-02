import Vector from './vector';

function alignment() {
    return function(boid, others) {
        var velocities = others.map(other => other.vel);
        return Vector.mean(velocities);
    };
}

function cohesion() {
    return function(subject, others) {
        var positions = others.map(other => other.vel);
        return Vector.mean(positions);
    };
}

function separation(minDist) {
    return function(subject, others) {
        var othersWithDistances = others.map(other => [other, subject.distance(other)]);
        var encroachers = othersWithDistances.filter(([, dist]) => dist < minDist);
        var fleeVectors = encroachers.map(other => Vector.sub(subject, other).scale(-1));
        return Vector.mean(fleeVectors);
    };
}

export default {
    alignment: alignment,
    cohesion: cohesion,
    separation: separation,
};
