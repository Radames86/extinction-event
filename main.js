
// const dinosaurItems = document.querySelectorAll('.dinosaurs li')

// dinosaurItems.forEach(function(item){
//     item.addEventListener('click', function(event){
//         event.target.style.textDecoration = 'line-through'
//     }) 
// })

// const speciesItems = document.querySelectorAll('.species li')

// speciesItems.forEach(function(item){
//     item.addEventListener('click', function(event){
//         event.target.style.opacity = '0'
//     })
// })

// didn't have time to finish on my own 
// will still study up on it though
// class code below

const lines = document.querySelectorAll('ol li') // standard cleaner code
lines.forEach(item => {
    item.addEventListener('click', (event => {
        event.target.style.textDecoration = 'line-through'
    }))
})

// for(let item of lines){
//     item.addEventListener('click', (event => {
//         event.target.style.textDecoration = 'line-through'
// }))
// }

const fades = document.querySelectorAll('ul li')
fades.forEach(item => {
    item.addEventListener('click', (event => {
        event.target.style.opacity = 0
    }))
})

const pics = document.querySelectorAll('img')
pics.forEach(item => {
item.addEventListener('click', (event => {
    event.target.style.width = 0
}))
})

document.querySelectorAll('#destroy-all').addEventListener('click', () => {
  lines.forEach(item => item.style.textDecoration = 'line-through')
  fades.forEach(item => item.style.opacity = 0)
    pics.forEach(item => item.style.width = 0)
})