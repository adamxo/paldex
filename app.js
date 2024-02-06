const cardsContainer = document.querySelector('.app__cards')
const modal = document.querySelector('.app__modal')
const modalCloseButton = document.querySelector('.app__modal-close')
const modalName = document.querySelector('.app__modal-name')
const modalNumber = document.querySelector('.app__modal-number')
const modalImage = document.querySelector('.app__modal-image')
const modalDescr = document.querySelector('.app__modal-descr')

modalCloseButton.addEventListener('click', function() {
  closeModal();
})

function openModal(name, number, image, descr, type) {
  modalName.innerHTML = name
  modalNumber.innerHTML = number
  modalDescr.innerHTML = descr

  modalImage.src = image
  modalImage.classList.add(type)

  modal.classList.toggle('active')
}

function closeModal() {
  modal.classList.toggle('active')

  modalImage.classList = "app__modal-image";
}

fetch('./assets/data/pals.json', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
 })
.then( res => res.json())
.then((data) => {
     console.log(data);

    data.forEach(pal => {
        let newCard = document.createElement('div')
        newCard.classList.add('card')
        newCard.classList.add(pal.types[0] + "-type")

        let newImage = document.createElement('img')
        newImage.src = "https://raw.githubusercontent.com/mlg404/palworld-paldex-api/main" + pal.image
        newImage.classList.add('card__image')
        newImage.classList.add(pal.types[0])

        let newTitle = document.createElement('h4')
        newTitle.classList.add('card__title')
        newTitle.innerHTML = pal.name
        newTitle.setAttribute('data-value', pal.name)

        let newNumber = document.createElement('p')
        newNumber.classList.add('card__number')
        newNumber.innerHTML = pal.key

        newCard.appendChild(newImage)
        newCard.appendChild(newTitle)
        newCard.appendChild(newNumber)

        newCard.addEventListener('click', function() {
          openModal(pal.name, pal.key, newImage.src, pal.description, pal.types[0])
        });

        cardsContainer.appendChild(newCard)
    });
});
