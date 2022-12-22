var log_pole = document.getElementById("login");
var password = document.getElementById("pass");
var verification = document.getElementById("verification");

//ошибки
var errors_pass_icon = document.querySelectorAll(".errors-pass>.iteam-err>.icon");
var errors_pass_text = document.querySelectorAll(".errors-pass>.iteam-err>.text");

var errors_login_icon = document.querySelectorAll(".errors-log>.iteam-err>.icon");
var errors_login_text = document.querySelectorAll(".errors-log>.iteam-err>.text");

var errors_ver_icon = document.querySelectorAll(".errors-ver>.iteam-err>.icon");
var errors_ver_text = document.querySelectorAll(".errors-ver>.iteam-err>.text");

console.log(verification);



log_pole.onkeyup = function(){
    if(log_pole.value.length <= 150 && log_pole.value.length >0 ) {
        errors_login_icon[1].classList.remove("red");
        errors_login_text[1].classList.remove("red-text");
        errors_login_icon[1].classList.add("green");
        errors_login_text[1].classList.add("green-text");
      } else{
        console.log("работает2");
        errors_login_icon[1].classList.add("red");
        errors_login_text[1].classList.add("red-text");
        errors_login_icon[1].classList.remove("green");
        errors_login_text[1].classList.remove("green-text");
      }
      
      if(log_pole.value.match(/[a-zA-Z@+-_]+/)) { 
        console.log("работает1");    
        errors_login_icon[0].classList.remove("red");
        errors_login_text[0].classList.remove("red-text");
        errors_login_icon[0].classList.add("green");
        errors_login_text[0].classList.add("green-text");
      }else{
        console.log("работает2");
        errors_login_icon[0].classList.add("red");
        errors_login_text[0].classList.add("red-text");
        errors_login_icon[0].classList.remove("green");
        errors_login_text[0].classList.remove("green-text");
      }
}

password.onkeyup = function(){
    if(password.value.length >= 8) {
        errors_pass_icon[0].classList.remove("red");
        errors_pass_text[0].classList.remove("red-text");
        errors_pass_icon[0].classList.add("green");
        errors_pass_text[0].classList.add("green-text");
      } else{
        console.log("работает2");
        errors_pass_icon[0].classList.add("red");
        errors_pass_text[0].classList.add("red-text");
        errors_pass_icon[0].classList.remove("green");
        errors_pass_text[0].classList.remove("green-text");
      }
      
      if(password.value.match(/^[\d]+$/)) { 
        console.log("работает1");    
        errors_pass_icon[1].classList.remove("red");
        errors_pass_text[1].classList.remove("red-text");
        errors_pass_icon[1].classList.add("green");
        errors_pass_text[1].classList.add("green-text");
      }else{
        console.log("работает2");
        errors_pass_icon[1].classList.add("red");
        errors_pass_text[1].classList.add("red-text");
        errors_pass_icon[1].classList.remove("green");
        errors_pass_text[1].classList.remove("green-text");
      }

      if(password.value.length == log_pole.value.length){
        for(let i = 0; i<log_pole.value.length; i++){
            if(password.value == log_pole.value){
                console.log("work if")
                errors_pass_icon[2].classList.add("red");
                errors_pass_text[2].classList.add("red-text");
                errors_pass_icon[2].classList.remove("green");
                errors_pass_text[2].classList.remove("green-text");
            }else{
                console.log("work else1")
                errors_pass_icon[2].classList.remove("red");
                errors_pass_text[2].classList.remove("red-text");
                errors_pass_icon[2].classList.add("green");
                errors_pass_text[2].classList.add("green-text");
            }
        }
  }
}

verification.onkeyup = function(){
    if(password.value.length == verification.value.length){
    for(let i = 0; i<verification.value.length; i++){
        if(password.value == verification.value){
            console.log("work if")            
            errors_ver_icon[0].classList.remove("red");
            errors_ver_text[0].classList.remove("red-text");
            errors_ver_icon[0].classList.add("green");
            errors_ver_text[0].classList.add("green-text");
            verification.style.border = "2px solid rgba(60, 162, 85, 0.9)";
            verification.style.color = "rgba(60, 162, 85, 0.9)";
        }else{
            console.log("work else1")
            errors_ver_icon[0].classList.add("red");
            errors_ver_text[0].classList.add("red-text");
            errors_ver_icon[0].classList.remove("green");
            errors_ver_text[0].classList.remove("green-text");
            verification.style.border = "2px solid rgba(238, 34, 34, 0.9)";
            verification.style.color = "rgba(238, 34, 34, 0.9)";
        }
    }
    }
    else{
            errors_ver_icon[0].classList.add("red");
            errors_ver_text[0].classList.add("red-text");
            errors_ver_icon[0].classList.remove("green");
            errors_ver_text[0].classList.remove("green-text");
            verification.style.border = "2px solid rgba(238, 34, 34, 0.9)";
            verification.style.color = "rgba(238, 34, 34, 0.9)";
    }
}