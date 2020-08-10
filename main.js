import { friendlyFetch } from './data.js'

const baseURL = "https://kitsu.io/api/edge/"
  
friendlyFetch(baseURL+"anime")
    .then(response => {
        for(let i in response.data){
            const container = document.querySelector("#container")
            const img = document.createElement('img')
            const name =  document.createElement('H1')
            const sinopse =  document.createElement('H5')
            const anime = response.data[i].attributes
            img.src = anime.posterImage.tiny
            name.appendChild(document.createTextNode(anime.titles.en_jp))
            sinopse.appendChild(document.createTextNode(anime.synopsis))

            console.log(anime)
            
            container.append(name)
            container.append(img)
            container.append(sinopse)
            }
    })


function search(query){
    friendlyFetch(baseURL+"anime/"+query)
    .then(response => {        
        for(let i in response.data){
            const container = document.querySelector("#container")
            const img = document.createElement('img')
            const name =  document.createElement('H1')
            const sinopse =  document.createElement('H5')
            const anime = response.data[i].attributes
            img.src = anime.posterImage.tiny
            name.appendChild(document.createTextNode(anime.titles.en_jp))
            sinopse.appendChild(document.createTextNode(anime.synopsis))

            console.log(anime)
            
            container.append(name)
            container.append(img)
            container.append(sinopse)
            }
    })
}
addEventListener("submit", () => {
    console.log("teste")
    const query = document.getElementById('query').submit
    search(query)})