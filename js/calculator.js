let elementButton = document.getElementById("button");
            let elementNumber1 = document.getElementById("number1");
            let elementNumber2 = document.getElementById("number2");
            let elementVysledok = document.getElementById("vysledok");


            function add() {
                let number1 = parseFloat(elementNumber1.value);
                let number2 = parseFloat(elementNumber2.value);
                elementVysledok.value = number1 + number2;
            }

            elementButton.addEventListener("click", add);