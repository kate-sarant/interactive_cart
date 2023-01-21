let fullname =document.querySelector("#fullname");
let cartNum =document.querySelector("#cardNum") ;
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let cvc=document.querySelector("#cvc");
let form = document.querySelector("#form");
let complited = document.querySelector(".complited");

let btn = document.querySelector('#confirm');
let note1 = document.querySelector("#alertNote1");
let note2 = document.querySelector("#alertNote2");
let note3 = document.querySelector("#alertNote3");
let note4 = document.querySelector("#alertNote4");
note1.style.display="none";
note2.style.display="none";
note3.style.display="none";
note4.style.display="none";

let isvalid ='false';
let nameRex =/[A-Za-z]{2,}\s[A-Za-z]{2,}/;
let cartvalid = /^[0-9]{4}\s([0-9]{4}\s){2}[0-9]{4}?/;
let regexdigit = /[\d]/;

btn.addEventListener('click',function(){

  if(nameRex.test(fullname.value) == false || fullname.value == ''){

// VALIDATION

    fullname.style.borderColor= "red";
    note1.style.display= 'block';
    note1.style.color= 'red';
   isvalid ='false';
  }else{
    isvalid='true'
    document.getElementById("Name").innerHTML = fullname.value
  }

  if(cartvalid.test(cartNum.value) == false || cartNum.value == ''){

    cartNum.style.borderColor= "red";
    note2.style.display= 'block';
    note2.style.color= 'red';
    isvalid ='false';
  }else{
    isvalid='true'
    document.getElementById("cardNumber").innerHTML = cartNum.value
  }
  if(month.value == '' ){
    month.style.borderColor="red";
    note3.style.display= 'block';
    note3.style.color= 'red';
    isvalid ='false';
  }else{
    isvalid='true'
    document.getElementById("exM").innerHTML = month.value
  }
  if(year.value == '' ){
    year.style.borderColor='var(--Red)';
    note3.style.display= 'block';
    note3.style.color= 'var(--Red)';
    isvalid ='false';
  }else{
    isvalid='true'
    document.getElementById("exY").innerHTML = year.value
  }
  if(cvc.value == '' || /[A-Za-z]/.test(cvc.value)){
    cvc.style.borderColor="red";
    note4.style.display= 'block';
    note4.style.color= 'var(--Red)';
    btn.style.top = "-7px";
    isvalid ='false';
  }else{
    if(/[0-9]{3}/.test(cvc.value)){
      isvalid='true'
      document.getElementById("cartBackCVV").innerHTML = Number(cvc.value)
    if(isvalid == "true"){
    form.style.display = "none";
    complited.style.display="block";
    }
}
  }

})
