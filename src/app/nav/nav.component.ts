import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public collapsed(event: any): void {
    console.log('collapsed event ', event);
  }

  public expanded(event: any): void {
    console.log('expanded event ', event);
  }

}
