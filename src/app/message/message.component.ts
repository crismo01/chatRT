import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()message:string;
  @Input()userAuth:string;

  constructor() { }

  ngOnInit() {
  }

}
