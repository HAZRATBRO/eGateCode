import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from 'src/services/api.service';
import { Subject } from 'src/models/subject';
import { Title } from 'src/models/title';
import { Post } from 'src/models/post';
import { trigger, state, style, transition, animate } from '@angular/animations';
 
@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.component.html',
  styleUrls: ['./study-material.component.css'],
  styles:[`
    .pulsing {
      animation-iteration-count: 1;
      animation: pulse 0.4s;
      animation-direction: alternate;
  }
  @keyframes pulse {
      0% {
    transform: translateX(100%);
  }
  
  100% {
    transform: translateX(0);
  }
  // }`
  ],
  animations:[
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      state('flyOut',style({ transform: 'translateX(100%)' })),
      state('fader', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('fader <=> final', animate(1000)),
       transition('flyIn=>flyOut',animate('1000ms')),
       transition('flyOut=>flyIn',animate('1000ms'))
    ])
  ]
})
export class StudyMaterialComponent implements OnInit {
  
  private pulsingText = {
    pulsing:false
  }
  private currentState = 'flyIn';
  private subjectList:Subject[];
  private titleList:Title[];
  private postList:Post[];
  private subject:Subject;
  private stIndex:number = 0;
  private post:Post;
  private title:Title;
  constructor(private studyService:ApiService) { }
  private new_click=false;
  private old_click=false;
  ngOnInit() {
    this.studyService.getPosts().subscribe((res)=>{
      this.postList = res
      this.post = this.postList[0] 
      
      console.log(this.postList)
    })
    this.studyService.getSubjects().subscribe((res)=>{
      this.subjectList = res;
      this.subject = this.subjectList[this.stIndex];
      console.log(this.subjectList)
    })
    this.studyService.getTitles().subscribe((res)=>{
      this.titleList = res;
      this.title = this.titleList[0]
      console.log(this.titleList)
    })
    
  }
   

  ngDoCheck(){
    console.log("Checking Changes")
      console.log("Start animation")
      console.log("Current State " + this.currentState)
      this.currentState = this.currentState==='flyIn'?'flyOut':'flyIn'
      console.log("End Animation")
      console.log("Current State " + this.currentState)
      this.currentState = 'flyIn'  
      if(this.old_click!=this.new_click){
        this.pulsingText.pulsing=true;
      } 
      }
  

  changeContent(topic:Title){
    console.log(topic._id)
     for(let i = 0 ; i < this.postList.length ; i++){
       console.log(this.postList[i].title == topic._id)
       if(this.postList[i].title === topic._id){
         console.log("Inside")
          this.old_click = this.new_click
          this.new_click = !this.new_click
          this.post  =  this.postList[i]
          this.title = topic; 
          console.log(this.post.title)  
       }

     }
      
     return "Not Found The Post for that topic"
  }

  changeComponent(s:number){
    
    if(s==1 && this.stIndex==this.subjectList.length){
      this.stIndex=0;
    }
    else if(s==-1 && this.stIndex==0){
      this.stIndex=0;
    }

    else{
      this.stIndex+=s
    }
    this.subject = this.subjectList[this.stIndex]
    this.post = this.postList[this.stIndex]
    console.log(s)
    console.log(this.subject)
  }


}
