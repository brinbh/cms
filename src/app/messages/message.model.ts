export class Message{
  id: string;
  subject: string;
  msgTxt: string;
  sender: string;

  constructor(id: string,
              subject: string,
              msgTxt: string,
              sender: string){
    this.id = id;
    this.subject = subject;
    this.msgTxt = msgTxt;
    this.sender = sender;
  }
}
