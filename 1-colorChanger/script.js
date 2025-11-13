const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

const defaultColor = 'aqua';

buttons.forEach((button) => {
  // On hover
  button.addEventListener('mouseenter', (e) => {
    body.style.backgroundColor = e.target.id;
  });

  // On mouse leave
  button.addEventListener('mouseleave', () => {
    body.style.backgroundColor = defaultColor;
  });
});
