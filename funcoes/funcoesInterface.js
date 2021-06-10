const imprimeListaChuva = (listaChuvas) => {
  console.log('\nNOME DO METEORO             - INTENSIDADE - HEMISFÉRIO - PERÍODO');

  listaChuvas.forEach( imprimeChuva );
}

const imprimeChuva = (chuva) => {
  const nome = chuva.nome.padEnd(27,' ');
  let intensidade = '1 (Fraca)';

  if ( chuva.intensidade.indexOf('Forte') >= 0 ) {
      intensidade = '3 (Forte)';
  } else if ( chuva.intensidade.indexOf('Média') >= 0 ) {
      intensidade = '2 (Média)';
  } else if (  chuva.intensidade.indexOf('Irregular') >= 0 ) {
      intensidade = '(Irregular)';
  }

  intensidade = intensidade.padEnd(11, ' ');

  let hemisferio = chuva.declinacao >= 0 ? 'Norte' : 'Sul';
  hemisferio = hemisferio.padEnd(10,' ');

  let dataInicio = chuva.inicio.split('/');
  dataInicio = dataInicio[1] + '/' + dataInicio[0];

  let dataFim = chuva.fim.split('/');
  dataFim = dataFim[1] + '/' + dataFim[0];

  console.log(`${ nome } - ${ intensidade } - ${ hemisferio } - ${ dataInicio } à ${ dataFim } `);
}

export default imprimeListaChuva;
