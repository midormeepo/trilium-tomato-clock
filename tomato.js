/*
* This widget allows you to use Pomodoro Technique.
*/
const seed=`
<svg t="1693879264402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2623" width="35" height="35"><path d="M938.666667 298.666667v106.666666a277.333333 277.333333 0 0 1-277.333334 277.333334H554.666667v213.333333h-85.333334v-298.666667l0.810667-42.666666A277.333333 277.333333 0 0 1 746.666667 298.666667H938.666667zM256 128a298.837333 298.837333 0 0 1 283.434667 204.202667A319.018667 319.018667 0 0 0 427.349333 554.666667H384a298.666667 298.666667 0 0 1-298.666667-298.666667V128h170.666667z" p-id="2624" fill="#4caf50"></path><title>start</title></svg>
`
const stop=`
<svg t="1693879760128" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="32651" width="32" height="32"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7z" fill="#f04c0b" p-id="32652"></path><title>stop</title></svg>
`
const svgTomato = `
<svg t="1692927733034" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2592" width="40" height="40">
<g id="tomatoisfruit" class = "tomato_color">
    <path d="M488.938667 242.368S135.445333 171.114667 90.389333 461.994667C45.418667 752.917333 312.576 843.968 389.76 861.397333c77.141333 17.408 423.808 65.322667 496.533333-249.898666 60.288-261.205333-172.309333-418.581333-371.605333-363.285334l-25.749333-5.845333z" p-id="2593"></path>
    <path d="M514.688 248.213333l-25.749333-5.824S231.168 190.592 127.872 356.693333c34.048 20.778667 89.877333 45.162667 89.877333 45.162667 38.485333 16.597333 75.477333 25.045333 109.952 25.045333 34.048 0 65.237333-8.085333 92.373334-23.424 8.938667 43.157333 33.6 88.554667 91.008 123.626667l41.706666 25.472 19.626667-44.778667c16.448-37.546667 24.64-68.842667 26.645333-97.002666 22.08 11.114667 46.656 18.218667 73.493334 18.218666 32.192 0 64.746667-10.176 96.746666-30.186666 0 0 42.005333-24.256 68.928-44.757334-73.194667-95.850667-204.288-138.944-323.541333-105.856z" p-id="2594"></path></g>
    <path d="M533.333333 490.688c40.896-93.333333 23.658667-135.701333-16.192-213.354667 54.528 71.04 127.296 149.354667 229.525334 85.354667-77.781333-20.672-63.701333-80.469333-160.298667-97.429333 72.448 3.029333 110.762667 25.685333 160.298667-73.237334-77.994667 41.045333-123.562667-48.896-224.917334 43.776-17.109333 10.624-35.072-16.341333-48.789333-1.728-73.173333-121.621333-160.128-12.928-195.626667-106.048 0 143.189333 137.429333 104.234667 170.666667 128-129.365333-10.901333-119.402667 87.552-213.333333 106.666667 123.562667 53.333333 203.754667 1.344 236.202666-87.274667-5.077333 34.624-48.768 147.328 62.464 215.274667z" fill="#4CAF50" p-id="2595"></path>
    <path d="M469.354667 257.28c-0.554667 4.202667 8.362667 20.053333 37.290666 20.053333 34.624 0 21.354667-17.258667 21.354667-17.258666s-3.178667-99.626667 69.333333-165.461334c-18.410667-15.253333-37.781333-7.082667-37.781333-7.082666S482.133333 167.466667 469.354667 257.28z" fill="#4CAF50" p-id="2596"></path>
</svg>
`;
const TPL = `<div class="tpl">
    <div class="seed">${seed}</div>
    <div class="tomato">${svgTomato}</div>
    <div id="timer" class="timer">25:00</div>
    <div class="stop">${stop}</div>
</div>`;

var customCSS = `
:root {
  --maincolor: #ff0000;
}

.tomato_color {
  fill: var(--maincolor);
}

.timer{
    width:60px;
    margin-right: 10px
;
}

.tpl {
    height:50px;
    display: flex;
    align-items: center; 
    padding: 10px; 
    border-top: 1px solid var(--main-border-color);
    align-content: center;
    justify-content: center;
}

.tomato {
    width: 25px;
    height: 25px;
    margin: 0px 30px 10px 10px;
}

.seed {
    width: 25px;
    height: 25px;
    margin: 0px 30px 10px 10px;
    cursor:pointer;
}

.stop {
    width: 25px;
    height: 25px;
    margin: 0px 30px 10px 10px;
    cursor:pointer;
}

.start-button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 10px
}

.stop-button {
    background-color: #f04c0b;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
}

`;

class TomatoClockWidget extends api.NoteContextAwareWidget {
    constructor() {
        super();
        this.stopsign = false;
        this.startsign = false;
        this.remainingTime = 1500; // 25*60
    }

    get position() { return 100; }
    get parentWidget() { return 'center-pane'; }

    doRender() {
        this.$widget = $(TPL);
        this.cssBlock(customCSS);
        this.$tomato = this.$widget.find('.tomato');
        this.$startButton = this.$widget.find('.seed');
        this.$startButton.on('click', () => { 
            this.startCountdown()});
        this.$stopButton = this.$widget.find('.stop');
        this.$stopButton.on('click', () => { this.stopsign=true;this.startsign = false; });

        return this.$widget;
    }

    async refreshWithNote(note) {
        if (!note.hasLabel('ceui')) {
            this.toggleInt(false);
            return;
        }
        this.toggleInt(true);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.remainingTime / 60);
        const seconds = this.remainingTime % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        const timerElement = document.getElementById('timer');
        timerElement.textContent = formattedTime;

        if (seconds%10 == 0) {
            const progress = (minutes * 60 + seconds) / 1500; // 25*60
            const color = getColor(1-progress);
            document.documentElement.style.setProperty('--maincolor', color);
        }

        function getColor(value) {
            var hue = ((1 - value) * 120).toString(10);
            return ["hsl(", hue, ",100%,50%)"].join("");
          }
    }

    startCountdown() {
        if(this.startsign){
            return false
        }
        this.startsign = true;
        document.documentElement.style.setProperty('--maincolor', '#00ff00');
        this.stopsign=false;
        this.updateTimerDisplay();
        const countdownInterval = setInterval(() => {
            if(this.stopsign){
                stoptomato()
                this.remainingTime = 1500;
                return;
            }
            if (this.remainingTime > 0) {
                this.remainingTime--;
                this.updateTimerDisplay();
            } else {
                stoptomato()
                this.remainingTime = 1500;
                this.stopsign = false;
                this.startsign = false;
                return;
            }
            function stoptomato() {
                clearInterval(countdownInterval);
                document.documentElement.style.setProperty('--maincolor', '#ff0000');
                const timerElement = document.getElementById('timer');
                timerElement.textContent = '25:00';
          }
        }, 1000);
    }

}

module.exports = new TomatoClockWidget();
