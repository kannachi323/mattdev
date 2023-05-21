// script.js

function downloadApp(filename) {
    const link = document.createElement('a');
    link.setAttribute('href', filename);
    link.setAttribute('download', '');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  