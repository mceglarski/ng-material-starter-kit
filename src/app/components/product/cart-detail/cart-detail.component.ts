import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartModel } from '../../../models/cart.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
})
export class CartDetailComponent {
  public cartDetails$: Observable<CartModel> = this._activatedRoute.params.pipe(
    switchMap((data) => this._cartService.getCartDetails(data['id']))
  );

  constructor(
    private _cartService: CartService,
    private _activatedRoute: ActivatedRoute
  ) {}
}
