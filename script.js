const hours = document.querySelector(".hrs");

const minute = document.querySelector(".min");

const second = document.querySelector(".sec");



setInterval(clockFunction,1000);

function clockFunction(){
    const time = new Date()
    const sec = time.getSeconds()/60;
    const min = (sec+time.getMinutes())/60;
    const hrs = (min+time.getHours())/12;
    hours.style.setProperty('--rotation',hrs*360);
    minute.style.setProperty('--rotation',min*360);
    second.style.setProperty('--rotation',sec*360);


};
clockFunction();