// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fetchStatus;
function getdropdownstatus() {
  fetchStatus = document.getElementById("fetchdropdownvalue").value;
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

