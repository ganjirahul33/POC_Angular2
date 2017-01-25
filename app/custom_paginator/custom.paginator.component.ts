import { Component } from '@angular/core';
import {CustomPaginator} from './custom.paginator';

@Component({
  selector: 'custom-paginator',
  template: `
  <p-paginator></p-paginator>
  `
})
export class CustomPaginatorComponent {
  title:string = 'PREMIER | Decision Support Analytics';
}
