function addTokens(input, tokens){
    
  // verificam daca este string sau nu
  if (typeof (input) != 'string') {
    throw new Error('Invalid input');
  }
  else {
    console.log('inputul este este un string');

    // verificam daca are cel putin 6 caractere
    if (input.length < 6) {
      throw new Error('Input should have at least 6 characters');
    }
    else {
      console.log('inputul are cel putin 6 caractere');
    }
  }

  // verificam daca tokens este un array care are ca si elemente niste obiecte
  if (!(tokens instanceof Array) || typeof(tokens) != 'object') {
    throw new Error('Invalid array format');
  }

  // verificam daca obiectele din tokens au formatul {tokenName: 'string'}
  // mai intai verificam daca obiectul este intr-adevar un obiect si daca are o singura propietate (numita tokenName)
  tokens.forEach((tok) => {
    if ( typeof(tok) != 'object' || Object.keys(tok).length > 1 || tok.hasOwnProperty('tokenName') === false) {
      throw new Error('Invalid array format');
    }

    // daca indeplineste cerintele date, trecem mai departe si verificam daca valoarea atributului tokenName este de tip string
    else {
      if ( typeof(tok.tokenName) != 'string' ) {
        throw new Error('Invalid array format');
      }
    }
  })
  // Object.keys() -> verifica cate atribute are obiectul 'tok' (in cazul nostru are doar unul = tokenName)
  // hasOwnProperty('tokenName') -> verifica daca obiectul are o singura propietat cu numele 'tokenName'


  // daca inputul nu contine '...' atunci returnam inputul
  if ( !input.includes('...')) {
    return input;
  }

  // daca contine '...' atunci inlocuim '...' cu valoarea din tokenName
//   else {
    tokens.forEach((tok) => {
      input = input.replace('...', `\${${tok.tokenName}}`);
    });
    // return input;
//   }
  return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;