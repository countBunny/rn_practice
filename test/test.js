var func1 = function(n){
    if (n === 1) {
        return 1;
    }else if( n === 2){
        return 2;
    }else if(n === 3){
        return 4;
    }
    return func1(n-1) + func1(n-2)+ func1(n-3);
}

console.log(func1(10))

var Time = function(){
        this.time = 0;
        this.keyTime = 0;
}
var timeArray = []
for(let i = 0; i< 10;i++){
    let time = new Time()
    time.keyTime = Math.random()*1000%100
    time.time = Math.random()*1000%10
    timeArray.push(time);
}
console.log(timeArray);
function timeCompare(time, timeAfter){
    if(time.keyTime-timeAfter.keyTime>0){
        console.log(`time keytime is bigger ${time.keyTime} - ${timeAfter.keyTime}`)
        return time;
    } else if(time.keyTime - timeAfter.keyTime === 0
        &&time.time-timeAfter.time>=0){
            console.log(`time time is bigger ${time.time} - ${timeAfter.time}`)
        return time;
    } else {
        console.log(`timeAfter is bigger ${time} - ${timeAfter}`)
        return timeAfter;
    }
}
console.log('===============================')
//以keyTime为主排序
for(let i = 0;i<timeArray.length-1;i++){
    let currentIndex = i;
    let biggerTime = timeArray[i];
    for(let j = i+1;j<timeArray.length; j++){
        biggerTime = timeCompare(timeArray[currentIndex], timeArray[j]);
        if(biggerTime === timeArray[j]){
            currentIndex = j;
            console.log(`currentIndex=${currentIndex}`)
        }
    }
    if(i!==currentIndex){
        console.log(`第${i+1}轮，最大的index是${currentIndex}`)
        let temp = timeArray[i];
        timeArray[i] = biggerTime;
        timeArray[currentIndex] = temp;
    }
}
console.log(timeArray)