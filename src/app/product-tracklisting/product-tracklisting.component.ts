import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklistin',
  templateUrl: './product-tracklistin.component.html',
  styleUrls: ['./product-tracklistin.component.css']
})
export class ProductTracklistinComponent implements OnInit {

  albumInfo : Album;

  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
