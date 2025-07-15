function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greeting = document.getElementById("greeting");

  if (name.trim() !== "") {
    greeting.textContent = `Hello, ${name}! Welcome to the site.`;
  } else {
    greeting.textContent = "Please enter your name.";
  }
}
