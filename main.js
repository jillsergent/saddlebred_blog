let menu = document.querySelector('nav ul')
let hamburger = document.querySelector('nav .mobile')
hamburger.addEventListener('click',function(){
    menu.classList.toggle('show')
});

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = 'August 19 2022 23:59:59 GMT-0500';
  initializeClock('clockdiv', deadline);


  function LengthConverter(valNum) {
    document.getElementById("outputHands").innerHTML=valNum/4;
  }


var xValues = ["Undulata's Nutcracker", "Callaway's Northern Kiss ", "I'm First", "Sir William Robert", "Designed"];
var yValues = [127, 101, 87, 85, 84];
var barColors = ["lightblue", "lightyellow","lavender","lightpink","lightgreen"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Top Sires 2020"
    }
  }
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbyLma38xlYNIFlCz2hshgEbEwcLaWeSwC_dupx2mGD8Rbl4XbaGXcLV7mVAdEVgjU4Mlw/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });