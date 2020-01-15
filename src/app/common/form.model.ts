export interface User {
  id?: string;
  email: string;
  password: string;
  confirm: string;
  address: Address;
}

export interface Address {
  // 省
  province: string;
  // 市
  city: string;
  // 区
  area: string;
  // 街道
  street: string;
}
