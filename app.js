/******************************************************************************
 * Objetivo: realizar calculo de médias escolares, tralahando com entrada de dados, variáveis e condicionais.
 * Autor: Maria Cecilia.
 * Data: 01/08/2025
 * Versão:1.0
 ******************************************************************************/

//Padrão de mensagens de erro da aplicação
const MESSAGE_ERROR_EMPTY = 'ERRO: Existem campos que não foram preenchidos.'
const MESSAGE_ERROR_NOT_NUMBER = 'ERRO: Não é possível calcular com a entrada de letras.'
const MESSAGE_ERROR_OUT_OF_RANGE = 'ERRO: Os valores informados precisam ser de 0  a 10.'


//Import da biblioteca que calcula a média
var mediaEscolar = require('./modulo/media.js')

//Import da biblioteca do readline
var readline = require('readline')

//Criando umobjeto para entrada e saída de dados via terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do aluno: ', function(nome){
    //Recebe o callback e converte as letras para MAIUSCULO
    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados das notas (um callback dentro do outro)
    entradaDeDados.question('Digite a nota1: ', function(valor1){
        let nota1 = valor1

        entradaDeDados.question('Digite a nota2: ', function(valor2){
            let nota2 = valor2

            entradaDeDados.question('Digite a nota3: ', function(valor3){
                let nota3 = valor3

                entradaDeDados.question('Digite a nota4: ', function(valor4){
                    let nota4 = valor4

                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' || nomeAluno == ''){
                        console.log(MESSAGE_ERROR_EMPTY)

                    }else if(isNaN(nota1) || isNaN(nota2) ||  isNaN(nota3) ||  isNaN(nota4)){
                        console.log(MESSAGE_ERROR_NOT_NUMBER)

                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || Number(nota2) < 0 || Number(nota2) > 10 || Number(nota3) < 0 || Number(nota3) > 10 || Number(nota4) < 0 || Number(nota4) > 10){   
                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)

                    }else{
                        //Chama a função para gerar a média
                        let media = mediaEscolar.calcularMedia(nota1, nota2, nota3, nota4)
                        //Chama a função para validar o status do aluno
                        let statusAluno = mediaEscolar.validarStatus(media)
                        
                        if(statusAluno){
                        console.log(`O aluno(a) ${nomeAluno} teve a média: ${media} e está: ${statusAluno}`)
                        entradaDeDados.close()
                        }
                    }

                })
            })
        })
    })

})