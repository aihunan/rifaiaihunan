const rentForm = document.getElementById('rent-form');
const rentBtns = document.querySelectorAll('.rent-btn');

rentBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const bookName = btn.getAttribute('data-book');
    rentForm.book.value = bookName;
  });
});

rentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(rentForm);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'prosess.php', true);
  xhr.send(formData);
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Sewa berhasil!');
    } else {
      alert('Terjadi kesalahan saat menyewa buku');
    }
  };
  xhr.onerror = function() {
    alert('Terjadi kesalahan saat menyewa buku');
  };
});
