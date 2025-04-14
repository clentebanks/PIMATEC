const scriptURL = "https://script.google.com/macros/s/AKfycbzpCKRlIcMvQaP_LsFycOJJHKQhytAbfgk7ZnrErZ2eWzSaHJsXZXfhXN9Mn_pwpGdp/exec";

const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  fetch(scriptURL,{ method: "POST", body: new FormData(form) })
  .then((response) => alert("Success" , response))
  .catch((error) => alert("Error:", error.message));
})