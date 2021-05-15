
const time = document.getElementById('time')
const greeting = document.getElementById('greeting')
const name = document.getElementById('name')
const focus = document.getElementById('focus')


function showTime(){
    let today = new Date()
    let hour = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    //Визначення періода дня
    const periodOfDay = hour >= 12 ? 'PM' : 'AM'

    hour = hour % 12 || 12

    time.innerHTML = `${addZero(hour)}<span></span>:${addZero(min)}<span></span>:${addZero(sec)}<span></> ${periodOfDay}`;
    setTimeout(showTime , 1000)
}

function addZero(n){
    return(parseInt(n, 10) < 10 ? '0':'') + n
}
showTime()

function setBackGround(){
    let today = new Date()
    let hour = today.getHours()


    if(hour < 12){
        document.body.style.background = "url('./Img/morning.jpg')"
        greeting.textContent = 'Добрий ранок'

    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('./Img/afternoon.jpg')"
        greeting.textContent = 'Добрий день'
}
    
    else{
        document.body.style.backgroundImage = "url('./Img/evening.jpg')"
        greeting.textContent = 'Добрий вечір'
        document.body.style.color = 'gray'
    }
}
setBackGround()

//Зберігання в локальній пам'яті
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Введіть своє ім\'я]'
    }
    else{
        name.textContent = localStorage.getItem('name')
    }
}
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = ' [Введіть свою сьогоднішню ціль]'
    }
    else{
        focus.textContent = localStorage.getItem('focus')
    }
}

function setName(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
  function setFocus(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

getName()
getFocus()