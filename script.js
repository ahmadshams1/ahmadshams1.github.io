// year
document.getElementById("y").textContent = new Date().getFullYear();

// close announcement
const closeBtn = document.querySelector(".announce-close");
const announce = document.querySelector(".announce");
if (closeBtn && announce){
  closeBtn.addEventListener("click", () => announce.style.display = "none");
}

// mobile drawer toggle
const burger = document.querySelector(".hamburger");
const drawer = document.querySelector(".drawer");
if (burger && drawer){
  burger.addEventListener("click", () => {
    const open = drawer.hasAttribute("hidden") === false;
    if (open){
      drawer.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    } else {
      drawer.removeAttribute("hidden");
      burger.setAttribute("aria-expanded", "true");
    }
  });

  // auto close on click
  drawer.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      drawer.setAttribute("hidden", "");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

// fake form -> builds a message
const sendBtn = document.getElementById("sendBtn");
if (sendBtn){
  sendBtn.addEventListener("click", () => {
    alert("درخواستت ثبت شد ✅\n(بعداً واتساپ/ایمیل را هم وصل می‌کنیم)");
  });
}
