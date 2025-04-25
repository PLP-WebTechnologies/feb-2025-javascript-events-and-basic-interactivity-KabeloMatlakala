// Button click and hover
const magicButton = document.getElementById("magicButton");
magicButton.addEventListener("click", () => {
  alert("🎉 Magic button clicked!");
});
magicButton.addEventListener("mouseover", () => {
  magicButton.textContent = "You're hovering!";
});
magicButton.addEventListener("mouseout", () => {
  magicButton.textContent = "Click Me!";
});
magicButton.addEventListener("dblclick", () => {
  alert("🕵️‍♂️ Secret double click revealed!");
});

// Keypress detection
document.addEventListener("keydown", (e) => {
  if (e.key === "m") {
    alert("🪄 You pressed 'M' for Magic!");
  }
});

// Accordion toggle
document.querySelectorAll('.accordion-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// Form validation
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formMsg = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (!emailVal || !passwordVal) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailVal)) {
    formMsg.textContent = "Invalid email format.";
    formMsg.style.color = "red";
    return;
  }

  if (passwordVal.length < 8) {
    formMsg.textContent = "Password must be at least 8 characters.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "✅ Successfully submitted!";
  formMsg.style.color = "green";
});

// Theme toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


const galleryImages = document.getElementById("galleryImages");
const toggleGalleryView = document.getElementById("toggleGalleryView");

toggleGalleryView.addEventListener("click", () => {
  galleryImages.classList.toggle("list-view");
});
