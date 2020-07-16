document.querySelector('.open-form').addEventListener('click',
  function() {
    document.querySelector('.form').style.display = 'flex';
});

document.querySelector('.close-form').addEventListener('click',
  function() {
    document.querySelector('.form').style.display = 'none';
});
