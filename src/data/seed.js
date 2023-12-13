const { initializeApp } = require("firebase/app");
const { terminate, getFirestore, collection, doc, setDoc, addDoc } = require("firebase/firestore");
const {categories, products} = require("./DUMMY_DATA");

const firebaseConfig = {
  apiKey: process.env["FIREBASE_API_KEY"],
  authDomain: process.env["FIREBASE_AUTH_DOMAIN"],
  projectId: process.env["FIREBASE_PROJECT_ID"],
  storageBucket: process.env["FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: process.env["FIREBASE_MESSAGING_SENDER_ID"],
  appId: process.env["FIREBASE_APP_ID"]
};

const seedCategories = async (categoriesRef) => {
  console.log('Criando categorias...')
  try {
    for (const category of categories) {
      await setDoc(doc(categoriesRef, category.id), {key: category.key, name: category.name})
        .then((data) => {
            console.log(`Criada categoria ${category.name} com id ${category.id}.`)
          }
        );
    }
  } catch (e) {
    throw e;
  }
}

const seedItems = async (itemsRef) => {
  console.log('Criando items...')
  try {
    for (const product of products) {
      await addDoc(itemsRef, {
        title: product.title,
        description: product.description,
        price: product.price,
        pictureUrl: product.pictureUrl,
        stock: product.stock,
        categoryId: product.categoryId,
      }).then((data) => {
        console.log(`Criado item ${product.title} com id ${data.id}.`)
      });
    }
  } catch (e) {
    throw e;
  }
}

const main = async () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const categoriesRef = collection(db, "categories");
  const itemsRef = collection(db, "items");
  await seedCategories(categoriesRef);
  await seedItems(itemsRef);
  console.log(`Items e categorias criados. Tudo pronto!`);
  await terminate(db);
}

main().catch((e) => {
  console.error(
    'Erro enquanto populava os dados: ',
    e,
  );
})
