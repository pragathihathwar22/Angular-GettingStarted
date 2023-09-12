import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ProductService } from "./products.service";
import { Subscription } from "rxjs";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy{

    constructor(private productService:ProductService){}

    pageTitle : string = "Product List";
    imageWidth : number  = 50;
    imageMargin : number = 2;
    showImage: boolean = false;
    private _listFilter : string = '';
    errorMessage :string = '';
    productSub!: Subscription;
    

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.performFilter(value);
        console.log(`Filter value ${this._listFilter}`)
    }

    get listFilter():string {
        return this._listFilter;
    }

    filteredProducts : IProduct[] = [];

    products: IProduct[] = [];

      toggleImage():void{
        this.showImage = !this.showImage;
      }

      performFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().includes(filterBy));
      }

      ngOnInit(): void {
        this.productSub = this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error:err=> this.errorMessage = err
        });
        
    }

    onNotify(message:string) : void{
        this.pageTitle = "Product List - "+ message;
    }

    ngOnDestroy(): void{
        this.productSub.unsubscribe();
    }


}