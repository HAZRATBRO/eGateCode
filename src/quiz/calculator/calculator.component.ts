import { Component, OnInit } from '@angular/core';
import 'jqueryui'
declare var $:any; 
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  
  
  getConstant(num:string){
     return (num == "pi")?Math.PI:Math.E;
  }

  // factorial(x:String){
  // let  num = parseInt(x.slice(0,x.length))
  // console.log(num)
  // let ans = 1;  
  // if (num <= 1){
  //   return 1;
  // }
  
  // for(let i = 2 ; i <= num;i++){
  //  if(ans > Number.MAX_SAFE_INTEGER){
  //    return "Infinity"
  //  }
  //   ans*=i
  // }
  //  return ans
  
  // }
   factorial(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }

  getResult(operator:String){

    let num = parseInt(document.getElementById('output').innerText)
    console.log(num)
    document.getElementById('output').innerText = this.calculateFunction(operator , num)
  }

  calculateFunction(operator:String , num:number , y:number = 10){
    switch(operator){
      case 'mod':
        return Math.abs(num);
      case 'sinh':
        return Math.sinh(num);
      case 'asinh':
        return Math.asinh(num);
      case 'cosh':
        return Math.cosh(num)
      case 'acosh':
        return Math.acosh(num)
      case 'tanh':
        return Math.tanh(num)
      case 'cos':
        return Math.cos(num)
      case 'sin':
        return Math.sin(num)
      case 'acos':
        return Math.acos(num)
      case 'asin':
        return Math.asin(num)
      case 'tan':
        return Math.tan(num)
      case 'atan':
        return Math.atan(num)                    
      case 'log2x':
        return Math.log2(num)
      case 'logx':
        return Math.log(num)
      case 'logyX':
        return (Math.log(num)/Math.log(y)) 
      case 'ln': 
        return (Math.log10(num)/Math.log10(Math.E))
      case 'n!':
        return this.factorial(num); 
             
    }
  }

}
