document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;

  const message =
    `Hello ChideraTechLab,%0A` +
    `I want to register for ICT training.%0A` +
    `Name: ${name}%0A` +
    `Phone: ${phone}%0A` +
    `Course: ${course}`;

  window.open(
    `https://wa.me/2348132749023?text=${message}`,
    "_blank"
  );
});