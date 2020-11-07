import { Component } from '@angular/core';
import { CardData } from 'src/models/card-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eGateFrontServer';
    cardData:CardData = new CardData("GATE QUESTION BANK","www.Gate.com","");
  

}
