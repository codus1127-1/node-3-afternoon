module.exports = {

    getAll: (req, res) => {
        const db = req.app.get('db')

        db.read_all_products()
        .then(result => res.status(200)
        .send(result))
    }, 

    getOne: (req, res) => {
        const db = req.app.get('db')

        db.read_one_product(req.params.id)
        .then(results => res.status(200)
        .send(results))
    },

    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_product({name, description, price, image_url})
        .then( (result) => res.status(200).send(result))
    },

    update: (req, res) => {
        const db = req.app.get('db')

        db.update_product([req.body.description, req.params.id])
        .then(result => res.status(200)
        .send(result))
    },

    delete: (req, res) => {
        const db = req.app.get('db')

        db.delete_product(req.params.id)
        .then(result => res.status(200)
        .send(result))
    },

}