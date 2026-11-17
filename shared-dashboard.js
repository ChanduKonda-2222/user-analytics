function showMessage() {
  alert("This is a demo interaction for the UI template.");
}

const savedTheme = localStorage.getItem("analytics-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}
