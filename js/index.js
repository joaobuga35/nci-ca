// created this function to handle all the buttons once because if I add a new one this is alreay made to deal with this situation.
function initializeFilter() {
// Here we select all buttons with the data-filter attribute and all product cards
  const filterButtons = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('.products-card');
// I used a for each to add an event listener to each button avoiding to write a new event every time that I add a new filter
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
// We get the filter value from the clicked button 
      const filterValue = this.getAttribute('data-filter');
// For each to reset the button styles after the user clicks on it. 
      filterButtons.forEach(btn => btn.classList.remove('btn-adventure-primary-medium'));
      filterButtons.forEach(btn => btn.classList.add('btn-outline-adventure'));
// And here I used "this" to change the style of the clicked button. 
      this.classList.remove('btn-outline-adventure');
      this.classList.add('btn-adventure-primary-medium');

      productCards.forEach(card => {
        if (filterValue.toLowerCase() === 'all') {
          card.classList.remove('d-none');
        } else {
          const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
          if (cardTitle.includes(filterValue)) {
            card.classList.remove('d-none');
          } else {
            card.classList.add('d-none');
          }
        }
      });
    });
  });
}

initializeFilter();
