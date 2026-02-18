function openMenu(){
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("drawer").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closeMenu(){
  document.getElementById("overlay").classList.add("hidden");
  document.getElementById("drawer").classList.add("hidden");
  document.body.style.overflow = "";
}

document.addEventListener("click", (e) => {
  const openBtn = e.target.closest("#openMenu");
  const closeBtn = e.target.closest("#closeMenu");
  const overlay = e.target.closest("#overlay");

  if(openBtn) openMenu();
  if(closeBtn || overlay) closeMenu();
});

document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeMenu();
});

// highlight active link
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navlinks a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
})();
