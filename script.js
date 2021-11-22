const classif = document.querySelectorAll('.rating')
const imagens = document.querySelectorAll('img')
const classifMain = document.querySelector('.ratingsMain')
const enviar = document.querySelector('#send')
const painel = document.querySelector('#painel')

let selecionado = 'Satisfeito'
let img = imagens
// classif.forEach( rating => rating.addEventListener('click', ()=> {
//     rating.classList.add('ativo')
// })
// )
//console.log(painel)



enviar.addEventListener('click', (e)=> {
    painel.innerHTML = `
        <i class= "fas fa-heart"></i>
        <strong>Obrigado</strong>
        <br>
        <strong>Feedback: ${selecionado}</strong>
        <img src="${img}" style="height:50px";>
        <p>Usamos o seu feedback para melhorar a sua experiência como cliente</p>
    `
})

classifMain.addEventListener('click', (e) => { //como painel é parente de #send, botão , eventListener no painel
    //console.log('click')
    //console.log(e.target)//console log de  <img src="" alt="">
    if (e.target.parentNode.classList.contains('rating')) { //verifica se algum parente tem class 'rating'
        //console.log(e.target)
        removerAtivo()//primeiro uso a função q remove todos os ativo de todas as classes 'rating'
        e.target.parentNode.classList.add('ativo')
        selecionado = e.target.nextElementSibling.innerHTML//dentro da classe rating, img e small sao siblings
        //console.log(selecionado)//console log do texto na tag small
        img = e.target.src//target.src para ir buscar a imagem
        //console.log(img)

    }
})

function removerAtivo (){//funcao q remove todos os ativo da classe
    for (let i=0; i< classif.length; i++)
    {
        classif[i].classList.remove('ativo')
    }
}