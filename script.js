function showPopup() {
  document.getElementById("tripPopup").style.display = "flex";
}

function closePopup() {
  document.getElementById("tripPopup").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".popup-content form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    alert("Thank you for submitting!");
    form.reset(); 
    closePopup(); 
  });
});
