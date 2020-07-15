document.querySelector('.ball').addEventListener('click',
  function() {
    document.querySelector('.popup').style.display = 'flex';
});

document.querySelector('.close-form').addEventListener('click',
  function() {
    document.querySelector('.form').style.display = 'none';
});
