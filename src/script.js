let paper;
let animLock = false

window.onload = () => {
  // store paper
  paper = document.querySelector("#paper");
}

animLockTimeout = (time) => {
  animLock = true
  setTimeout(() => {
    animLock = false
  }, time);
}

eject = () => {
  if (!animLock) {
    paper.className = "paper_ejected";
  }
}

newQuote = () => {
  if (!animLock) {
    if (paper.className === "paper_ejected") {
      paper.className = "paper_feeded";
      animLockTimeout(1000)
    } else {
      paper.className = "paper_ejected"
      setTimeout(() => {
        paper.className = "paper_feeded";
      }, 1000);
      animLockTimeout(2000)
    }
  }
}

