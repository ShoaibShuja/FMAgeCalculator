function calculateAge(){
  let d1 = document.getElementById("day").value;
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;

  eraseEverything();
  checkEmpty();

  if (!checkEmpty()){
    return false;
  }

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  var month = [31,28,31,30,31,30,31,31,30,31,30,31];

  if (d1 > d2){
    /* m2 - 1 to get the month's total days from the array which should match the index */
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  document.getElementById("calculate__day").innerHTML = d;
  document.getElementById("calculate__month").innerHTML = m;
  document.getElementById("calculate__year").innerHTML = y;
}

const checkEmpty = () => {
  let d1 = document.getElementById("day").value;
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;

  if (d1 == '' || d1 > 30 || d1 <= 0){
    document.getElementById("age__setdate-day").classList.add("active");
  }

  if (m1 == '' || m1 > 12 || m1 <= 0){
    document.getElementById("age__setdate-month").classList.add("active");
  }

  if (y1 == '' || y1 > 2024 || y1 <= 1900){
    document.getElementById("age__setdate-year").classList.add("active");
  }

  if (!d1 || !m1 || !y1){

    document.getElementById("calculation__button").classList.add("active");

    return false;
  } else {
    return true;
  }
}

const eraseEverything = () => {
  document.getElementById("age__setdate-day").classList.remove("active");
  document.getElementById("age__setdate-month").classList.remove("active");
  document.getElementById("age__setdate-year").classList.remove("active");
  document.getElementById("calculation__button").classList.remove("active");
}