import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  name:string = "Ann.Curzo"
  subject:string = "CS Computer Science"
  constructor() { }

  ngOnInit() {
  }

}
