import { Component, OnInit, Input} from '@angular/core';
import { CardData } from '../models/card-data';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() cardData:CardData;
  constructor() { }

  


  ngOnInit() {
    if (this.cardData.cardContent.includes("GATE")){
      if(this.cardData.cardContent.includes("QUESTION")){
      this.cardData.cardLink="/gate/questionBank"; 
      this.cardData.cardType="https://img.icons8.com/color/40/000000/book.png"
    }
    else if(this.cardData.cardContent.includes("TEST")){
      this.cardData.cardLink="/gate/testSeries"; 
      this.cardData.cardType="https://img.icons8.com/color/40/000000/monitor.png"
    }
    else if(this.cardData.cardContent.includes("VIDEO")){
      this.cardData.cardLink="/gate/lectures"; 
      this.cardData.cardType="https://img.icons8.com/color/48/000000/circled-play--v1.png"
    }
    else if(this.cardData.cardContent.includes("STUDY")){
      this.cardData.cardLink="/gate/studyMaterial"; 
      this.cardData.cardType="https://img.icons8.com/color/48/000000/story-book.png" 
    }
    
  }
    else if(this.cardData.cardContent.includes("IPATE")){
      if(this.cardData.cardContent.includes("QUESTION")){
        this.cardData.cardLink="/ipate/questionBank"; 
        this.cardData.cardType="https://img.icons8.com/color/40/000000/book.png"

      }
      else if(this.cardData.cardContent.includes("TEST")){
        this.cardData.cardLink="/ipate/testSeries"; 
        this.cardData.cardType="https://img.icons8.com/color/40/000000/monitor.png"

      }
      else if(this.cardData.cardContent.includes("VIDEO")){
        this.cardData.cardLink="/ipate/lectures"; 
        this.cardData.cardType="https://img.icons8.com/color/48/000000/circled-play--v1.png"

      }
      else if(this.cardData.cardContent.includes("STUDY")){
        this.cardData.cardLink="/ipate/studyMaterial";
        this.cardData.cardType="https://img.icons8.com/color/48/000000/story-book.png" 
 
      }
    }
   else{
    if(this.cardData.cardContent.includes("QUESTION")){
      this.cardData.cardLink="/psu/questionBank"; 
      this.cardData.cardType="https://img.icons8.com/color/40/000000/book.png"

    }
    else if(this.cardData.cardContent.includes("TEST")){
      this.cardData.cardLink="/psu/testSeries";
      this.cardData.cardType="https://img.icons8.com/color/40/000000/monitor.png"
 
    }
    else if(this.cardData.cardContent.includes("VIDEO")){
      this.cardData.cardLink="/psu/lectures"; 
      this.cardData.cardType="https://img.icons8.com/color/48/000000/circled-play--v1.png"

    }
    else if(this.cardData.cardContent.includes("STUDY")){
      this.cardData.cardLink="/psu/studyMaterial"; 
      this.cardData.cardType="https://img.icons8.com/color/48/000000/story-book.png" 

    }
   }
  }

}
