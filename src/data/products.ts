import {Product} from "@/types/product";

const products: Product[] = [
  {
    id: '1',
    title: 'Smartphone',
    description: 'Experience the power of connectivity with our latest smartphone. This device boasts a high-resolution screen, seamless performance, and a versatile camera for capturing life’s moments. Its sleek design and long-lasting battery make it your perfect companion for work or play.',
    price: 599.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 100,
  },
  {
    id: '2',
    title: 'Laptop',
    description: 'Get ready to elevate your productivity with our advanced laptop. Featuring lightning-fast processing, ample storage, and a stunning display, this laptop is designed for performance. Its sleek, portable design ensures you can take your work or entertainment anywhere.',
    price: 1299.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg',
    stock: 50,
  },
  {
    id: '3',
    title: 'Headphones',
    description: 'Immerse yourself in pure sound with these noise-canceling headphones. Designed for comfort and high fidelity, these headphones deliver an exceptional audio experience. Whether you’re commuting or relaxing at home, enjoy your favorite music with crisp clarity and deep bass.',
    price: 199.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 75,
  },
  {
    id: '4',
    title: 'Smartwatch',
    description: 'Stay connected and organized with our feature-rich smartwatch. This stylish accessory offers fitness tracking, notifications, and customizable faces. Its durable build and long battery life make it suitable for your active lifestyle, keeping you in touch and in control wherever you go.',
    price: 299.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Giant_rubber_duck_at_the_Toronto_Waterfront.jpg/800px-Giant_rubber_duck_at_the_Toronto_Waterfront.jpg',
    stock: 40,
  },
  {
    id: '5',
    title: 'Camera',
    description: 'Capture life’s moments in stunning detail with our high-quality digital camera. From scenic landscapes to close-up portraits, this camera delivers professional-grade photos and videos. Its intuitive controls and versatility make it a perfect choice for both enthusiasts and professionals.',
    price: 799.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg',
    stock: 25,
  },
  {
    id: '6',
    title: 'Gaming Console',
    description: 'Experience gaming like never before with our powerful gaming console. Unleash the latest titles in stunning graphics and seamless performance. With its ergonomic controllers and immersive experience, dive into a world of entertainment and challenge your gaming skills.',
    price: 499.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 60,
  },
  {
    id: '7',
    title: 'Wireless Speakers',
    description: 'Elevate your audio experience with our premium wireless speakers. Immerse yourself in rich, crystal-clear sound throughout your home. With easy connectivity and sleek design, these speakers blend seamlessly into your space while delivering exceptional sound quality.',
    price: 349.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/330px-Rubber_Duck_%288374802487%29.jpg',
    stock: 30,
  },
  {
    id: '8',
    title: 'Tablet',
    description: 'Experience versatility with our portable and powerful tablet. Whether for work or entertainment, this device offers a high-resolution display, seamless performance, and long battery life. Its lightweight design ensures easy handling while providing a range of functionalities.',
    price: 449.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg',
    stock: 55,
  },
  {
    id: '9',
    title: 'External Hard Drive',
    description: 'Expand your storage capabilities with our reliable external hard drive. Back up and store all your important files, photos, and videos with ease. Its high-speed connectivity ensures quick and secure data transfer for your peace of mind.',
    price: 129.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Giant_rubber_duck_at_the_Toronto_Waterfront.jpg/800px-Giant_rubber_duck_at_the_Toronto_Waterfront.jpg',
    stock: 80,
  },
  {
    id: '10',
    title: 'Fitness Tracker',
    description: 'Track your fitness goals and stay motivated with our advanced fitness tracker. Monitor your workouts, heart rate, and sleep patterns to optimize your health. Its sleek design and intuitive interface make fitness tracking a seamless part of your lifestyle.',
    price: 149.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 70,
  },
  {
    id: '11',
    title: 'Wireless Mouse',
    description: 'Enhance your productivity with our ergonomic wireless mouse. Its precise tracking and comfortable design ensure smooth usage during work or gaming sessions. Enjoy the freedom of wireless connectivity and responsive controls for an improved computing experience.',
    price: 49.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/330px-Rubber_Duck_%288374802487%29.jpg',
    stock: 90,
  },
  {
    id: '12',
    title: 'Bluetooth Earbuds',
    description: 'Immerse yourself in high-quality sound with our Bluetooth earbuds. Designed for comfort and performance, these earbuds deliver rich audio and seamless connectivity. Whether you’re on a run or relaxing, enjoy your favorite music with clear, crisp tones.',
    price: 79.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg',
    stock: 65,
  },
  {
    id: '13',
    title: 'Portable Charger',
    description: 'Stay powered up on the go with our portable and fast charger. Compatible with various devices, this charger ensures you never run out of battery. Its compact design and rapid charging capabilities make it an essential accessory for your busy lifestyle.',
    price: 39.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Giant_rubber_duck_at_the_Toronto_Waterfront.jpg/800px-Giant_rubber_duck_at_the_Toronto_Waterfront.jpg',
    stock: 85,
  },
  {
    id: '14',
    title: 'Gaming Keyboard',
    description: 'Dominate your gaming experience with our mechanical gaming keyboard. With customizable RGB lighting and tactile keys, this keyboard offers precise control and responsiveness. Its durable build and ergonomic design ensure comfort and durability during intense gaming sessions.',
    price: 129.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 45,
  },
  {
    id: '15',
    title: '4K TV',
    description: 'Transform your entertainment with our stunning 4K television. Immerse yourself in lifelike visuals and vibrant colors. With smart features and seamless connectivity, this TV brings a cinematic experience to your living room for an unparalleled viewing pleasure.',
    price: 899.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/330px-Rubber_Duck_%288374802487%29.jpg',
    stock: 20,
  },
  {
    id: '16',
    title: 'Printers',
    description: 'Achieve professional printing quality with our high-quality printers. Whether for home or office use, these printers offer crisp, detailed prints. With versatile functionalities and user-friendly interfaces, they ensure efficiency and reliability in all your printing tasks.',
    price: 299.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rubber_duck_assisting_with_debugging.jpg',
    stock: 35,
  },
  {
    id: '17',
    title: 'Wireless Router',
    description: 'Experience seamless connectivity with our fast and reliable wireless router. Say goodbye to dead zones and lag with its powerful signal and speed. Whether for work or entertainment, enjoy smooth internet access throughout your home or office.',
    price: 79.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rubber_Duck_in_Parramatta_Park.jpg/1024px-Rubber_Duck_in_Parramatta_Park.jpg',
    stock: 60,
  },
  {
    id: '18',
    title: 'Electric Toothbrush',
    description: 'Upgrade your dental care with our advanced electric toothbrush. Designed for effective cleaning, this toothbrush offers superior plaque removal and gum care. Its smart features and ergonomic design ensure thorough cleaning for a healthier smile.',
    price: 69.99,
    pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Giant_rubber_duck_at_the_Toronto_Waterfront.jpg/800px-Giant_rubber_duck_at_the_Toronto_Waterfront.jpg',
    stock: 75,
  },
];

export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000)
  });
}

export const getProduct = (productId: string): Promise<Product> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id == productId);
      if (product) {
        resolve(product)
      } else {
        reject('Não existe')
      }
    }, 2000)
  });
}
