// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function generatepassword() {
  var fetchpassword = document.getElementById("enterpassword").value;
  if (fetchpassword.size == 0) {
    alert("You have not entered anything")
  }
  else {
    alert(fetchpassword)
  }
}

