/*
* This widget allows you to use Pomodoro Technique.
*/
const TPL = tpljs
var customCSS = cssjs

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
