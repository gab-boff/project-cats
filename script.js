async function getCatsPics() {
  fetch('https://thatcopy.pw/catapi/rest/')
    .then((cats) => cats.json())
    .then((pics) => {
      const thePic = document.querySelector('.pic-cat');
      thePic.setAttribute('src', pics.url)
    })
}

getCatsPics();

const myDiv = document.querySelector('#facts');

function getCatsFacts() {
  fetch('https://cat-fact.herokuapp.com/facts')
    .then((cats) => cats.json())
    .then((catsFacts) => catsFacts.forEach((facts) => myDiv.innerHTML += `<p><br>${facts.text}</p><br>`))
}

getCatsFacts();

function inputClick() {
  const catValue = document.querySelector('#http-cat');
  const thePic = document.querySelector('.pic-cat');
  if (catValue.value === '') {
    thePic.setAttribute('src', 'https://http.cat/404')
  } else {
    thePic.setAttribute('src', `https://http.cat/${catValue.value}`)
  }
}