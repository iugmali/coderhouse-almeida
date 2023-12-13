import {Category, ItemType} from "@/types/item";
import {collection, getDoc, getDocs, query, where} from "@firebase/firestore";
import {db} from "@/lib/firebase";
import {doc} from "firebase/firestore";

export const getCategory = async (categoryId: string): Promise<Category|null> => {
  const docRef = doc(db, "categories", categoryId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {...docSnap.data() as Category, id: docSnap.id}
  } else {
    return null;
  }
}

export const getCategories = async (): Promise<Category[]> => {
  const categoriesSnapshot = await getDocs(collection(db, "categories"));
  let categories: Category[] = [];
  categoriesSnapshot.forEach((doc) => {
    categories.push({...doc.data() as Category, id: doc.id})
  });
  return categories;
}


export const getProduct = async (itemId: string): Promise<ItemType|null> => {
  const docRef = doc(db, "items", itemId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return {...docSnap.data() as ItemType, id: docSnap.id}
  } else {
    return null;
  }
}

export const getProducts = async (categoryKey: string): Promise<ItemType[]> => {
  if (categoryKey === 'all') {
    const productsSnapshot = await getDocs(collection(db, "items"));
    let products: ItemType[] = [];
    productsSnapshot.forEach((doc) => {
      products.push({...doc.data() as ItemType, id: doc.id})
    });
    return products;
  } else {
    const category = await getCategory(categoryKey);
    if (category) {
      const q = query(collection(db, "items"), where("categoryId", "==", category.id));
      let filteredProducts: ItemType[] = [];
      const productsSnapshot = await getDocs(q);
      productsSnapshot.forEach((doc) => {
        filteredProducts.push({...doc.data() as ItemType, id: doc.id})
      });
      return filteredProducts;
    } else {
      return [];
    }
  }
}
