// 'use strict'

// const like = document.getElementById('like')
// const card = document.getElementById('card1')


// const pesquisa = document.getElementById('pesquisa')

// function darLike () {
//     card.removeChild(like)
//     const img = document.createElement('img')
//     img.src = './img/deuLike.png'
//     img.alt = 'like'
//     card.appendChild(img)
// }



// pesquisar.addEventListener('click', pesquisar)

// like.addEventListener('click', darLike)

const apiKey = 'ddaa65d09fb60c53d74ed7c7434c701a';
const albumId = document.getElementById('pesquisa').value;
const getAlbumInfo = async () => {
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/album/${album}';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09a2cf8917msha72d3ce33b81b40p147216jsn00f7835e00b8',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    console.log ('teste')
};
const getAlbumButton = document.getElementById('lupa');
getAlbumButton.addEventListener('click', getAlbumInfo);