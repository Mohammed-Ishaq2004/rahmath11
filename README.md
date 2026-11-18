<!DOCTYPE html>
<html>
<head>
<title>My Portfolio</title>

<style>
body {
  font-family: Arial;
  background: #eee;
  margin: 30px;
}

header {
  background: #003344;
  color: white;
  padding: 20px;
}

.box {
  background: white;
  padding: 20px;
  margin: 15px;
  border-radius: 5px;
}

input, textarea {
  padding: 10px;
  margin: 5px;
  width: 80%;
}

button {
  background: #159bb5;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.project {
  display: inline-block;
  background: orange;
  padding: 20px;
  margin: 5px;
}
</style>
</head>

<body>

<header>
<h2>Ananya Rao</h2>
<p>Aspiring Full Stack Developer</p>
</header>

<div class="box">
<h3>Project Gallery</h3>

<input id="project" placeholder="New project title">
<button onclick="addProject()">Add</button>

<div id="gallery">
<div class="project">Result Portal</div>
<div class="project">Weather App</div>
<div class="project">Library Management</div>
</div>
</div>

<div class="box">
<h3>Contact Me</h3>

<input id="name" placeholder="Name"><br>
<input id="email" placeholder="Email"><br>
<textarea id="message" placeholder="Message"></textarea><br>

<button onclick="sendMessage()">Send</button>
</div>

<script>
function addProject() {
  let p = document.getElementById("project").value;

  if(p == "") {
    alert("Enter project name");
  } else {
    let div = document.createElement("div");
    div.className = "project";
    div.innerHTML = p;

    document.getElementById("gallery").appendChild(div);
    document.getElementById("project").value = "";
  }
}

function sendMessage() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let m = document.getElementById("message").value;

  if(n == "" || e == "" || m == "") {
    alert("Please fill all fields");
  } else {
    alert("Message sent successfully!");
  }
}
</script>

</body>
</html>
