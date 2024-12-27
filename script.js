function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

setInterval(() => {
    const start = performance.now();
    debugger;
    const end = performance.now();
    if (end - start > 100) {
      alert("Developer tools detected. Cheating is not allowed.");
      window.location.href = '/cheaterdetected.html';
    }
  }, 1000);


// Prevents user from using F12 to access Developer Tools
document.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
      event.preventDefault();
      alert("Developer tools detected. Cheating is not allowed.");
    }
});