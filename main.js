class ProductManager {

    constructor() {
        this.products = []; //Array vacio de productos
        this.prodId = 1; //Para generar el ID autoincremental
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        if (
            title === undefined || title === null ||
            description === undefined || description === null ||
            price === undefined || price === null ||
            thumbnail === undefined || thumbnail === null ||
            code === undefined || code === null ||
            stock === undefined || stock === null
        ) {
            console.log("Todos los parametros son obligatorios"); //Todos los campos deben venir cargados
            return false;
        } else {

            let existCode = this.products.find(product => product.code === code);

            if (existCode) {
                console.log('El CODE ya existe en el array de productos');
                return null;

            } else {

                let product = {
                    id: this.prodId,
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    code: code,
                    stock: stock
                };

                this.products.push(product);
                this.prodId++;

            }
        }

    }

    getProducts() {
        console.log(this.products);
    }

    getProductById(id) {

        let product = this.products.find(product => product.id === id);

        if (product) {

            console.log(product);

        } else {

            console.log('Not found');
            return null;

        }

    }
}


//Tests de primer entrega

let prodManager = new ProductManager();

prodManager.getProducts();// Devuelvo vacio

prodManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

prodManager.getProducts(); // Devuelve 1 producto

prodManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc321', 25);

prodManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25); //Da erro de que CODe ya existe

prodManager.getProducts(); // Devuelve 2 productos

prodManager.getProductById(1); //Devuelve el producto de ID 1