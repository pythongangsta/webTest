let hours = 0, minutes = 0, seconds = 0;
let output = document.querySelector("#tArea");
let state = false;


function start(){
    state = false;
    setInterval(()=>{
        if(!state){
            if(seconds<59){
                seconds++;
                output.value = setVal();
            }else if(seconds===59 && minutes<=59){
                seconds = 0;
                minutes++;
                output.value = setVal();

            }else{
                minutes = 0;
                hours++;
                output.value = setVal();
            }
        }

    },1000)
}

function stop(){
    state = true;
}

function setVal(){
    let time;
    time = formatTime();
   // console.log(time);
    return time;

}

function formatTime(){
    let fHour="", fMinutes="", fSeconds;
    if(seconds<10){
        fSeconds = "0"+seconds;
    }else{
        fSeconds = seconds;
    }
    if(minutes<10){
        fMinutes = "0"+minutes;
    }else{
        fMinutes = minutes;
    }
    if(hours<10){
        fHour = "0"+hours;
    }else{
        fHour = hours;
    }

    return fHour+":"+fMinutes+":"+fSeconds
}



function reset(){
    stop();
    output.value = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}
