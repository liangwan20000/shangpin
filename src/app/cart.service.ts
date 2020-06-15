import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    constructor(
        private http: HttpClient
    ) {}
    // 存储当前商品的数组
    items = [];
    // 添加商品
    addToCart(product) {
        this.items.push(product);
    }
    // 返回购物车商品
    getItems() {
        return this.items;
    }
    // 清除购物车商品
    clearCart() {
        this.items = [];
        return this.items;
    }
    getShippingPrices() {
        return this.http.get('/assets/shipping.json');
    }
}
