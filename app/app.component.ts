import {Component} from '@angular/core';
@Component({
    selector:'my-app',
    template:`<h1>First App</h1>
    <nav>
      <a routerLink="/home"  routerLinkActive="active">Home</a>
      <a routerLink="/dropdown"  routerLinkActive="active">Dropdown</a>
      <a routerLink="/persons"  routerLinkActive="active">Persions</a>
      <a routerLink="/cars"  routerLinkActive="active">Cars</a>
      <!--<a routerLink="/custompaginator" routerLinkActive="active">Custom Paginator</a> -->
      <a routerLink="/vdatatable" routerLinkActive="active" >Vertical DataTable</a>
    <nav>
    <router-outlet></router-outlet>
    `,
    
})
export class AppComponent {

}