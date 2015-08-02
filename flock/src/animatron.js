var Animatron = {
    /**
     * Create and run an animation.
     *
     * @param drawFn {function(context, step, ?state)} the function to call on
     * every frame of the animation, where `step` is the current frame number
     * and `state` is an optional, arbitrary value returned from the last call
     * to `drawFn`.
     *
     * @param setupFn {?function(context)} the function to call after the
     * <canvas> element is created but before the animation has started.
     *
     * @param containerEl {?Element} the element to which the <canvas> should
     * be appended. Defaults to `document.body`.
     *
     * @returns {null}
     */
    animate: function(drawFn, setupFn, canvasEl, containerEl) {
        if (!canvasEl) {
            canvasEl = document.createElement('canvas');
            (containerEl || document.body).appendChild(canvasEl);
        }
        var ctx = canvasEl.getContext('2d');
        var initialState = (setupFn !== undefined) ? setupFn(ctx) : {};
        (function loop(step, state) {
            window.requestAnimationFrame(function() {
                loop(step + 1, drawFn(ctx, state, step));
            }, canvasEl);
        }(0, initialState));
    }
};

module.exports = Animatron;
