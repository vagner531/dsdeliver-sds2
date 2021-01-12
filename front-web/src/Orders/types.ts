export type Product = {
  id: number,
  name: string,
  price: number,
  description: number,
  imageUri: string;
}

export type OrderlocationData = {
  address: string,
  latitude: number,
  longitude: number,
}

type ProductId = {
  id: number
}
export type OrderPayload = {
  products: ProductId[];

} & OrderlocationData;

