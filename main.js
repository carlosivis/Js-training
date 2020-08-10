import { friendlyFetch } from './data.js'

const baseURL = "https://kitsu.io/api/edge/"
  
friendlyFetch(baseURL+"anime")
    .then(response => {
        for(let i in response.data){
            const container = document.querySelector("#container")
            const addImg = document.querySelector("#contex")
            const sinop = document.querySelector("#text")
            const title = document.querySelector("#title")
            const img = document.createElement('img')
            const name =  document.createElement('H1')
            const sinopse =  document.createElement('H5')
            const anime = response.data[i].attributes
            img.src = anime.posterImage.tiny
            name.appendChild(document.createTextNode(anime.titles.en_jp))
            sinopse.appendChild(document.createTextNode(anime.synopsis))

            console.log(anime)
            
            container.append(title.appendChild(name))
            container.append(addImg.appendChild(img))
            container.append(sinop.appendChild(sinopse))
            
            }
    })


function search(){
    friendlyFetch(baseURL+"anime")
    .then(response => {
        const img = document.createElement('img')
        //img.src = response.icon_url
        console.log(response)
        for(let i=0; i<=10; i++){
            const addCurious =  document.querySelector("#teste")
            console.log(response.data[i])
            addCurious.append(response.data[i].attributes.titles.en)
        }
        //addImg.appendChild(img)
    })
}