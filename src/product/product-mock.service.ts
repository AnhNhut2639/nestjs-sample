/* eslint-disable prettier/prettier */
export class ProductMockService {
  private mockproducts = [
    { id: 0, name: 'Mock data', from: 'VN' },
    { id: 1, name: 'Mockdata 2', from: 'GER' },
  ];
  getProducts() {
    return this.mockproducts;
  }
}
