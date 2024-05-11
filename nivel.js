
function calcularVitorias(vitoria, derrota) {
    const resultado = vitoria - derrota


    if(resultado <= 10) {
      console.log('Ferro')
    } else if (resultado > 10 && resultado <= 20) {
      console.log('Bronze')
    } else if (resultado > 20 && resultado <= 50) {
      console.log('Prata')
    } else if (resultado > 50 && resultado <= 80) {
      console.log('Ouro')
    } else if (resultado > 80 && resultado <= 90) {
      console.log('Diamante')
    } else if (resultado > 90 && resultado <= 100) {
      console.log('Lendário')
    } else if(resultado >= 101) {
      console.log('Imortal')
    } else {
      console.log("Sem número de vitorias informado. ")
    }
  }



calcularVitorias(100,5)





