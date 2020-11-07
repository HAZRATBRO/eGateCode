export class Quiz{
    public constructor(
        public  testId:String,
        public section:String,
        public marks:String, 
        public negativeMarks:String,
        public type:String,
        public questionImage:boolean,
        public question:String,
        public options:Array<any>,
        public selected:String,
        private answer:String,
        public optionsType:String,
    ){
      
    }
}