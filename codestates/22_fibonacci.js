let fibonacci = function(n) {
    const fibo = [0, 1];
    const memo = (n) => {
      if(fibo[n] !== undefined) return fibo[n];
      fibo[n] = memo(n - 1) + memo(n - 2);
      return fibo[n];
    }
    return memo(n);
  } 