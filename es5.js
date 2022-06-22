function Pessoa(name, lastName) {
    this.name = name
    this.lastName = lastName

    this.fullName = function() {
        return `${this.name} ${this.lastName}`
    }

}

var luan = new Pessoa('luan', 'ramos');
var marcos = new Pessoa('marcos', 'gomes');
var thiago = new Pessoa('thiago', 'guerra');

console.log(luan.fullName());
console.log(marcos.fullName());
console.log(thiago.fullName());