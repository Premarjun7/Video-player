const forms=document.getElementById("form")
const user=document.getElementById("name")
const Email=document.getElementById("email")
const password=document.getElementById("pass")
const conformpass=document.getElementById("conpass")

function errormama(input,message){
const formgroup=input.parentElement;
formgroup.className="form-group error"
const small=formgroup.querySelector("small")
small.innerText=message;
}
function sucessmama(input){
  const formgroup=input.parentElement;
  formgroup.className="form-group success"
}
function Goodmail(Email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(Email).toLowerCase());
}
function Listofarra(arraone){
  var $=document.getElementById
   arraone.forEach(function(input){
    if(input.value.trim()==""){
      errormama(input,`${fieldname(input)} is required`);
    }else{
      sucessmama(input)
    }
   });
}
function fieldname(input){
  return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
function checklen(input,num1,num2){
if(input.value.length< num1){
  errormama(input,`${fieldname(input)} must be atleast ${num1} characters` );
}else if(input.value.length>num2){
  errormama(input,`${fieldname(input)} should not be more than ${num2} numbers`);
 }else{
  sucessmama(input)
}
}
function checkLeng(input,no1,no2){
if(input.value.length<no1){
  errormama(input,`${fieldname(input)} must be atleast ${no1} characters`)
}else if(input.value.length>no2){
  errormama(input,`${fieldname(input)} should not be greater than ${no2} characters`)
}else{
  sucessmama(input)
}
}

function checkpasswordmatch(input1,input2){
  if((input1.value)!==input2.value)
{
    errormama(input2,`passwords does not match `)
  }
}
forms.addEventListener("submit",function(e){
  e.preventDefault();
 Listofarra([user,Email,password,conformpass])
 checklen(user,4,16)
 checkLeng(password,3,15)
 checkpasswordmatch(password,conformpass)
})
