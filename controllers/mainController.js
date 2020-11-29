
module.exports = {
    index: (req,res)=>{
        res.render('index',{titulo : 'Digital Heroes',
    texto: 'Ni superman, Iron Mam o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!'}
        )
    },
    creditos: (req, res) => {
        res.render('creditos',{
            texto :'Redactado, producido y dirigido por Gabriel Patiño, en colaboracion con Digital House.',
            titulo : 'Creditos'})
        }

}