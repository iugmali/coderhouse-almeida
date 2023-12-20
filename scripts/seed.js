const { initializeApp, cert } = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const {categories, items} = require("./data/DATA");
const {Storage} = require('@google-cloud/storage');
const path = require("node:path");

const firestoreAutoId = () => {
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  for (let i = 0; i < 20; i++) {
    autoId += CHARS.charAt(
      Math.floor(Math.random() * CHARS.length)
    )
  }
  return autoId;
}

const ADMIN_APP_NAME = "coderstore-almeida";

const firebaseCredentials = {
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}

const seedCategories = async (db) => {
  console.log('Criando categorias...')
  try {
    for (const category of categories) {
      const doc = await db.collection('categories').doc(category.id).get();
      if (!doc.exists) {
        await db.collection('categories').doc(category.id).set({key: category.key, name: category.name})
          .then((data) => {
              console.log(`Criada categoria ${category.name} com id ${category.id}.`)
            }
          );
      }
    }
  } catch (e) {
    throw e;
  }
}

const seedItems = async (db) => {
  console.log('Criando items...')
  try {
    for (const item of items) {
      const doc = await db.collection('items').where("title", "==", item.title).get();
      if (doc.empty)  {
        const id = firestoreAutoId();
        await db.collection('items').doc(id).set({
          title: item.title,
          description: item.description,
          price: item.price,
          images: item.images,
          stock: item.stock,
          categoryId: item.categoryId,
        }).then((data) => {
          console.log(`Criado item ${item.title}.`)
        });
        for (const image of item.images) {
          await uploadFile(id, image)
        }
      }
    }
  } catch (e) {
    throw e;
  }
}

const uploadFile = async (itemId, itemImage) => {
  const storage = new Storage({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    credentials: {
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
  });
  const bucket = storage.bucket(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET);
  await bucket.upload(
    path.join(__dirname, 'data', 'images', itemImage),
    {
      destination: `images/items/${itemId}/${itemImage}`,
      metadata: {
        cacheControl: "public, max-age=14400",
        contentType: "image/png"
      }
    });
}


const main = async () => {
  const app = initializeApp({
    credential: cert(firebaseCredentials),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  }, ADMIN_APP_NAME);
  const db = getFirestore(app);
  await seedCategories(db);
  await seedItems(db);
  console.log(`Items e categorias criados. Tudo pronto!`);
}

main().catch((e) => {
  console.error(
    'Erro enquanto populava os dados: ',
    e,
  );
})
