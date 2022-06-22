class Pessoa {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    fullName() {
        return `${this.name} ${this.lastName}`
    }
}

let luan = new Pessoa('luan', 'ramos');
let marcos = new Pessoa('marcos', 'gomes');
let thiago = new Pessoa('thiago', 'guerra');

console.log(luan.fullName());
console.log(marcos.fullName());
console.log(thiago.fullName());