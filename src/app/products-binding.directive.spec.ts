import { ProductsBindingDirective } from './products-binding.directive';
import { ProductsService } from './northwind.service';
import {  GridComponent } from '@progress/kendo-angular-grid';

describe('ProductsBindingDirective', () => {
  let products: ProductsService, grid: GridComponent

  it('should create an instance', () => {
    const directive = new ProductsBindingDirective(products,grid);
    expect(directive).toBeTruthy();
  });
});
