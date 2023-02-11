let ms = 0
let obj = {
    sec: 0,
    min: 0
}
let mode = 0

const s = document.querySelector('h3')
const startButton = document.querySelector('.start-stop')
const resetButton = document.querySelector('.reset')

startButton.addEventListener('mousedown', () => {
    mode==true? mode = 3 : mode = 1
    startButton.textContent = 'PAUSE'
    const interval = setInterval(() => {
        if (mode==3) {
            clearInterval(interval)
            startButton.textContent = 'RESUME'
        }else if(mode){
        ms++
        if (ms > 9) {
            ms = 0
            obj.sec++
            if (obj.sec > 59) {
                obj.sec = 0
                obj.min++
            }
            if (obj.min > 59) {
                obj.min = 0
                clearInterval(interval)
            }
        }}
        s.textContent = `${obj.min < 10 ? '0' + obj.min : obj.min}:${obj.sec < 10 ? '0' + obj.sec : obj.sec}:${ms}0`
    }, 100)
    console.log('started');

})

resetButton.addEventListener('mousedown', () => {
    startButton.textContent = 'START'
    mode = 0
    obj.min=0,obj.sec=0,ms=0;
    s.textContent = `00:00:00`
})