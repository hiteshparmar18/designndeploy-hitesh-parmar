// Loader
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  setTimeout(() => {
    loader.style.display = 'none';
    content.classList.remove('hidden');
  }, 1000);
});

// Dark Mode
const toggleBtn = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleBtn.classList.toggle('fa-sun');
  toggleBtn.classList.toggle('fa-moon');
});
