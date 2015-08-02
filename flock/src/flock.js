function Flock(boids) {
    this.boids = boids || [];
}

Flock.prototype.add = function(boid) {
    this.boids.push(boid);
};

Flock.prototype.neighbors = function(boid) {
    return this.boids.filter(function(other) {
        return boid !== other;
    });
};

module.exports = Flock;
