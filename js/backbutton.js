document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back');
  
    backButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
  