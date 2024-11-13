document.querySelector("form").addEventListener("h4", function (event) {
  event.preventDefault();

  alert("Thank you! Your message has been sent.");
  this.reset();
});
