const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("analytics-theme") === "dark") {
  document.body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const mode = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("analytics-theme", mode);
  themeBtn.textContent = mode === "dark" ? "☀️ Light" : "🌙 Theme";
});
