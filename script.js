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
            this.impreuna = this.total * this.person.value;
            this.impreuna = this.impreuna.toFixed(2);
            console.log(this.total);
            console.log(this.person.value);
            console.log(this.impreuna);
            this.resul = document.createElement('span');
            this.resImpreuna = document.createElement('span');
            this.resImpreuna.className = 'total-tip';
            this.resul.innerText = `Result : \n ${this.total} $ For Each`;
            this.resImpreuna.innerText = `Total Tip : \n ${this.impreuna} $`;
            this.resultContainer.appendChild(this.resul);
            this.resultContainer.appendChild(this.resImpreuna);

        } else {
            alert("Please enter a valid number");
        }
    }
}

const play = new Calculate();
