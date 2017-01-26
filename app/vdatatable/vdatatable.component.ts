import {Component,OnInit} from '@angular/core';
import { Country } from './country';

@Component({
    templateUrl:'app/vdatatable/vdatatable.html',
    styleUrls:['app/vdatatable/vdatatable.css']
})
export class Vdatatable implements OnInit{
    countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil'),
     new Country(5, 'Russia'),
      new Country(6, 'Russia1'),
       new Country(7, 'Russia2')
    ];
    ngOnInit() {
    }

}
