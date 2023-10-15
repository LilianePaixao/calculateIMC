//validar se são números nos inputs
export function notNumber(value) {
  return isNaN(value) || value == "" //retorna falso qdo se trata de número
}

  
//function cálculo IMC
export function calculateIMC(Weight, Height) {
  return (Weight/((Height / 100) ** 2)).toFixed(2)
}
