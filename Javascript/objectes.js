alumne = {
    nom: "Arnau",
    cognom1: "Eroles",
    cognom2: "Companys",
    edat: 38,
    animals: ["🐨","🐫"]
}


console.log(alumne.nom,alumne.cognom1);

pokemon1 = {
    nombre: 'galeon',
    ataque: 'fuego',
    vitalidad: 40
}
pokemon2 = {
    nombre: 'monti',
    ataque: 'trueno',
    vitalidad: 80
}
pokemon3 = {
    nombre: 'arista',
    ataque: 'viento',
    vitalidad: 20
}
pokemon4 = {
    nombre: 'crispi',
    ataque: 'fuego',
    vitalidad: 40
}
pokemon5 = {
    nombre: 'aqua',
    ataque: 'agua',
    vitalidad: 70
}

pokemons = [pokemon1,pokemon2,pokemon3,pokemon4,pokemon5];

console.log(pokemons)

vitalidades = pokemon1.vitalidad + pokemon2.vitalidad+pokemon3.vitalidad+pokemon4.vitalidad+pokemon5.vitalidad;

console.table(vitalidades);

fruita = [
{
    num: 1,
    nom: "poma",
    valornutricional: 8,
    tipo: "🍏",
    propietats: ["proteina","zinc"]
},
{
    num: 2,
    nom: "banana",
    valornutricional: 8,
    tipo: "🍌",
    propietats: ["magnesi","Q10"]
}
]

tipos = [fruita[1].propietats,fruita[2].propietats]


console.table(fruita)


