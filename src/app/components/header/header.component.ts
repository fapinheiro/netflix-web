import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isHeaderBlack: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onScroll(event: any) {
    // console.log(event);
    if (window.scrollY > 10) {
      this.isHeaderBlack = true;
    } else {
      this.isHeaderBlack = false;
    }
  }
}
