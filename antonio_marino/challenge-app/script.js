        const inputNome = document.getElementById('inputName');
        const btnAdd = document.getElementById('addName');
        const inputNumber = document.getElementById('inputNumero');
        const btnGenera = document.getElementById('genera');
        const nameList = document.getElementById('nomi');

        let nomi = [];

        function addNomi() {
            const nuovoNome = inputNome.value.trim();
            if (nuovoNome === "") { 
               alert('non hai inserito nessun nome');
               
               return
            }else{
                nomi.push(nuovoNome);
                let li = document.createElement('li');
                li.classList.add('lista-js')
                li.textContent = nuovoNome; 
                nameList.appendChild(li);
                inputNome.value = ""; 
            }
        }

        btnAdd.addEventListener('click', addNomi);

        function random (){
            const numeriInput = inputNumber.value

        }