class clock {

    constructor(clock, color){
        this.clocks = document.querySelector(clock);
        this.color = document.querySelector(color);
        this.timer = null;
        this.run();
    }

    run(){
        this.date = new Date();
        this.seconds = this.date.getSeconds().toString();
        this.minutes = this.date.getMinutes().toString();
        this.hours = this.date.getHours().toString();
        if(this.seconds.length < 2) this.seconds = `0${this.seconds}`;
        if(this.minutes.length < 2) this.minutes = `0${this.minutes}`;
        if(this.hours.length < 2) this.hours = `0${this.hours}`;
        console.log(this.minutes.length);
        this.clocks.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
        this.color.innerHTML = `#${this.hours}${this.minutes}${this.seconds}`;
        document.body.style.backgroundColor = `#${this.hours}${this.minutes}${this.seconds}`;
    }

    go(){
        if( ! this.timer){
            this.timer = setInterval(this.run.bind(this), 1000);
        }
    }

    stop(){
        clearInterval(this.timer);
        this.timer = null;
    }

}