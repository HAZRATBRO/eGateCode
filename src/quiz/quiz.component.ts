import { Component, OnInit } from '@angular/core';
import questions from '../assets/questions.json'
import { Quiz } from 'src/models/quiz';
import { RedirectorService } from 'src/services/redirector.service';
import { timer, Subscription } from 'rxjs';
import { Router } from '@angular/router';
declare var $:any
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 
  public options = ["A" , "B" , "C" , "D"];
  public  questions:Quiz[] = JSON.parse(JSON.stringify(questions));
  public  ayush:String = "Ayush"
  private num:number = 0 
  public quiz:Quiz = this.questions[0]; 
  private timer:string; 
  
  constructor(private service:RedirectorService , private router:Router) { }
 
  private subscribeTimer:number = 60;
  
  observableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe(val => {
      console.log(val, '-');
      // console.log((this.time - val))
      if(this.subscribeTimer < val/60){
        console.log("Time out")
        this.unsubscribe(abc)
        this.router.navigateByUrl('')
      }
      this.timer = (this.subscribeTimer - (val/60)).toFixed(0)
      console.log(val/60 + "Minutes")
      

    });
  }
  unsubscribe(sub:Subscription ){
    sub.unsubscribe()
  }
  ngOnInit() {
    console.log(this.questions[0])
    console.log(this.questions[0].options[0][this.options[0]].includes("image"))
    console.log(this.questions[0].optionsType)
    this.observableTimer()
    
    $(document).ready(function(){
      let modalContent: any = $('.modal-content');
      let modalHeader = $('.modal-header');
      console.log(modalContent)
      console.log(modalHeader)
      modalHeader.addClass('cursor-all-scroll');
      modalContent.draggable({
          handle: '.modal-header'
      });
    });
  }
  
  toggleQuestion(data:number){
    if(this.num == 0 && data == -1){
      this.num = this.questions.length - 1;
    }
    else if(this.num == (this.questions.length - 1) && data == 1){
      this.num = 0;
    }

    else
     {
       this.num += data;
     }

     console.log(this.num)
     this.service.changeQuestion(this.questions[this.num])
     this.quiz = this.service.getQuestion()
  }

  
}
