const url = "https://randomuser.me/api/?results=12";
const gallery = document.getElementById('gallery');
let profiles = [];
async function getProfiles() {
  const response = await fetch(url);
  const data = await response.json();
  for (let i = 0; i < 12; i++) {
    const gallery = document.getElementById('gallery');
    let html = document.createElement('div');
    html.innerHTML = `<div class="card"  id="${i}">
    <div class="card-img-container">
      <img class="card-img" src= ${data.results[i].picture.large} alt="profile picture">
    </div>
    <div class="card-info-container">
      <h3 id="name" class="card-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
      <p class="card-text">${data.results[i].email}</p>
      <p class="card-text cap">${data.results[i].location.city}</p>
    </div>
    <div class="modal-container"  style="display:none"  id="${i}">
                <div class="modal">
                    <button id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                    <img class="modal-img" src= ${data.results[i].picture.large} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data.results[i].name.first} ${data.results[i].name.last}</h3>
                        <p class="modal-text">${data.results[i].email}</p>
                        <p class="modal-text cap">${data.results[i].location.city}</p>
                        <hr>
                        <p class="modal-text">${data.results[i].cell}</p>
                        <p class="modal-text">${data.results[i].location.street.number} ${data.results[i].location.street.name}, ${data.results[i].location.state}, ${data.results[i].location.postcode}</p>
                        <p class="modal-text">Birthday: ${data.results[i].dob.date}</p>
                    </div>
                </div>`
    gallery.appendChild(html); 
  }
}
    

async function makeClickable() {
  await getProfiles();
  for (i = 0; i<12; i++) {
    let card = document.getElementsByClassName('card')[i];
    card.addEventListener('click', () => {   
       const model = document.getElementById(card.id);
       const container = model.lastChild;
       container.style.display = 'block'; 
    })
    let button = card.getElementsByTagName('button')[0];
    button.addEventListener('click', (e) => {
    e.target.parentNode.parentNode.style.display = 'none';
    })
    
  }}
    
  
makeClickable()