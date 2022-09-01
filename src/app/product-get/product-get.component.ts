import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit
{
  products!: Product[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void
  {
    this.productsService.list().subscribe(products => this.products = products);
  }

  delete(product: Product)
  {
    this.productsService.delete(product.id).subscribe(() => this.products.splice(this.products.indexOf(product), 1));
  }
}
