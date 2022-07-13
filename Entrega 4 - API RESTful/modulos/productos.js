const express = require('express');
const { Router } = express;

const router = Router();

const listaProductos = []

router.get('/', (req, res) => {
    res.send(listaProductos)
});

router.post('/', (req, res) => {
    const product = req.body;
    listaProductos.push({ID:listaProductos.length+1, product});
    res.status(201).send(`Producto con ID:${listaProductos.length} agregado con exito.`)
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    if(isNaN(id)){
        res.status(400).send({error: 'Los ID son exclusivamente numericos'});
        return
    }
    if(id > listaProductos.length){
        res.status(400).send({error: 'Producto no encontrado'});
        return
    }
    res.status(200).send({producto: listaProductos[id - 1]});
});

router.put('/:changeProduct', (req, res) => {
    // cambia un producto por id
    const {changeProduct} = req.params;
    if(isNaN(changeProduct)){
        res.status(400).send({error: 'Los ID son exclusivamente numericos'});
        return
    }
    if(changeProduct > listaProductos.length){
        res.status(400).send({error: 'El parámetro está fuera de rango'});
        return
    }
    const update = req.body;
    listaProductos[changeProduct-1] = (update);
    res.json({
        result: 'ok',
        id: req.params.id,
        nuevo: req.body
    });
});

router.delete('/:deleteProduct', (req, res) => {
    const {deleteProduct} = req.params;
    if(isNaN(deleteProduct)){
        res.status(400).send({error: 'Los ID son exclusivamente numericos'});
        return
    }
    if(deleteProduct > listaProductos.length){
        res.status(400).send({error: 'Producto no encontrado'});
        return
    }
    if(deleteProduct == 1){
        listaProductos.shift();
        res.status(201).send(`Producto con ID:${deleteProduct} borrado con exito.`);
        return
    }
    listaProductos.splice((deleteProduct-1),(deleteProduct-1));
    res.status(201).send(`Producto con ID:${deleteProduct} borrado con exito.`);
});

module.exports = router;