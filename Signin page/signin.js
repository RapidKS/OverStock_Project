document.querySelector("form").addEventListener("submit", getInfo);
  var dataArr = JSON.parse(localStorage.getItem("account-data")) || [];
  function getInfo() {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  
  
  if (!email || !password) {
    alert("Email and password fields cannot be empty");
    return;
  }
  
  var dataObj = { email: email, password: password };
  
  
  if (dataArr.some(function(ele) { return ele.email === email })) {
    document.querySelector("#email-exists").style.display = "inline";
    return;
  } else {
    document.querySelector("#email-exists").style.display = "none";
  }

  dataArr.push(dataObj);
 
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  localStorage.setItem("account-data", JSON.stringify(dataArr));
  
  
  document.querySelector("#account-created").textContent = "Account created successfully!";
  document.querySelector("#account-created").style.display = "block";
}

  var dataArr = JSON.parse(localStorage.getItem("account-data")) || [];
document.querySelector("#signin form").addEventListener("submit", signInFun);

function signInFun(event) {
  event.preventDefault();
  var email = document.querySelector("#email1").value;
  var password = document.querySelector("#password1").value;
  var found = false;

  
  if (!isValidEmail(email)) {
    document.querySelector("#email-error").style.display = "inline";
    return;
  } else {
    document.querySelector("#email-error").style.display = "none";
  }

  dataArr.map(function(ele){ 
    if (ele.email === email && ele.password === password) {
      found = true;
      return false; 
    }
  });
  if (found) {
   alert("Sign in Successful");
  } else {
   document.querySelector("#password-error").style.display = "inline";
  }
}

function isValidEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}