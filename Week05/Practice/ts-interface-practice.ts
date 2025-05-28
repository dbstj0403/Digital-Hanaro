// 인터페이스 이용해서 타입 만들기

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product: Product = {
  brand: "Apple",
  serialNumber: 12345,
  model: ["tablet, phone"],
};

// array 안 여러 object들을 위한 타입 지정하기

type CartList = {
  product: string;
  price: number;
};

let cartList: CartList[] = [
  { product: "청소기", price: 120000 },
  { product: "애플워치", price: 450000 },
];

// 일부 상품은 결제기능(payment) 속성이 추가되어야 함. extends 사용해서 타입 만들어 보기

type Payment = CartList & {
  payment: boolean;
};

let p: Payment = { product: "애플워치", price: 450000, payment: true };
