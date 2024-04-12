import {useEffect, useState} from "react";
import {useCartStore} from "@/store/cart.store";

export const useCartStoreHydrate = () => {
  const [hasHydrated, setHasHydrated] = useState(false);
  useEffect(() => {
    useCartStore.persist.rehydrate();
    setHasHydrated(true);
  }, []);
  return hasHydrated;
}
