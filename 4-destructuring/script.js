//4.1 Découverte
//L'affectation par décomposition (destructuring en anglais) est une expression JavaScript qui permet d'extraire (unpack en anglais) des données d'un tableau ou d'un objet grâce à une syntaxe dont la forme ressemble à la structure du tableau ou de l'objet.
const [a, b] = [1, 2, 3, 4]
console.log(a)
console.log(b)

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)

//4.2 Application

console.log(data)

for (let property in data) {
    console.log(data[property]);
    const {dateDebut, dateFin, texte} = data[property]
    console.log(dateDebut, dateFin, texte);
}