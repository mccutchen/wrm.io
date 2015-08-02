import Vector from './vector';

function Boid(pos) {
    this.pos = pos || new Vector(0, 0);
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
}

Boid.prototype.distance = function(other) {
    var x1 = this.pos.x;
    var y1 = this.pos.y;
    var x2 = other.pos.x;
    var y2 = other.pos.y;
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
};

export default Boid;
