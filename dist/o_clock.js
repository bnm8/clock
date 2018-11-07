"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var clock = function () {
    function clock(_clock, color) {
        _classCallCheck(this, clock);

        this.clocks = document.querySelector(_clock);
        this.color = document.querySelector(color);
        this.timer = null;
    }

    _createClass(clock, [{
        key: "run",
        value: function run() {
            this.date = new Date();
            this.seconds = this.date.getSeconds().toString();
            this.minutes = this.date.getMinutes().toString();
            this.hours = this.date.getHours().toString();
            if (this.seconds.length < 2) this.seconds = "0" + this.seconds;
            if (this.minutes.length < 2) this.minutes = "0" + this.minutes;
            if (this.hours.length < 2) this.hours = "0" + this.hours;
            console.log(this.minutes.length);
            this.clocks.innerHTML = this.hours + ":" + this.minutes + ":" + this.seconds;
            this.color.innerHTML = "#" + this.hours + this.minutes + this.seconds;
            document.body.style.backgroundColor = "#" + this.hours + this.minutes + this.seconds;
        }
    }, {
        key: "go",
        value: function go() {
            this.timer = setInterval(this.run.bind(this), 1000);
        }
    }, {
        key: "stop",
        value: function stop() {
            clearInterval(this.timer);
        }
    }]);

    return clock;
}();