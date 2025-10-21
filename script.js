// ---------- Theme Switch ----------
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', currentTheme);
toggleBtn.textContent = currentTheme === 'dark' ? '🌕' : '🌑';

toggleBtn.onclick = () => {
  const newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  toggleBtn.textContent = newTheme === 'dark' ? '🌕' : '🌑';
};

// ---------- Copy Function ----------
document.querySelectorAll('.copy-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const word = btn.parentElement.querySelector('span').textContent;
    navigator.clipboard.writeText(word);
    btn.textContent = '✅ Copied';
    setTimeout(() => (btn.textContent = 'Copy'), 1000);
  });
});
