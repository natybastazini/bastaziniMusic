'use strict'

const like = document.getElementById('like')
const card = document.getElementById('card1')


const pesquisa = document.getElementById('pesquisa')

function darLike () {
    card.removeChild(like)
    const img = document.createElement('img')
    img.src = './img/deuLike.png'
    img.alt = 'like'
    card.appendChild(img)
}

function pesquisar () {
    const card = document.getElementById('pesquisa').value;
    const url = `https://api.deezer.com/version/service/id/method/?parameters`

    const response = fetch(url)
    return response 

}

pesquisar.addEventListener('click', pesquisar)

like.addEventListener('click', darLike)