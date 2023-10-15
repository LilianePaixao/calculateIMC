import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { notNumber, calculateIMC } from './utils.js'

//variables
const form = document.querySelector('form')
//inputWeight é a variável onde encontro o número digitado
let inputWeight = document.querySelector('#weight')
let inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()
   
  //quero o valor do inputWeight
   let Weight = Number(inputWeight.value)
   let Height = Number(inputHeight.value)

   const weightOrHeightIsNotNumber = notNumber(Weight) || notNumber(Height)

   if (weightOrHeightIsNotNumber){
    AlertError.open()
    
    return
   }
   
   AlertError.close()

   const result = calculateIMC(Weight, Height)
   
   displayResultMessage(result)

}


function displayResultMessage(result){
  const message =`Seu IMC é de ${result}`

   Modal.message.innerText = message
   Modal.open()
}

inputWeight.onsubmit = () => {
  AlertError.close()
}

//desaparece o erro quando volto a digitar no input
inputWeight.oninput = () => {
  AlertError.close()
}

inputHeight.oninput = () => {
  AlertError.close()
}