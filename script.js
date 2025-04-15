document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('mousedown', e => {
  if (["IMG", "P", "SPAN", "DIV", "A"].includes(e.target.tagName)) {
    e.preventDefault();
  }
});

function blockDangerousLinks() {
  const blockedLinks = [
    "https://github.com/elen-coder/mon/issues/2",
    "https://guides.github.com/features/mastering-markdown/"
  ];

  let found = false;

  setInterval(() => {
    document.querySelectorAll("a").forEach(link => {
      blockedLinks.forEach(blocked => {
        if (link.href === blocked) {
          const span = document.createElement("span");
          span.textContent = "[link diblokir]";
          span.className = "blocked";
          link.replaceWith(span);
          found = true;
        }
      });
    });

    if (found && !document.getElementById("back")) {
      const btn = document.createElement("a");
      btn.href = "komentar.html";
      btn.className = "back-btn";
      btn.id = "back";
      btn.textContent = "Kembali";
      document.body.appendChild(btn);
    }
  }, 1000);
}

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
      blockDangerousLinks();
    }, 500);
  }
};
