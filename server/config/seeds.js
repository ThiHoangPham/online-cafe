const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Coffee' },
        { name: 'Cold Coffee' },
        { name: 'Drinks' },
        { name: 'Bakery' },
    ]);

    console.log('categories seeded');

    await Drink.deleteMany();

    const drinks = await Drink.insertMany([
        {
            name: 'Banana Bread with butter',
            description: 'A thick slice of toasted Banana Bread makes for a special treat any time of day.',
            image: './assets/toastie/banana-bread.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Cheesy Toastie',
            description: 'For a simple pleasure come in for our always-tasty Cheese Toastie.',
            image: './assets/toastie/cheese-toastie.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Cheese & Tomato Toastie',
            description: 'For a quick bite, we’re doing perfectly toasted toasties, with melted cheese and fresh tomato.',
            image: './assets/toastie/cheese-tomato.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Ham & Cheese Toastie',
            description: 'Hot off the press, enjoy this classic - Just like mum makes it.',
            image: './assets/toastie/ham-cheese.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Pineapple-Coconut Bread with Butter',
            description: 'Put a shine on your day with the sweet taste of the tropics.',
            image: './assets/toastie/pineapple-coconut.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Babyccino',
            description: 'Perfect for the little one, a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Cappuccino',
            description: 'Espresso, full cream milk, a generous layer of froth and chocolate powder.',
            image: './assets/hotCoffee/cappuccino.png',
            category: categories[1]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'English Breakfast Tea',
            description: 'Kick start your day with an English Breakfast tea. Milk or no milk? The choice is yours.',
            image: './assets/hotCoffee/english-breakfast-tea.png',
            category: categories[1]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Espresso',
            description: 'A straight shot of coffee, perfect when you need a quick pick-me-up.',
            image: './assets/hotCoffee/espresso.png',
            category: categories[1]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Flat White',
            description: 'Some things are just better together, like this single shot of espresso and steamed full cream milk.',
            image: './assets/hotCoffee/flatwhite.png',
            category: categories[1]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Babyccino',
            description: 'Perfect for the little one, this is a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        }, {
            name: 'Babyccino',
            description: 'Perfect for the little one, this is a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        }, {
            name: 'Babyccino',
            description: 'Perfect for the little one, this is a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        }, {
            name: 'Babyccino',
            description: 'Perfect for the little one, this is a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        }, {
            name: 'Babyccino',
            description: 'Perfect for the little one, this is a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[1]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        },
    ]);

    console.log('products seeded');
});