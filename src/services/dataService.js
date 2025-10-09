const catalog = [
    {
        "title": "Dog Sweater",
        "category": "Pets",
        "price": 29.99,
        "image": "dogSweatersCOHORT61.png",
        "_id": "1"
    },
    {
        "title": "Headphones",
        "category": "Electronics",
        "price": 59.99,
        "image": "headphonesCOHORT61.png",
        "_id": "2"
    },
    {
        "title": "Kitchen Tools",
        "category": "Home",
        "price": 19.99,
        "image": "kitchenUtensilsCOHORT61.png",
        "_id": "3"
    },
    {
        "title": "Pocket Protector",
        "category": "Clothing",
        "price": 9.99,
        "image": "pocketProtectorsCOHORT61.png",
        "_id": "4"
    },
    {
        "title": "Shoes",
        "category": "Clothing",
        "price": 129.99,
        "image": "shoesCOHORT61.png",
        "_id": "5"
    },
    {
        "title": "T Shirt",
        "category": "Clothing",
        "price": 19.99,
        "image": "tshirtsCOHORT61.png",
        "_id": "6"
    }
]

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;