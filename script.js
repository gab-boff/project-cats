async function getCatsPics() {
  fetch('https://thatcopy.pw/catapi/rest/')
  .then((cats) => cats.json())
  .then((pics) => {
    const thePic = document.querySelector('.pic-cat');
    thePic.setAttribute('src', pics.url)
  })
}

getCatsPics();

function getCatsFacts() {
  fetch('https://cat-fact.herokuapp.com/facts')
  .then((cats) => cats.json())
  .then((catsFacts) => catsFacts.forEach((facts) => document.body.innerHTML += `<p>${facts.text}</p>`) )
}

getCatsFacts();

function inputClick() {
  const catValue = document.querySelector('#http-cat');
  const thePic = document.querySelector('.pic-cat');
  thePic.setAttribute('src', `https://http.cat/${catValue.value}`)
}