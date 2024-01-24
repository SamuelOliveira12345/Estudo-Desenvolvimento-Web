let darkMode = true;

const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
  const mode = darkMode ? 'Light' : 'Dark';
  
  document.documentElement.classList.toggle('light');

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`;

  darkMode = !darkMode;
})