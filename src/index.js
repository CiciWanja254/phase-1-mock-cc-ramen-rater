// Retrieve all ramen objects from the server
fetch('http://localhost:3500/ramens')
  .then(response => response.json())
  .then(data => {
    const ramenMenu = document.querySelector('#ramen-menu');

    // Display each ramen image in the #ramen-menu div
    data.forEach(ramen => {
      const img = document.createElement('img');
      img.src = ramen.image;
      img.alt = ramen.name;
      img.addEventListener('click', () => displayRamenDetails(ramen));
      ramenMenu.appendChild(img);
    });
  });

// Display the details of a selected ramen in the #ramen-detail div
function displayRamenDetails(ramen) {
    const detailImage = document.querySelector('.detail-image');
  const name = document.querySelector('.name');
  const restaurant = document.querySelector('.restaurant');
  const ratingDisplay = document.querySelector('#rating-display');
  const commentDisplay = document.querySelector('#comment-display');

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  name.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}
// Add a new ramen to the #ramen-menu div when the new-ramen form is submitted
const newRamenForm = document.querySelector('#new-ramen');
newRamenForm.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.querySelector('#new-name').value;
  const restaurant = document.querySelector('#new-restaurant').value;
  const image = document.querySelector('#new-image').value;
  const rating = document.querySelector('#new-rating').value;
  const comment = document.querySelector('#new-comment').value;

  const ramenMenu = document.querySelector('#ramen-menu');
  const img = document.createElement('img');
  img.src = image;
  img.alt = name;
  img.addEventListener('click', () => displayRamenDetails({ name, restaurant, image, rating, comment }));
  ramenMenu.appendChild(img);
  // Reset the new-ramen form fields
  newRamenForm.reset();
});
