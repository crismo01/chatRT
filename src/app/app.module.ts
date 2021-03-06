import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { InputComponent } from './input/input.component';
const config = {
  apiKey: "AIzaSyCEiRAPdkMzCaMbHO2cmnjUhtOScjecZQo",
  authDomain: "chatrt-f1cb6.firebaseapp.com",
  databaseURL: "https://chatrt-f1cb6.firebaseio.com",
  projectId: "chatrt-f1cb6",
  storageBucket: "chatrt-f1cb6.appspot.com",
  messagingSenderId: "122284766591"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MessageComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
