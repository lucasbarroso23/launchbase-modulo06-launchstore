module.exports = {
    create(req, res) {
        //pegar categorias
        return res.render("products/create.njk")
    },
    post(req, res) {
        //lógica de salvar

    }
}