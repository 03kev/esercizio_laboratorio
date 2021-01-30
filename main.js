"use strict"

const fs = require("fs")
const fetch = require("node-fetch")

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {  
        //Esercizio 1: Stampare sul terminale l'id di tutti i post dell’utente con id 4
        console.log("- ID dei post con userID uguale a 4:")
        data
            .filter(e => e.userId === 4)
            .forEach(e => console.log(e.id))

        //Esercizio 2: Stampare sul terminale l'id di tutti i post con id dispari
        console.log("- ID dei post dispari:")
        data
            .filter(e => e.id%2 !== 0)
            .forEach(e => console.log(e.id))

        //Esercizio 3: Stampare sul terminale l'id di tutti i post con un numero pari di parole nel titolo     
        console.log("- ID dei post con un numero pari di parole nel titolo:")
        data
            .filter(e => e.title.replace(/\n/g, "").split(" ").length%2 === 0)
            .forEach(e => console.log(e.id))

        //Esercizio 4: Stampare sul terminale l'id di tutti i post con un numero di lettere nel body che sia multiplo di 3
        console.log("- ID dei post con un numero di lettere nel body multiplo di 3:")
        data
            .filter(e => e.body.replace(/\n/g, "").length%3 === 0)
            .forEach(e => console.log(e.id)) 

        //Esercizio 5: Stampare sul terminale un’unica stringa che sia formata da tutti i body di tutti i post il cui titolo inizia per “s”
        console.log("- Body dei post con il titolo che inizia per 's':")
        let string = data
            .filter(e => e.title[0] === "s")
            .reduce((acc, e) => acc += e.body.replace(/\n/g, " ") + " ", "")
        console.log(string)
    })