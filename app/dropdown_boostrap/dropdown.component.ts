import {Component, OnInit} from '@angular/core';
import { Country } from './country';
declare var $: JQueryStatic;
@Component({
    selector:'<drop-down>',
    template:`    
    <h2>Dropdown Example</h2>

  <div id="dropdown-main-div" class="dropdown">
  <!--<button class="btn btn-primary dropdown-toggle" id="menu1" type="button" data-toggle="dropdown"> -->
    {{selectedProject}}<button class="dropdown-button-div" id="menu1" type="button" data-toggle="dropdown">
    <span class="caret"></span>
    </button>
    
    
    <ul class="dropdown-menu project-dropdown" role="menu" aria-labelledby="menu1">
        <div class="dropdown-header-div">
        <strong>Please pick a project</strong>
        </div>
      
        <li *ngFor="let country of countries" role="presentation" (click)="selectedItem(country.name)"><a href="#" role="menuitem" tabindex="-1" >{{country.name}}</a></li>
          
        <div id="container">
            <a href="#" id="trigger" (click)="loadMore()">See more...</a>
        </div>
    </ul>
    <div id="pop-up">
        <b>Popup with list of all categories in alphabetical order if "See more" is selected
        </b>
    </div>
     
  </div>

`,
styleUrls:['app/dropdown_boostrap/dropdown.css']
})
export class Dropdown  implements OnInit {
    selectedProject:String;
    countries = [
     new Country(1, 'USA' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil'),
     new Country(5, 'Russia')
    ];
  
    ngOnInit() {
        this.selectedProject = this.countries[0].name;
        console.log("onInit");
        $(function() {
            var moveLeft = 20;
            var moveDown = 10;
            
            $('a#trigger').hover(function(e) {
                $('div#pop-up').show();
                    $('div#pop-up').css('top', e.pageY-60);
                    $('div#pop-up').css('left', -e.pageY)
                    // this.css('left', e.pageX + moveLeft)
                    // .appendTo('body');
                    console.log("e.pageY:"+e.pageY)
                    console.log("e.pageX"+e.pageX)
                    // $(".project-dropdown").css("overflow","");
                    // $('div#pop-up').css('z-index', 9999);
                    // let menuHegiht = $(".dropdown-menu").height();
                    // console.log("menu height:"+menuHegiht);
                }, function() {
                $('div#pop-up').hide();
                // $(".project-dropdown").css("overflow","auto");
            });
            
            $('a#trigger').mousemove(function(e) {
                // $("div#pop-up").css('left', e.pageX + moveLeft);
            // .css('top', e.pageY + moveDown)
            });
            
        });
    }
    public loadMore(): void {
        console.log("loading more");
        this.countries = [
        new Country(1, 'USA' ),
        new Country(2, 'India' ),
        new Country(3, 'Australia' ),
        new Country(4, 'Brazil'),
        new Country(5, 'Russia'),
        new Country(6, 'aaa'),
        new Country(7, 'bbb' ),
        new Country(8, 'ccc' ),
        new Country(9, 'ddd' ),
        new Country(10, 'eee'),
        new Country(11, 'fff'),
        new Country(12, 'ggg'),

        new Country(1, 'USA' ),
        new Country(2, 'India' ),
        new Country(3, 'Australia' ),
        new Country(4, 'Brazil'),
        new Country(5, 'Russia'),
        new Country(6, 'aaa'),
        new Country(7, 'bbb' ),
        new Country(8, 'ccc' ),
        new Country(9, 'ddd' ),
        new Country(10, 'eee'),
        new Country(11, 'fff'),
        new Country(12, 'ggg'),

        new Country(1, 'USA' ),
        new Country(2, 'India' ),
        new Country(3, 'Australia' ),
        new Country(4, 'Brazil'),
        new Country(5, 'Russia'),
        new Country(6, 'aaa'),
        new Country(7, 'bbb' ),
        new Country(8, 'ccc' ),
        new Country(9, 'ddd' ),
        new Country(10, 'eee'),
        new Country(11, 'fff'),
        new Country(12, 'ggg')
        ];
        setTimeout(function(){
            document.getElementById("menu1").click();
        },10);
        
        document.getElementById("menu1").click();
    }
    public selectedItem(name:String): void {
        console.log("item selected:"+name);
        this.selectedProject = name;
    }

}