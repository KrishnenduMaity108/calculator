let calculation=' ';

      const result = JSON.parse(localStorage.getItem('result'));
      document.querySelector('.show-calculation').innerHTML= ((result) || 0);


      function calculate(number){
        if(number === '='){
          const result = eval(calculation);
          document.querySelector('.show-calculation').innerHTML = (result);
          localStorage.setItem('result',JSON.stringify(result));
          return result;
        }
        else if(number === ' '){
           calculation=' ';
           localStorage.removeItem('result');
           document.querySelector('.show-calculation').innerHTML = (calculation);
           return calculation;
        }
        else{
          calculation = calculation + number;
          document.querySelector('.show-calculation').innerHTML = (calculation);
          return calculation;
        }
      }