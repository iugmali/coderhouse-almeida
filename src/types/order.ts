import {TUser} from "@/types/user";
import {TCartItem} from "@/types/cart";

export type TOrder = {
  id: string;
  buyer: Pick<TUser, "name" | "phone" | "email">;
  items: TCartItem[];
  date: Date;
  total: number;
}
