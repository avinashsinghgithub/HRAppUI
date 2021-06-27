import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { Brand } from './brand';
@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
    brands = new Array<Brand>();
        ngOnInit(): void {
            console.log("ngOnInit of BrandsComponent called");
        }
constructor(private configService : ConfigService){

}
getBrands() {
    this.configService.getConfig()
        .subscribe((data: any) => {
            this.brands = data;
            });
        
}
}