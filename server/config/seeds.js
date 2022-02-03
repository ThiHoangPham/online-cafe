const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Hot Coffee' },
        { name: 'Cold Coffee' },
        { name: 'Drinks' },
        { name: 'Bakery' },
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Babyccino',
            description: 'Perfect for the little one, a warm milk drink, frothed up with steam.',
            image: './assets/hotCoffee/babycino.png',
            category: categories[0]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Cappuccino',
            description: 'Espresso, full cream milk, a generous layer of froth and chocolate powder.',
            image: './assets/hotCoffee/cappuccino.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'English Breakfast Tea',
            description: 'Kick start your day with an English Breakfast tea. Milk or no milk? The choice is yours.',
            image: './assets/hotCoffee/english-breakfast-tea.png',
            category: categories[0]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Espresso',
            description: 'A straight shot of coffee, perfect when you need a quick pick-me-up.',
            image: './assets/hotCoffee/espresso.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Flat White',
            description: 'Like this single shot of espresso and steamed full cream milk.',
            image: './assets/hotCoffee/flatwhite.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Hot Chocolate',
            description: 'Lovers of chocolate behold: steamed full cream milk made with chocolate powder.',
            image: './assets/hotCoffee/hot-chocolate.png',
            category: categories[0]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Latté',
            description: 'A classic mix of espresso, steamed full cream milk and a layer of on top.',
            image: './assets/hotCoffee/latte.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Long Black',
            description: 'If you really need to wake yourself up, try a espresso poured over boiling water.',
            image: './assets/hotCoffee/longblack.png',
            category: categories[0]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Macchiato',
            description: 'A shot of espresso mixed with a dash of milk so you still get a strong coffee taste.',
            image: './assets/hotCoffee/macchiato.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Mocha',
            description: 'A shot of espresso with steamed full cream milk and chocolate powder.',
            image: './assets/hotCoffee/mocha.png',
            category: categories[0]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'White Chocolate Iced Latté',
            description: 'Espresso combined with milk and sugar syrup poured over ice with whipped cream.',
            image: './assets/coldCoffee/chocolate-iced-latte.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Coffee Frappé',
            description: 'A creamy Coffee Frappé, with irresistible whipped cream and indulgent drizzle.',
            image: './assets/coldCoffee/coffee-frappe.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Chocolate',
            description: 'A delicious blend of full cream milk and chocolate syrup, plus whipped cream.',
            image: './assets/coldCoffee/iced-chocolate.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Latté',
            description: 'A shot of smooth espresso combined with milk and sugar syrup poured over ice.',
            image: './assets/coldCoffee/iced-latte.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Long Black',
            description: 'A shot of our smooth espresso with chilled water and ice.',
            image: './assets/coldCoffee/iced-long-black.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        }, {
            name: 'Iced Mocha',
            description: 'A shot of espresso combined with milk and chocolate syrup poured over ice.',
            image: './assets/coldCoffee/iced-mocha.png',
            category: categories[1]._id,
            price: 5.00,
            quantity: 1
        },
        {
            name: 'Mixed Berry Smoothie',
            description: 'Enjoy our refreshing, made from strawberry, raspberry, blueberry.',
            image: './assets/drinks/berries-smoothie.png',
            category: categories[2]._id,
            price: 5.50,
            quantity: 1
        },
        {
            name: 'Classic Coke',
            description: 'There is nothing like it with the famous, thirst-quenching taste.',
            image: './assets/drinks/coke-classic.png',
            category: categories[2]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Fanta',
            description: 'Bright and bubbly, with that great orange taste.',
            image: './assets/drinks/fanta.png',
            category: categories[2]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Sprite',
            description: 'It is refreshing, with a great lemon lime taste.',
            image: './assets/drinks/sprite.png',
            category: categories[2]._id,
            price: 3.50,
            quantity: 1
        },
        {
            name: 'Tropical Smoothie',
            description: 'Made with mango, pineapple and passionfruit plus no added sugar!',
            image: './assets/drinks/tropical-smoothie.png',
            category: categories[2]._id,
            price: 5.50,
            quantity: 1
        },
        {
            name: 'Vanilla Thickshake',
            description: 'Made with creamy, fresh milk, ingredients in a sweet vanilla flavour.',
            image: './assets/drinks/vanilla-shake.png',
            category: categories[2]._id,
            price: 5.50,
            quantity: 1
        },
        {
            name: 'Banana Bread with butter',
            description: 'A thick slice of toasted Banana Bread makes for a special treat any time of day.',
            image: './assets/toastie/banana-bread.png',
            category: categories[3]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Cheesy Toastie',
            description: 'For a simple pleasure come in for our always-tasty Cheese Toastie.',
            image: './assets/toastie/cheese-toastie.png',
            category: categories[3]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Cheese & Tomato Toastie',
            description: 'For a quick bite, we’re doing perfectly toasted toasties, with melted cheese and fresh tomato.',
            image: './assets/toastie/cheese-tomato.png',
            category: categories[3]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Ham & Cheese Toastie',
            description: 'Hot off the press, enjoy this classic - Just like mum makes it.',
            image: './assets/toastie/ham-cheese.png',
            category: categories[3]._id,
            price: 4.50,
            quantity: 1
        },
        {
            name: 'Pineapple-Coconut Bread with Butter',
            description: 'Put a shine on your day with the sweet taste of the tropics.',
            image: './assets/toastie/pineapple-coconut.png',
            category: categories[3]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Raisin Toast with Butter',
            description: 'Succulent raisins and aromatic spices, make this the toast of the town.',
            image: './assets/toastie/raisin.png',
            category: categories[3]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Blueberry Muffin',
            description: 'A baked blueberry muffin with blueberries mixed throughout.',
            image: './assets/bakery/blueberry-muffin.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Chocolate Donut',
            description: 'A donut decorated with chocolate icing and chocolate brown sprinkles.',
            image: './assets/bakery/choc-donut.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        },
        {
            name: 'Chocolate Raspberry Torte',
            description: 'A dense almond based, topped with raspberry crumble and chocolate.',
            image: './assets/bakery/choc-rasp-cheesecake.png',
            category: categories[4]._id,
            price: 4.50,
            quantity: 1
        }, {
            name: 'Chocolate Macaron',
            description: 'No one does macarons like us. One taste and you will see why.',
            image: './assets/bakery/chocolate-macaron.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Mud Muffin',
            description: 'A baked choc muffin with choc chips and choc icing on top.',
            image: './assets/bakery/mud-muffin.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        }, {
            name: 'Salted Caramel Macaron',
            description: 'For a quick flavour burst try this salted caramel treat.',
            image: './assets/bakery/salted-caramel-macaron.png',
            category: categories[4]._id,
            price: 4.00,
            quantity: 1
        },
    ]);

    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Adam',
        lastName: 'Pham',
        email: 'adampham@testmail.com',
        password: 'adam123',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]
            }
        ]
    });

    await User.create({
        firstName: 'Eva',
        lastName: 'Duong',
        email: 'eva@testmail.com',
        password: 'password123'
    });

    console.log('users seeded');

    process.exit();
});