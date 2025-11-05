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
    },
    {
        "title": "Smart Watch",
        "category": "Electronics",
        "price": 149.99,
        "image": "https://picsum.photos/400/300",
        "_id": "7"
    },
    {
        "title": "Backpack",
        "category": "Outdoors",
        "price": 49.99,
        "image": "https://picsum.photos/400/300",
        "_id": "8"
    },
    {
        "title": "Coffee Maker",
        "category": "Home",
        "price": 79.99,
        "image": "https://picsum.photos/seed/cohort61-coffeemaker/400/300",
        "_id": "9"
    },
    {
        "title": "Yoga Mat",
        "category": "Fitness",
        "price": 24.99,
        "image": "https://picsum.photos/seed/cohort61-yogamat/400/300",
        "_id": "10"
    },
    {
        "title": "Sunglasses",
        "category": "Accessories",
        "price": 39.99,
        "image": "https://picsum.photos/seed/cohort61-sunglasses/400/300",
        "_id": "11"
    },
    {
        "title": "Bluetooth Speaker",
        "category": "Electronics",
        "price": 89.99,
        "image": "https://picsum.photos/seed/cohort61-speaker/400/300",
        "_id": "12"
    },
    {
        "title": "Water Bottle",
        "category": "Outdoors",
        "price": 14.99,
        "image": "https://picsum.photos/seed/cohort61-bottle/400/300",
        "_id": "13"
    },
    {
        "title": "Laptop Stand",
        "category": "Office",
        "price": 34.99,
        "image": "https://picsum.photos/seed/cohort61-stand/400/300",
        "_id": "14"
    },
    {
        "title": "Gaming Mouse",
        "category": "Electronics",
        "price": 59.99,
        "image": "https://picsum.photos/seed/cohort61-mouse/400/300",
        "_id": "15"
    },
    {
        "title": "Portable Charger",
        "category": "Electronics",
        "price": 29.99,
        "image": "https://picsum.photos/seed/cohort61-charger/400/300",
        "_id": "16"
    },
    {
        "title": "Desk Lamp",
        "category": "Home",
        "price": 22.99,
        "image": "https://picsum.photos/seed/cohort61-lamp/400/300",
        "_id": "17"
    },
    {
        "title": "Notebook",
        "category": "Office",
        "price": 7.99,
        "image": "https://picsum.photos/seed/cohort61-notebook/400/300",
        "_id": "18"
    },
    {
        "title": "Plant Pot",
        "category": "Home",
        "price": 12.99,
        "image": "https://picsum.photos/seed/cohort61-plant/400/300",
        "_id": "19"
    },
    {
        "title": "Action Camera",
        "category": "Electronics",
        "price": 199.99,
        "image": "https://picsum.photos/seed/cohort61-actioncam/400/300",
        "_id": "20"
    },
    {
        "title": "Running Shoes",
        "category": "Clothing",
        "price": 89.99,
        "image": "https://picsum.photos/seed/cohort61-runningshoes/400/300",
        "_id": "21"
    },
    {
        "title": "Hoodie",
        "category": "Clothing",
        "price": 49.99,
        "image": "https://picsum.photos/seed/cohort61-hoodie/400/300",
        "_id": "22"
    },
    {
        "title": "Cat Toy",
        "category": "Pets",
        "price": 8.99,
        "image": "https://picsum.photos/seed/cohort61-cattoy/400/300",
        "_id": "23"
    },
    {
        "title": "Drone",
        "category": "Electronics",
        "price": 299.99,
        "image": "https://picsum.photos/seed/cohort61-drone/400/300",
        "_id": "24"
    }
]

class DataService {
    getProducts() {
        return catalog;
    }
}

export default DataService;
