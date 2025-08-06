// Sample: Save to localStorage
document.querySelectorAll("textarea").forEach((area, index) => {
  // Load on start
  area.value = localStorage.getItem(`notebook-page-${index}`) || "";

  // Save on change
  area.addEventListener("input", () => {
    localStorage.setItem(`notebook-page-${index}`, area.value);
  });
});
