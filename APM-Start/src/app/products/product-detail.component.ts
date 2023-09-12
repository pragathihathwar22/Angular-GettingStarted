import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './products';
import { Subscription } from 'rxjs';
import { ProductService } from './products.service';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product Details'
  product: IProduct | undefined;
  productSub!: Subscription;

  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe({
      next:products=>{
        this.product = products.find(product=>product.productId===id)
      },
      error:err=>{
        console.log(err)
      }
    });
  }

  // return this.products.filter((product:IProduct)=>
            // product.productName.toLocaleLowerCase().includes(filterBy));

  onBack():void{
    this.router.navigate(['/products']);
  }

}
