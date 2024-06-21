
      let string = "";
      let history = [];
      let buttons = document.querySelectorAll('.button');
      let inputField = document.querySelector('input');
      let historyDiv = document.getElementById('history');

      Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
          if (e.target.innerHTML == '=') {
            let result = eval(string);
            history.push(string + ' = ' + result);
            string = result;
            inputField.value = string;
          } else if (e.target.innerHTML == 'AC') {
            string = "";
            inputField.value = string;
          } else {
            string = string + e.target.innerHTML;
            inputField.value = string;
          }
        });
      });

      document.getElementById('history-button').addEventListener('click', () => {
        history.forEach((calculation) => {
          historyDiv.innerHTML +=  calculation + '</p>';
        });
      });
