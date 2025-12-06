function loginUser() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "" || pass === "") {
    alert("Please enter username and password!");
  } else {
    alert("Congratulations! You signed in.");
    alert("Welcome back!");
  }
}