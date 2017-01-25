import {Component} from '@angular/core';
import { Country } from './country';
@Component({
    templateUrl:'app/home.html'
})
export class Home {
     countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil'),
     new Country(5, 'Russia')
    ];
}