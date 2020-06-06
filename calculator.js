let calculadora = {
    sumar: function (numeros){
        let resultado = numeros.reduce(function(acum,num){
            return acum + num
        })
        return console.log(resultado) 
    },

    restar: function (numeros){
        let resultado = numeros.reduce(function(acum,num){
            return acum - num
        })
        return console.log(resultado)
    },

    multiplicar: function (numeros){
        let resultado = numeros.reduce(function(acum,num){
            return acum * num
        })
        return console.log(resultado)
    },

    dividir: function (numeros){
        let bandera = false;
        let resultado = numeros.reduce(function(acum,num){
            if (num === 0){
                bandera = true;
                return console.log("no se puede dividir por 0")
                
            }
            else{
            return acum / num
            }
        })
        if (bandera==false){
        return console.log(resultado)
        }
    }
}

module.exports = calculadora;