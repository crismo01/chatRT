import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import {observable, Observable} from 'rxjs'
import { Message } from '../message.model';
import { Component, OnInit, Input, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {
  
 @Input() userAuth:string;
 @ViewChild('msgContainer') private messagesContainer: ElementRef;
 messages: Observable<any[]>;
private msgRef: AngularFirestoreCollection<Message>;


  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
    this.messages.subscribe(res => console.log(res));

  }
  ngAfterViewChecked() {
    this.scrollToBottom();
}

  constructor(private db: AngularFirestore) {
    this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));
  }

  scrollToBottom(): void {
    try {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch(err) { }
}



}
