import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating :number | undefined;
    cropWidth : number = 75;
    @Output() notify : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        if(this.rating != undefined){
            this.cropWidth = this.rating * 75 / 5;
        }
    }

    onClick() :void {
        console.log();
        this.notify.emit(`This is a product with ${this.rating} rating!`)
    }
}