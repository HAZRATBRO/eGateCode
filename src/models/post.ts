import {Title} from './title'
import { Subject } from './subject';
export class Post{
    constructor(
         public _id:String,
         public title:String,
         public subject:String,   
         public postImgUrl:String[],
         public postContent:String[],
         public created:Date,
         public updated:Date
    ){

    }
}