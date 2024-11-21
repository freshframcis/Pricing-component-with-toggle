const priceBox = document.getElementById('main')


const tog = document.getElementById('toggle')

tog.addEventListener('change', e=>{
    priceBox.classList.toggle('show-monthly')
})