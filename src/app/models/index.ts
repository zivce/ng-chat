import * as moment from 'moment';

export class User {
    
    public name: string
    constructor(u : string)
    {
        this.name = u;

    }
}

export class Message {
    constructor(
        public id : number,
        public senderId : string,
        public roomId : number,
        public text : string,
        public createdAt : moment.Moment
    ){
        this.createdAt = moment();
    }
}