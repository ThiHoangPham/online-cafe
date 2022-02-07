const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Drinks' },
        { name: 'Cold Drinks' }
        //     { name: 'Drinks' },
        //     { name: 'Bakery' },
    ]);

    console.log('categories seeded');

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
        {
            name: 'Babyccino',
            description: 'Perfect for the little one, a warm milk drink, frothed up with steam.',
            image: './images/babycino.png',
            category: categories[0]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Cappuccino',
            description: 'Espresso, full cream milk, a generous layer of froth and chocolate powder.',
            image: './images/cappuccino.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'English Breakfast Tea',
            description: 'Kick start your day with an English Breakfast tea. Milk or no milk?',
            image: './images/english-breakfast-tea.png',
            category: categories[0]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Espresso',
            description: 'A straight shot of coffee, perfect when you need a quick pick-me-up.',
            image: './images/espresso.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Flat White',
            description: 'Like this single shot of espresso and steamed full cream milk.',
            image: './images/flatwhite.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Hot Chocolate',
            description: 'Lovers of chocolate: steamed cream milk made with chocolate powder.',
            image: './images/hot-chocolate.png',
            category: categories[0]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Latté',
            description: 'A classic mix of espresso, steamed full cream milk and a layer of on top.',
            image: './images/latte.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Long Black',
            description: 'Really need to wake yourself up? try a espresso poured over boiling water.',
            image: './images/longblack.png',
            category: categories[0]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Macchiato',
            description: 'A shot of espresso with a dash of milk so you get a strong coffee taste.',
            image: './images/macchiato.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Mocha',
            description: 'A shot of espresso with steamed full cream milk and chocolate powder.',
            image: './images/mocha.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'White Chocolate Iced Latté',
            description: 'Espresso combined with milk and sugar poured over ice with cream.',
            image: './images/chocolate-iced-latte.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Coffee Frappé',
            description: 'A Coffee Frappé, with irresistible cream and indulgent drizzle.',
            image: './images/coffee-frappe.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Chocolate',
            description: 'A delicious blend of cream milk and chocolate syrup, plus cream.',
            image: './images/iced-chocolate.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Latté',
            description: 'A shot of espresso combined with milk and sugar poured over ice.',
            image: './images/iced-latte.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Long Black',
            description: 'A shot of our smooth espresso with chilled water and ice.',
            image: './images/iced-long-black.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Mocha',
            description: 'A shot of espresso combined with milk and chocolate syrup poured over ice.',
            image: './images/iced-mocha.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        },
    ]);

    console.log('drinks seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345',
        orders: [
            {
                drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});