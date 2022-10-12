const faker = require('faker');

export class productModel {
    constructor() {

    }

    createProduct() {
        return {
            id: faker.datatype.uuid(),
            title: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.business()
        }
    }

}
