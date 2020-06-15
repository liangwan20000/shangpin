import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../productor';
import { CartService } from '../cart.service';


@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.less']
})

export class ProductDetailsComponent implements OnInit {

    product;
    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            window.console.log(params)
            this.product = products[params.get('productId')];
        });
    }

    addToCart(product) {
        window.console.log(product);
        this.cartService.addToCart(product);
        window.alert('你添加了一条数据到购物车')
    }
}
