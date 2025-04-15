// Blok klik kanan (context menu)
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Blok klik tahan pada gambar dan teks
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Cegah hold/pilih teks dan klik tahan gambar
document.addEventListener('mousedown', function(e) {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'P' || e.target.tagName === 'SPAN' || e.target.tagName === 'DIV') {
    e.preventDefault();
  }
});