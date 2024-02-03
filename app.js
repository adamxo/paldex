
// let appData = [];
const app = document.querySelector('.app')

fetch('./assets/data/pals.json', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
 })
.then( res => res.json())
.then((data) => {
     console.log(data);

    data.forEach(element => {
        let newCard = document.createElement('div')
        newCard.classList.add('card')

        let newImage = document.createElement('img')
        newImage.src = "https://raw.githubusercontent.com/mlg404/palworld-paldex-api/main" + element.image
        newImage.classList.add('card__image')
        newImage.classList.add(element.types[0])

        let newTitle = document.createElement('h1')
        newTitle.classList.add('card__title')
        newTitle.innerHTML = element.name
        newTitle.setAttribute('data-value', element.name)
        
        let newType = document.createElement('p')
        newType.classList.add('card__type-text')
        newType.classList.add(element.types[0])
        newType.innerHTML = element.types[0]
        let typeContainer = document.createElement('div')
        typeContainer.classList.add('card__type')
        typeContainer.appendChild(newType)

        let newDescr = document.createElement('p')
        newDescr.classList.add('card__descr')
        newDescr.innerHTML = element.description
        

        newCard.appendChild(newImage)
        newCard.appendChild(newTitle)
        newCard.appendChild(typeContainer)
        newCard.appendChild(newDescr)
        app.appendChild(newCard)

        console.log(element.name)
    });
});
