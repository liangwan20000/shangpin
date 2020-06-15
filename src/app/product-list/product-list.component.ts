import { Component, OnInit } from '@angular/core';
import { products } from '../productor';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}
  ngOnInit() {}
  share() {
    window.alert('你好');
  }
  onNotify(event) {
    window.console.log('123456', event);
  }
}
