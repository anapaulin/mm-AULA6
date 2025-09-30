let Pessoa = {
    peso: 85,
    altura: 1.79,
    corDoCabelo: "castanho",
    corDosOlhos: "vermelho",

    fala(){
        console.log("Olá!");
    
    },

    andar(){
        console.log("mover as pernas");
    }
}

Pessoa.altura = 1.90;

console.log(Pessoa.peso, Pessoa.altura);
let nomesItens = ["Poção de Vida", "Espada Mágica", "Escudo de Ferro", "Elixir da Sabedoria", "Amuleto do Dragão"];
let precosItens = [50, 500, 150, 1000, 750];

let itens = [
    {
    nome: "Posição de Vida",
    preco: 500,
    },
    {
        nome: "Amuleto do Dragão",
        preco: 750,
    }
];

function ItemMaisCaro(itens){
    let ItemMaisCaro = {
        nome: "",
        preco: 0,
    }
};
for (let i = 0; i < itens.length; i++){
    if (itens[i].preco > ItemMaisCaro.preco){
        ItemMaisCaro = itens[i];
    }
}
console.table(ItemMaisCaro);

ItemMaisCaro(itens)

// Preicipio de Orientação a objetos
// Abstração - os atributos só podem ser acessados pelo próprio objeto
// Herança - AS classes filhas recebem todos os atributos e métodos da classe mãe


