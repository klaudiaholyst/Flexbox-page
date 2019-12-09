const panels = document.querySelectorAll('div.panel');

function togglePanel() {
  this.classList.toggle('panel--open');
}

function toggleText(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('panel--active');
  }
}

panels.forEach((panel) => panel.addEventListener('click', togglePanel));
panels.forEach((panel) => panel.addEventListener('transitionend', toggleText));
