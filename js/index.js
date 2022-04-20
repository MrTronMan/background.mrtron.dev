//IDs
const summaryTag = document.getElementById("summary");
const dayTag = document.getElementById("day");
const timeTag = document.getElementById("time");
const dateTag = document.getElementById("date");
const svgTag = document.getElementById("svgweekday");

//days of the week (this hurt to do.)
function weekday() {
    let date = new Date();
    let dayOfWeekNumber = date.getDay();
    let nameOfDay;
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            break;
        case 1:
            nameOfDay = 'Monday';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            break;
        case 4:
            nameOfDay = 'Thursday';
            break;
        case 5:
            nameOfDay = 'Friday';
            break;
        case 6:
            nameOfDay = 'Saturday';
            break;
    };
    dayTag.innerHTML = `${nameOfDay}`;
};

//Displays Clock (converts to american instead of military so I can read)
function displayClock() {
   var time = new Date();
   var hrs = time.getHours();
   var min = time.getMinutes();
   var sec = time.getSeconds();
   if (hrs > 12) {
       hrs = hrs + 0;
   }
   if (hrs == 0) {
       hrs = 12;
   }
   if(hrs < 10) {
       hrs = '0' + hrs;
   }
   if (min < 10) {
       min = '0' + min;
   }
   if (sec < 10) {
       sec = '0' + sec;
   }
   var time = hrs + ':' + min + ':' + sec;
   time = time.split(':'); // convert to array
   // fetch
   var hours = Number(time[0]);
   var minutes = Number(time[1]);
   var seconds = Number(time[2]);
   
   // calculate
   var timeValue;
   if (hours > 0 && hours <= 12) {
     timeValue= "" + hours;
   } else if (hours > 12) {
     timeValue= "" + (hours - 12);
   } else if (hours == 0) {
     timeValue= "12";
   }
   timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
   //timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
   timeValue += (hours > 12) ? " PM" : " AM";  // get AM/PM
   timeTag.innerHTML = timeValue;
}

//Gets Date in MM/DD/YYYY format
function date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('date').innerHTML = today;
};
//Background Change
//If it is 7 (7AM) then thats the IF, if it is 20 (8PM) then that is the else.
function backgroundchange() {
    var currentTime = new Date().getHours();
    if (document.body) {
        if (7 <= currentTime && currentTime < 20) {
            //Setting image and color to daytime.
            document.body.background = "img/day.png";
            summaryTag.style.color = "rgb(238, 168, 253)";
            //Removing all nighttime classes to que animation.
            dayTag.classList.remove('nighttime'); 
            dateTag.classList.remove('nightText');
            timeTag.classList.remove('nightText');
            document.body.classList.remove('nightbkgrd');
            //Adding all daytime classes to start animation.
            document.body.classList.add('daybkgrd');
            dayTag.classList.add('daytime'); 
            dateTag.classList.add('dayText');
            timeTag.classList.add('dayText');
        }
        else {
            //Setting image and color to nighttime.
            document.body.background = "img/night.jpg";
            summaryTag.style.color = "rgb(16,48,97)";
            //Removing all daytime classes to que animation.
            dayTag.classList.remove('daytime');
            dateTag.classList.remove('dayText');
            timeTag.classList.remove('dayText');
            document.body.classList.remove('daybkgrd');
            //Adding all nighttime classes to start animation.
            document.body.classList.add('nightbkgrd');
            dayTag.classList.add('nighttime'); 
            dateTag.classList.add('nightText');
            timeTag.classList.add('nightText');
            
            
            
        }
    }
}
//Intervals
setInterval(displayClock, 1000);
setInterval(date, 1000);
setInterval(weekday, 1000);
setInterval(backgroundchange, 1000);
    
    
