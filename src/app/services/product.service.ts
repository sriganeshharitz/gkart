import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import ThenableReference = firebase.database.ThenableReference;

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product): ThenableReference {
    return this.db.list('/products').push(product);
  }
  getProducts() {
    return this.db.list('/products').valueChanges();
  }
}
