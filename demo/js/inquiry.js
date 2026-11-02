const pets = {
  1: { name: 'Buddy', breed: 'Labrador Mix', age: 'Young Adult', status: 'Available', photo: 'https://images.pexels.com/photos/3798241/pexels-photo-3798241.jpeg' },
  2: { name: 'Luna', breed: 'Domestic Shorthair', age: 'Adult', status: 'Available', photo: 'https://images.pexels.com/photos/27617773/pexels-photo-27617773.jpeg' },
  3: { name: 'Daisy', breed: 'Mixed Breed', age: 'Adult', status: 'Available', photo: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg' },
  4: { name: 'Cooper', breed: 'Golden Retriever Mix', age: 'Puppy', status: 'Available', photo: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg' },
  5: { name: 'Oliver', breed: 'Tabby', age: 'Young Adult', status: 'Available', photo: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg' },
  6: { name: 'Pepper', breed: 'Domestic Shorthair', age: 'Kitten', status: 'Available', photo: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg' }
};

const id = new URLSearchParams(location.search).get('petID') || '1';
const pet = pets[id] || pets[1];

document.getElementById('pet-title').textContent = `Inquiry for ${pet.name}`;
document.getElementById('pet-photo').src = pet.photo;
document.getElementById('pet-photo').alt = pet.name;
document.getElementById('pet-breed').textContent = pet.breed;
document.getElementById('pet-age').textContent = pet.age;
document.getElementById('pet-status').textContent = pet.status;

document.querySelector('.demo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.createElement('p');
  message.className = 'success-message';
  message.textContent = `Thank you! We received your inquiry for ${pet.name}. We will contact you shortly.`;
  event.currentTarget.replaceWith(message);
});
