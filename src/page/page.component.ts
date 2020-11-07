import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CardData } from 'src/models/card-data';
import { Router } from '@angular/router';
import { RedirectorService } from 'src/services/redirector.service';
import { Points } from 'src/models/points';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  private gate:CardData[] = [new CardData("GATE QUESTION BANK","www.Gate.com","Book"),new CardData("GATE ONLINE TEST SERIES","www.Gate.com","Book"),new CardData("GATE VIDEO LECTURES","www.Gate.com","Book"),new CardData("E-STUDY MATERIAL","www.Gate.com","Book")]
  private ipate:CardData[] = [new CardData("IPATE QUESTION BANK","www.Gate.com","Book"),new CardData("IPATE ONLINE TEST SERIES","www.Gate.com","Book"),new CardData("IPATE VIDEO LECTURES","www.Gate.com","Book"),new CardData("E-STUDY MATERIAL","www.Gate.com","Book")]
  private psu:CardData[] = [new CardData("PSU QUESTION BANK","www.Gate.com","Book"),new CardData("PSU ONLINE TEST SERIES","www.Gate.com","Book"),new CardData("PSU VIDEO LECTURES","www.Gate.com","Book"),new CardData("E-STUDY MATERIAL","www.Gate.com","Book")]
  private points:Points = new Points("",[],[]);
  @Output() redirectClick:EventEmitter<any> =new EventEmitter<any>()
 


  constructor(private service:RedirectorService , private router:Router) { }

  ngOnInit() {
  }
  
  
  buyComplete(data:String='',cardData:CardData=null){
     if(data!=''){
            if( data.includes("GATE"))
                {
                this.points.message= "GATE COMPLETE COURSE"
              }
          else
              {
            this.points.message= "IPATE COMPLETE COURSE"
          }
    }
  else if(data==''){
     
    this.points.message= cardData.cardContent;
  }

      //get Data From DB Here
      this.points.details = ["This is a good Course" , "Great Content","Best online coverage"];
      this.points.complete_course = ["Full Course is amazing","Full course content gives more coverage","Much better availability"];
       
    console.log(this.points)
    this.service.changeSubscription(this.points);
     this.router.navigateByUrl('/redirector');

  }
}