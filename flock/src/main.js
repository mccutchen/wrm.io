var Animatron = require('./animatron');
// var Behaviors = require('./behaviors');
var Boid = require('./boid');
var Flock = require('./flock');

function setup() {
    var flock = new Flock();
    for (var i = 0; i < 5; i++) {
        flock.add(new Boid());
    }
    return {
        'flock': flock
    };
}

function draw(ctx, state, step) {
    console.log('step %d', step);
    var flock = state['flock'];
    var boids = flock.boids;
    for (var i = 0; i < flock.boids.length; i++) {
        var boid = boids[i];
        var neighbors = flock.neighbors(boid);
        console.log('boid %s neighbors %o', boid, neighbors);
        drawBoid(boid, ctx);
    }
    return state;
}

function drawBoid(boid, ctx) {
    var x = (0.5 + boid.pos.x) << 0;
    var y = (0.5 + boid.pos.y) << 0;
    ctx.fillStyle = '#333';
    ctx.fillRect(x, y, 5, 5);
}

function main() {
    Animatron.animate(draw, setup);
}

main();
