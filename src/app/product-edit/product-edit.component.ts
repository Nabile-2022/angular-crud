import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit
{
  form!: FormGroup;
  product!: Product;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private productsService: ProductsService)
  {
    this.createForm();
  }

  ngOnInit(): void
  {
    this.route.params.subscribe(params => this.productsService.get(params['id']).subscribe(product => this.product = product));
  }

  createForm()
  {
    this.form = this.formBuilder.group(
      {
        ProductName: ['', Validators.required],
        ProductDescription: ['', Validators.required],
        ProductPrice: ['', Validators.required],
      }
    );
  }

  updateProduct(name: string, description: string, price: string)
  {
    this.product.ProductName = name;
    this.product.ProductDescription = description;
    this.product.ProductPrice = parseInt(price);

    this.productsService.edit(this.product).subscribe(p => this.router.navigate(['products']));
  }
}
