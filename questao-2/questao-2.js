var form = document.getElementById("form")
var fnumber = document.getElementById("fnumber")
var result = document.getElementById("resultado")

function isFibonacciNumber(number) {
    let a = 0;
    let b = 1;
    let fib = b;
    
    while (fib < number) {
      fib = a + b;
      a = b;
      b = fib;
    }
    
    return fib === number;
}


form.addEventListener('submit', function(e){
  e.preventDefault();

  if(isFibonacciNumber(Number(fnumber.value)) === true){
    result.innerText = "Faz parte da sequência Fibonacci.";
  } else{
    result.innerText = "Não faz parte da sequência Fibonacci.";
  }
})
