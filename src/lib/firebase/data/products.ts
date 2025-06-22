import 'server-only'

import {TCategory, TProduct} from "@/types/product";
import {db, storage} from "@/lib/firebase/config";
import {getDownloadURL} from "firebase-admin/storage";
import {unstable_noStore as noStore} from "next/cache";

export const fetchCategory = async (categoryId: string): Promise<TCategory|null> => {
  noStore();
  const category = await db.collection('categories').doc(categoryId).get();
  if (category.exists) {
    return {...category.data() as TCategory, id: category.id}
  } else {
    return null;
  }
}

export const fetchCategories = async (): Promise<TCategory[]> => {
  noStore();
  const categories = await db.collection('categories').get();
  if (categories.empty) return []
  return categories.docs.map(doc => ({...doc.data() as TCategory, id: doc.id}));
}

export const fetchProduct = async (itemId: string): Promise<TProduct|null> => {
  noStore();
  const item = await db.collection('products').doc(itemId).get();
  if (item.exists) {
    return {...item.data() as TProduct, id: item.id}
  } else {
    return null;
  }
}

export const fetchProductImageURLFromStorage = async (itemId: string, imageFile: string) => {
  noStore();
  return await getDownloadURL(storage.bucket().file(`images/products/${itemId}/${imageFile}`));
}

export const fetchProducts = async (categoryId?: string): Promise<TProduct[]> => {
  noStore();
  if (categoryId) {
    const items = await db.collection('products').where("categoryId", "==", categoryId).get();
    if (items.empty) return [];
    return items.docs.map(doc => ({...doc.data() as TProduct, id: doc.id}));
  }
  const items = await db.collection('products').get();
  if (items.empty) return [];
  return items.docs.map(doc => ({...doc.data() as TProduct, id: doc.id}));
}
