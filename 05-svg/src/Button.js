export default class Button {
  constructor({ el, initText, endText }) {
    this.el = el;
    this.text = {init: initText, end: endText};
    this.init();
  }

  init() {
    this.drag();
    document.querySelector(".init-text").innerHTML = this.text.init;
    document.querySelector(".end-text").innerHTML = this.text.end;
  }

  drag() {
    this.dragEl = Draggable.create(".drag-box", {
      type: "x",
      bounds: ".bounding",
      overshootTolerance: 0,

      onDrag: function (e) {
        if (this.hitTest(".hit-area", 1))  {
          this.disable();
          TweenMax.to(".end-text", 0.3, { opacity: 1, ease: Sine.easeOut });
          TweenMax.to(".arrow", 0.3, { opacity: 0, ease: Sine.easeOut });
        }
      },

      onRelease: function (e) {
          TweenLite.to(this.target, 0.2, {
            x: -140
          });
      }
    });
  }
}

