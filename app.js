const scriptURL = "https://script.google.com/macros/s/AKfycbw7tsIr4mKriL8AH6PZ7-iaDRvN6yWmIQHhEE-AhMhX6gw2qAMR59UlExhzSvfVgKkqSw/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  fetch(scriptURL,{ method: "POST", body: new FormData(form) })
  .then((response) => alert("Success" , response))
  .catch((error) => alert("Error:", error.message));
})