const mongoose = require('mongoose');
const cities = require('./cities')
const { places, descriptors } = require('./seedHelpers')
const Campground = require('../models/campground');




main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://abood:abood@cluster0.kgyc2mx.mongodb.net/?retryWrites=true&w=majority');
    console.log("database is connected!!!")
}

const sample = array => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            //YOUR USER ID
            author: '63c86c2b0f1a0d1fa82950da',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/di0a0utla/image/upload/v1673015997/Yelpcamp/wmtontgnpasdvgrgdoyw.png',
                    filename: 'YelpCamp/wmtontgnpasdvgrgdoyw'
                },
                {
                    url: 'https://res.cloudinary.com/di0a0utla/image/upload/v1673015995/Yelpcamp/ranemuyhxnwbidvyhzd9.png',
                    filename: 'YelpCamp/ranemuyhxnwbidvyhzd9'
                }
            ]
        })
        await camp.save();
    }
}
seedDB().then(() => {
    mongoose.connection.close();
})
// module.exports = { seedDB }