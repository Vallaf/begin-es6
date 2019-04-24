//2.1 Fonctions simples : remplacement par fonction fléchée => ok
const sayHello = () => {
    console.log('Hello')
}

const sayMyName = (first, last) => {
    console.log(first, last)
}

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
}

sayHello()
sayMyName('Odile', 'Crok')
sayMyAge(23)

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    
    showThis: function() {
    console.log(this)
    } 
   

    
   
    /* showThis: () => {
    console.log(this)
    }
    affiche dans la console Window . Les fonctions fléchées ne sont pas totalement identiques aux fonctions classiques.
    Elles ne gèrent pas les valeurs this, arguments et super.
    */
}

object.showThis()

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
   sayHello: () => console.log('Hello'),
   sayMyName: () => console.log(odile.name.first,odile.name.last),
   sayMyAge: () => console.log('You are ' + odile.age + ' years old')
}

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()