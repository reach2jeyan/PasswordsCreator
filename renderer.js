// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fetchStatus;
function getdropdownstatus() {
  fetchStatus = document.getElementById("fetchdropdownvalue").value;
}
var passwordType;
function getpasswordtype() {
  if (document.getElementById("strongpassword").checked) {
    passwordType = generatePassword(9,"aAcCdeFfhjGLk1958!@#$");
    var result = document.getElementById("newpassword").elements[3];
    result.value = passwordType;
    
    
  }
  else if (document.getElementById("lightpassword").checked) {
    passwordType = generatePassword(8,"abmnhjilk1958");
    var result = document.getElementById("newpassword").elements[3];
    result.value = passwordType;
    
  }
  else {
    alert("Select atleast one type")
  }
}
function generatePassword(len,characters) {
  var text = "";
  var strongcharset = characters
  for (var i = 0; i < len; i++)
  text += strongcharset.charAt(Math.floor(Math.random() * strongcharset.length));
  return text;
}

function hideshowpassword() {
  getdropdownstatus()
  if (fetchStatus == "Change existing password?") {
    document.getElementById("existingpassword").style.display='block';
    document.getElementById("newpassword").style.display='none';
  }
  else if (fetchStatus == "Create New Password?") {
    document.getElementById("newpassword").style.display='block'
    document.getElementById("existingpassword").style.display='none';
  }
  else {
    alert("Please choose any one action below")
  }
}

function newpassword() {
  getpasswordtype()
}


function copytoclipboard(element) {
  //var copyText = document.getElementById("generatedpassword").value;
  //let idTest = document.getElementsByName("copypassword").value;
  switch(element) {
    case "Copy Changed password":
    var copyText = document.getElementById("changedpassword").value;
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
    break;
    case "Copy generated password":
    var copyText = document.getElementById("generatedpassword").value;
    clipboard.readText([copyText])
    //copyText.select();
    //document.execCommand("copy")
    alert("Copied the text: " + copyText);
    
    break;
    default:
    alert("Something wrong. Try again")
  }







  }
  
