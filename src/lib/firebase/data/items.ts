import 'server-only'

import {TCategory, TItem} from "@/types/item";
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

export const fetchItem = async (itemId: string): Promise<TItem|null> => {
  noStore();
  const item = await db.collection('items').doc(itemId).get();
  if (item.exists) {
    return {...item.data() as TItem, id: item.id}
  } else {
    return null;
  }
}

export const fetchItemImageURLFromStorage = async (itemId: string, imageFile: string) => {
  noStore();
  return await getDownloadURL(storage.bucket().file(`images/items/${itemId}/${imageFile}`));
}

export const fetchItems = async (categoryId?: string): Promise<TItem[]> => {
  noStore();
  if (categoryId) {
    const items = await db.collection('items').where("categoryId", "==", categoryId).get();
    if (items.empty) return [];
    return items.docs.map(doc => ({...doc.data() as TItem, id: doc.id}));
  }
  const items = await db.collection('items').get();
  if (items.empty) return [];
  return items.docs.map(doc => ({...doc.data() as TItem, id: doc.id}));
}
