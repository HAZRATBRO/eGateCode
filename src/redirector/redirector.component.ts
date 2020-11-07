import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RedirectorService } from 'src/services/redirector.service';
import { Points } from 'src/models/points';

@Component({
  selector: 'app-redirector',
  templateUrl: './redirector.component.html',
  styleUrls: ['./redirector.component.css']
})
export class RedirectorComponent implements OnInit {
  points:Points;
  title:string;
  constructor(private service:RedirectorService) {

  }
  
  ngOnInit() {
    this.service.currentSubscription.subscribe(
      data=>{
        console.log("Inside Component")
        console.log(data)
        this.points = data
        if(this.points.message.includes("GATE")){
          this.title = "GATE" 
        }
        else{
          this.title = "IPATE"
        }
      }
       );
    
  }
  
}
