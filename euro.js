class Calculate {
    constructor(input, option) {
        this.input = input;
        this.option = option;
        this.person;
        this.resultContainer;
        this.resul;
        this.getInput();
    }

    getInput() {
        this.resultContainer = document.getElementById('resultat'); //div per span
        this.input = document.getElementById('in'); //input text
        this.option = document.getElementById('option'); //input option
        this.person = document.getElementById('people'); //input text for person
        document.getElementById('calculate').addEventListener('click', () => {
            this.getResult();
            this.input.value = "";
            this.option.value = "0";
            this.person.value = "";

        });
        this.person.addEventListener("keypress", () => {
            if (event.keyCode === 13) {
                //daca codul de la tasta este 13(enter)
                this.getResult(); //porneste functia addTask
            }
        });

    }

    getResult() {

        if (this.input.value >= 0 || this.input.value < 0) {
            this.resultContainer.innerHTML = ""; //Rimuovi il contenuto di div
            this.total = (this.input.value * this.option.value) / this.person.value;
            this.total = this.total.toFixed(2);
            console.log(this.total);
            this.resul = document.createElement('span');
            this.resul.innerText = `Result : \n ${this.total} € \n For Each`;
            this.resultContainer.appendChild(this.resul);

        } else {
            alert("Please enter a valid number");
        }
    }
}

const play = new Calculate();