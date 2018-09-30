module.exports = function solveEquation(equation) {
    var arr = equation.split(' ');
    var solutions = [];
    var a = +arr[0];
    var b = +(arr[3]+arr[4]);
    var c = +(arr[7]+arr[8]);
    
    var disc = Math.pow(b,2) - 4*a*c;
    
    var result_1 = Math.round((-b +Math.sqrt(disc)) / (2*a));
    var result_2 = Math.round((-b -Math.sqrt(disc)) / (2*a));
    solutions.push(result_1);
    solutions.push(result_2);
    
    solutions.sort(function(left, right) {
      return left - right;
    });
    
    return solutions;
}
