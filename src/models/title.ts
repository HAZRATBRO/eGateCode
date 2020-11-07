import {Subject} from './subject' 

export class Title{
    public constructor(
        public _id:String,
        public title:String,
        public subject:String,
        public updated:Date
    ){

    }
}