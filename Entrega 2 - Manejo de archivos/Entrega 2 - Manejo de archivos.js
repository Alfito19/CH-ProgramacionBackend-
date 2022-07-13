const fs = require('fs');

class Contenedor{
    constructor(archivo){
        this.archivo = archivo;
    }
    static productsList = [];
    
    save(title,price){
        Contenedor.productsList.push({'ID': Contenedor.productsList.length + 1, 'Title': title, 'Price': price})
        fs.writeFileSync('./productos.txt',JSON.stringify(Contenedor.productsList) ,error =>{
            if (error) {
                console.log('Se ha producido un error al guardar el producto')
            } else {
                console.log('Guardado con exito!')
            }
        })
        return Contenedor.productsList.length + 1;
    }

    getById(number){
        if (number-1 <= Contenedor.productsList.length){
            console.log(`Id: ${number} -`,Contenedor.productsList[number-1])
        } else {
            console.log('Id: Null');
        }
    }

    getAll(){
        for (let i = 1; i <= Contenedor.productsList.length;i++){
            console.log(Contenedor.productsList[i-1])
        }
    }

    deleteById(number){
        if (number-1 <= Contenedor.productsList.length){
            Contenedor.productsList.splice(number-1,number -1);
            fs.writeFileSync('./productos.txt',JSON.stringify(Contenedor.productsList) ,error =>{
            if (error) {
                console.log('Se ha producido un error al borrar el producto')
            } else {
                console.log(`Producto ${number} borrado con exito!`)
            }
            })
        } else{
            console.log('No hay producto para borrar.')
        }
    }

    deleteAll(){
        fs.unlink('./productos.txt',(error =>{
            if(error){
                console.log('Se ha producido un error')
            } else {
                while (Contenedor.productsList.length > 0){
                    Contenedor.productsList.pop();
                }
                console.log('Se ha borrado el archivo con exito')
                console.log(Contenedor.productsList)
            }
        }))
    }
}

const productos = new Contenedor('Productos.txt');
console.log(productos.save('Licuadora',3));
console.log(productos.save('Teclado',124));
console.log(productos.save('Celular',34));
console.log(productos.getById(2));
console.log(productos.getById(5));
console.log(productos.deleteById(1));
// console.log(productos.deleteAll());
console.log(Contenedor.productsList);
console.log(productos.getAll());