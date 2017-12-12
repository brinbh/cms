export class Message{
  msgId: string;
  msgSubject: string;
  msgTxt: string;
  msgSender: string;

  constructor(msgId: string,
              msgSubject: string,
              msgTxt: string,
              msgSender: string){
    this.msgId = msgId;
    this.msgSubject = msgSubject;
    this.msgTxt = msgTxt;
    this.msgSender = msgSender;
  }
}
