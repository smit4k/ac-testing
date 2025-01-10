function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

// Prevents user from using keyboard shortcuts to access Developer Tools
document.onkeydown = (e) => {
  if (
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) // Ctrl + U
  ) {
    alert("Developer tools detected. Cheating is not allowed.");
    return false;
  }
};

// Checks if DevTools menu is opened and alerts user
setInterval(() => {
    const start = performance.now();
    debugger;
    const end = performance.now();
    if (end - start > 100) {
      alert("Developer tools detected. Cheating is not allowed.");
    }
  }, 1000);


// Prevents user from using F12 to access Developer Tools
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
      event.preventDefault();
      alert("Developer tools detected. Cheating is not allowed.");
    }
});