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

window.onload = () => {
  const params = new URLSearchParams(location.search);
  const key = params.get("key");
  const wrapper = document.getElementById("chat-wrapper");

  if (key !== "wangzi9000") {
    wrapper.innerHTML = `
      <div style="color:#e74c3c; font-size:20px; text-align:center; padding-top:100px;">
        Global chat sedang dalam perbaikan, tunggu sampai perbaikannya selesai.
      </div>
    `;
  } else {
    wrapper.innerHTML = `
      <div class="chat-container">
        <h2>Global Chat</h2>
        <script src="https://utteranc.es/client.js"
                repo="elen-coder/mon"
                issue-term="pathname"
                label="chat"
                theme="github-dark"
                crossorigin="anonymous"
                async></script>
      </div>
    `;

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
      blockDangerousLinks();
    }, 500);
  }
};
