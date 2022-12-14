import { pecas } from "./pecas.js";
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

controle.forEach((elemeto)=>{
    elemeto.addEventListener('click', (evento)=>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(elemento, contador){
    const peca = contador.querySelector("[data-contador]")
    
    if(elemento === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca){
    
    estatisticas.forEach((elemento)=>{
       elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}