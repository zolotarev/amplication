import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput;
  discount?: number | null;
  product?: ProductWhereUniqueInput;
  quantity?: number;
  totalPrice?: number | null;
};
