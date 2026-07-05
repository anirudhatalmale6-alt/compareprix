export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  unit: string;
  image: string;
  ean: string;
}

export interface StoreChain {
  id: string;
  name: string;
  logo: string;
  color: string;
}

export interface Store {
  id: string;
  chainId: string;
  name: string;
  address: string;
  postalCode: string;
  lat: number;
  lng: number;
}

export interface ProductPrice {
  productId: string;
  chainId: string;
  price: number;
  pricePerUnit?: string;
  available: boolean;
}

export interface ShoppingListItem {
  product: Product;
  quantity: number;
}

export interface StoreComparison {
  store: Store;
  chain: StoreChain;
  items: {
    product: Product;
    quantity: number;
    price: number | null;
    available: boolean;
  }[];
  total: number;
  availableCount: number;
  missingCount: number;
}
