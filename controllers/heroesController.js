const fs = require('fs');

let heroesCont = {
    leerJSON: () => {
        return JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'))
    },

    index: (req, res) => {
        let heroes = heroesCont.leerJSON()
        res.render('heroes',{titulo: 'Lista de heroes', heroes: heroes});
    },
    detalle: (req, res) => {
        let id = req.params.id

        let heroe = heroesCont.leerJSON().filter((heroe) => {
            return heroe.id == id
        });

        heroe = heroe[0]

        if (heroe == undefined) {
            res.render('sinHeroe',{texto: 'Este heroe no fue encontrado :( pruebe con otra id'})
        } else {
            res.render('heroe',{
                titulo: 'Detalle de',
                nombre: heroe.nombre,
                profesion: heroe.profesion
            })
        }
    },
    bio: (req, res) => {
        let id = req.params.id
        let ok = req.params.ok

        let heroe = heroesCont.leerJSON().filter((heroe) => {
            return heroe.id == id
        });

        heroe = heroe[0]

        if (heroe == undefined) {
            return res.render('sinBio',{texto: 'No tenemos un héroe para mostrar su biografia'})
        }

        if (ok == 'ok') {
            return res.render('bioOk',{nombre: heroe.nombre, resenia: heroe.resenia, titulo: 'Biografía'})
        } else {
            return res.render('bioSinOk', {nombre: heroe.nombre, mensaje: 'Lamento que no desees saber más de mi :('})
        }
    }
}
module.exports = heroesCont