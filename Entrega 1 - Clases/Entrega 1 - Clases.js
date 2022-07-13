class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    static Mascotas = [];
    static Libros = [];
    
    getFullName(){
        return `El nombre del usuario es ${this.nombre} ${this.apellido}`
    }

    addMascota(newPet){
        Usuario.Mascotas.push(newPet);
    }

    countMascotas(){
        return Usuario.Mascotas.length;
    }

    addBook(newBook,author){
        Usuario.Libros.push(newBook + ", " + author);
    }

    getBookNames(){
        if (Usuario.Libros[1] != null)
            return `Sus libros favoritos son ${Usuario.Libros}`;
        else
            return `Su libro favorito es ${Usuario.Libros}`;
    }
}

const usuario1 = new Usuario('Pepe', 'Perez')

console.log(usuario1.getFullName());
console.log(usuario1.addBook('El principito', 'Antoine de Saint-Exupéry'));
console.log(usuario1.addBook('El código Da Vinci', 'Dan Brown'));
console.log(usuario1.getBookNames());
console.log(usuario1.addMascota('Perro'));
console.log(usuario1.addMascota('Gato'));
console.log(Usuario.Mascotas);
console.log(usuario1.countMascotas());