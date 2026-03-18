export function getTheme() {
  return localStorage.getItem('learnright_theme') || 'dark';
}
export function setTheme(theme) {
  localStorage.setItem('learnright_theme', theme);
  document.documentElement.classList.toggle('light-mode', theme === 'light');
}
export function initTheme() {
  const theme = getTheme();
  document.documentElement.classList.toggle('light-mode', theme === 'light');
}
