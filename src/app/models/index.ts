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
        public createdAt : Date,
        public dateFormat : string
    ){
        this.dateFormat = moment(this.createdAt).format("dddd DD-MM HH:mm A");
    }
}