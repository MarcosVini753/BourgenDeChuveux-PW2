class Doador{
    nome: string;
    cpf: string;
    numero: string;
    email: string;
    endereco: string;
    
    public constructor(nome: string, cpf: string, numero: string, email: string, endereco: string){
        this.nome = nome;
        this.cpf = cpf;
        this.numero = numero;
        this.email = email;
        this.endereco = endereco;
    }
}

let lista_de_doadores: Array<Doador> = [];
lista_de_doadores = JSON.parse(localStorage.getItem("lista_de_doadores_local") || "[]")
console.log(lista_de_doadores)
listarDoadores();

function salvar(){
    const nome = (<HTMLInputElement>document.getElementById(`nome`)).value;
    const cpf = (<HTMLInputElement>document.getElementById(`cpf`)).value;
    const numero = (<HTMLInputElement>document.getElementById(`numero`)).value;
    const email = (<HTMLInputElement>document.getElementById(`email`)).value;
    const endereco = (<HTMLInputElement>document.getElementById(`endereco`)).value;
    limparFormulario();

    let doadorTmp = new Doador(nome, cpf, numero, email, endereco);
    lista_de_doadores.push(doadorTmp);
    localStorage.setItem("lista_de_doadores_local", JSON.stringify(lista_de_doadores));
    listarDoadores();
}

function limparFormulario(){
    const nome = (<HTMLInputElement>document.getElementById(`nome`)).value = "";
    const cpf = (<HTMLInputElement>document.getElementById(`cpf`)).value = "";
    const numero = (<HTMLInputElement>document.getElementById(`numero`)).value = "";
    const email = (<HTMLInputElement>document.getElementById(`email`)).value = "";
    const endereco = (<HTMLInputElement>document.getElementById(`endereco`)).value = "";
}

function listarDoadores(){
    let html = '';
    for (let index = 0; index < lista_de_doadores.length; index++) {
        html += `<tr>`
        html += `<td>${lista_de_doadores[index].nome}</td>`
        html += `<td>${lista_de_doadores[index].cpf}</td>`
        html += `<td>${lista_de_doadores[index].numero}</td>`
        html += `<td>${lista_de_doadores[index].email}</td>`
        html += `<td>${lista_de_doadores[index].endereco}</td>`
        html += `<td><button onClick="excluir(${index})" >Excluir</button>`
        html += `<button onClick="editar(${index})" >Editar</button></td>`
        html += `</tr>`
    }
    
    (<HTMLElement>document.getElementById(`tBody`)).innerHTML = html;
}

function excluir(i: number){
    lista_de_doadores.splice(i,1);
    localStorage.setItem("lista_de_doadores_local", JSON.stringify(lista_de_doadores));
    listarDoadores();
}

function editar(i: number){

    (<HTMLInputElement>document.getElementById(`nome`)).value = lista_de_doadores[i].nome;
    (<HTMLInputElement>document.getElementById(`cpf`)).value =lista_de_doadores[i].cpf;
    (<HTMLInputElement>document.getElementById(`numero`)).value = lista_de_doadores[i].numero;
    (<HTMLInputElement>document.getElementById(`email`)).value = lista_de_doadores[i].email;
    (<HTMLInputElement>document.getElementById(`endereco`)).value = lista_de_doadores[i].endereco ;

    excluir(i);
}