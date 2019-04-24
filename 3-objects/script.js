//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
}

//Section  1 : Afficher les carractéristiques du véhicule sours la forme clé : valeur (Ex: id: 3221)
let tableauBusKeys = Object.keys(bus);
let tableauBusValues = Object.values(bus);

for (let i = 0; i < tableauBusKeys.length; i++) {
    console.log(tableauBusKeys[i] + " : " + tableauBusValues[i]);
}

//Section  1 : Afficher les carractéristiques du véhicule sours la forme clé : valeur (Ex: id: 3221)
/*for (let key in bus) { 
    let value = bus [key];
    console.log(key + " :  " + value)
    }
*/

//3.2 Object.values

console.log((data));


let tableauDataValues = Object.values(data);

for (let i = 0; i < tableauDataValues.length; i++) {
    let object = tableauDataValues[i];
    console.log(object.texte);
}


