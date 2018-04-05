import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Observable} from 'rxjs/Observable';
import {SnapshotAction} from 'angularfire2/database';
import {ProductService} from '../../../services/product.service';
import {Router, Routes} from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$: Observable<SnapshotAction[]>;
  constructor(
    categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
  }
  save(product) {
    this.productService.create(product).then(
      value => {
        this.router.navigateByUrl('/admin/products');
      }
    );
  }
}
