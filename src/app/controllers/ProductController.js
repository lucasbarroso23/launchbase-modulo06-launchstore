const Category = require('../models/Category')
const Product = require('../models/Product')

module.exports = {
    create(req, res) {
        //pegar categorias *Formato Promisse*
        Category.all()
            .then(function (results) {
                const categories = results.rows;

                return res.render("products/create.njk", { categories })

            }).catch(function (err) {
                throw new Error(err)
            })



    },
    async post(req, res) {
        //lógica de salvar *async await
        const keys = Object.keys(req.body)

        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please. fill all fields!')
            }
        }
        let results = await Product.create(req.body)
        const product = results.rows[0]

        results = await Category.all()
        const categories = results.rows

        return res.render("products/create.njk", { product, categories })


    }
}