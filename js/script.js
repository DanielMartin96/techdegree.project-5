const url = "https://randomuser.me/api/?results=12";
const gallery = document.getElementById('gallery');
let profiles = [];
async function getProfiles() {
  const response = await fetch(url);
  const data = await response.json();
  for (i = 0; i < 12; i++) {
    let profile = { img: `${data.results[i].picture.large}`,
    firstName: `${data.results[i].name.first}`,
    lastName: `${data.results[i].name.last}`, 
    email: `${data.results[i].email}`,
    city: `${data.results[i].location.city}` }
   
    profiles.push(profile);
}}

/* function createCardDiv() {
const cardDiv = document.createElement('div');
cardDiv.setAttribute('class', 'card');
gallery.appendChild(cardDiv);
} */

/* function createImageContainer(){
  const imageDiv = document.createElement('div');
  const img = document.createElement('img');
  imageDiv.setAttribute('class', 'card-img-container');
  img.setAttribute('class', 'card-img')
  img.setAttribute('src', 'https://placehold.it/90x90')
  img.setAttribute('alt', 'profile picture')
  gallery.lastChild.appendChild(imageDiv);
  imageDiv.appendChild(img);
}

/* function createInfoContainer(profiles) {
  const infoDiv = document.createElement('div');
  const name = document.createElement('h3');
  const email = document.createElement('p');
  const city = document.createElement('p');
  name.setAttribute('class', 'card-name cap');
  name.setAttribute('id', 'name');
  name.innerHTML = `${profiles[i].firstName} ${profiles[i].lastName}`;
  email.setAttribute('class', 'card-text');
  email.innerHTML = "danielmartin1996@hotmail.com";
  city.setAttribute('class', 'card-text cap');
  city.innerHTML = `${profiles[i].city}`;
  gallery.lastChild.appendChild(infoDiv);
  infoDiv.appendChild(name);
  infoDiv.appendChild(email);
  infoDiv.appendChild(city);
} */

/* function createCards() {
  for (i=0; i< 12; i++) {
    createCardDiv();
    createImageContainer();
    createInfoContainer(profiles);
  }
} */

getProfiles();
console.log(profiles);

