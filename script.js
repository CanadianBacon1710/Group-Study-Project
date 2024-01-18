//Toggle Button for light and dark mode

function toggleDarkMode() {
  const body = document.querySelector("body");
  const darkModeButton = document.querySelector("#dark-mode-button");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    darkModeButton.innerText = "🌚 Dark Mode";
  } else {
    darkModeButton.innerText = "🌞 Light Mode";
  }
}
