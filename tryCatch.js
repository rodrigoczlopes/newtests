// Throw

function sayMyName(name = ' ') {
  if (name === ' ') {
      throw 'Nome é obrigatório'
  }

  console.log(name)
}


// Try Ctach
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após ao try/catch')