import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardData } from 'src/models/card-data';
import { Points } from 'src/models/points';
import { Quiz } from 'src/models/quiz';
import questions from '../assets/questions.json'
import { ApiService } from './api.service';
import { Subject } from 'src/models/subject';

@Injectable({
  providedIn: 'root'
})
export class RedirectorService {

  private points:Points=new Points("",[],[]);
  private subscriptionType:BehaviorSubject<Points> = new BehaviorSubject<Points>(this.points)
  currentSubscription = this.subscriptionType.asObservable();
  

  private questionList:Quiz[] = JSON.parse(JSON.stringify(questions));
  private questionType:BehaviorSubject<Quiz> = new BehaviorSubject(this.questionList[0])
  currentQuestion = this.questionType.asObservable();
  constructor(private http:ApiService) { }
  
   
   

  changeSubscription(data :Points){
    console.log(data)
    console.log("In Service")
    this.subscriptionType.next(data)
  }
 
  changeQuestion(question:Quiz){
    console.log(this.questionType.value)
    console.log("Question Service")
    this.questionType.next(question)
  }
   
  getQuestion(){
    return  this.questionType.value
  }
  

}
