window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) {
      element.innerText = text;
    }
  };

  ['chrome', 'node', 'electron'].forEach((dependency) => {
    replaceText(`#${dependency}-version`, process.versions[dependency]);
  });
});
