import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../model/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit
{
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private productsService: ProductsService, private router: Router)
  {
    this.createForm();
  }

  ngOnInit(): void
  {
  }

  createForm()
  {
    this.form = this.formBuilder.group(
      {
        ProductName: ['', Validators.required ],
        ProductDescription: ['', Validators.required ],
        ProductPrice: ['', Validators.required ],
      }
    );
  }

  isFormControlInvalid = (name: string) => this.form.controls[name].invalid && (this.form.controls[name].dirty || this.form.controls[name].touched);

  isFormControlRequired = (name: string) => this.form.controls[name].errors?['required'] : false;

  add(name: string, description: string, price: string)
  {
    const product = new Product(name, description, parseInt(price));
    this.productsService.add(product).subscribe(() => this.router.navigate(['products']));
  }
}
