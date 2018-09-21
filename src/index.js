module.exports = function solveEquation(equation = '') {
  equation = equation.replace(/\s/g, '');
  const arr =[];
  function cut (strS, firstF, secondS){
    let ret = '';
    for (var j=firstF; j<secondS; j++){ret=ret+strS[j];} 
    ret=ret.replace(/\s/g, '');
    return ret;
  }
  if ( equation.indexOf('*')!==-1 && equation.indexOf('^2')!==-1 && equation.indexOf('*x', equation.indexOf('^2'))!==-1 ){
    let a = Number( cut(equation, 0, equation.indexOf('*')) );
    let b = Number( cut(equation, equation.indexOf('^2')+2, equation.indexOf('*x', equation.indexOf('^2'))) );
    let c = Number( cut(equation, equation.indexOf('*x', equation.indexOf('^2'))+2, equation.length) );
    let D = Math.pow(b, 2)-4*c*a;
    if (D>=0){
      arr.push( Math.round( (-b-Math.sqrt(D))/(2*a) ) );
      arr.push( Math.round( (-b+Math.sqrt(D))/(2*a) ) );
    }
    else {return "There is no answers";}
    arr.sort(FunctSort = (left, right) => left - right);
    return arr;
  }
  else {return "Erro";}
}