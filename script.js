// Crie um objeto que receba ao menos três propriedades sobre você.
// Adicione uma nova propriedade sem alterar seu objeto inicial.
// Remova uma propriedade desse objeto.
//Mostre no console todas as propriedades desse objeto.


let cadastro1 = {
    nome:'Flavio',
    idade:33,
    cidade:"Campo Grande"
}

cadastro1.signo = "Sagitário";
delete cadastro1.idade;
console.log(cadastro1)


// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.


let cadastro2 = [{
    nome:'Laura',
    idade:25,
    telefone:47988565477,
    amigos: ['Fabiana']
},

{
    nome:'Lucia',
    idade:23,
    telefone:4798885154,
    amigos:['Fulana']
},
 {
    nome:'Daniel',
    idade: 06,
    telefone:67981524378,
    amigos:['Breno']
},
{
    nome:'Maria Clara',
    idade: 08,
    telefone:217769355,
    amigos:['Tarsila']
},
{
    nome:'Andressa',
    idade:27,
    telefone: 216767433,
    amigos:['Dani']
},
]
cadastro2[0].amigos = ['Fabiana',]
cadastro2[1].amigos = ['Fulana']
cadastro2[2].amigos = ['Breno']
cadastro2[3].amigos = ['Tarsila']
cadastro2[4].amigos = ['Dani']

console.log(cadastro2);