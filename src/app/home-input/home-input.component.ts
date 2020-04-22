import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home-input',
  templateUrl: './home-input.component.html',
  styleUrls: ['./home-input.component.css']
})

export class HomeInputComponent implements OnInit {
  private dataSource = new BehaviorSubject<any[]>([]);

  constructor() { }

  ngOnInit() {
  }
  a;
  b;
  arr= this.dataSource;

  TAMBAH(){
  let {a,b} = this;
  let temparr
  temparr.push(a)
  temparr.push(b)
  this.arr.push(temparr)
  }
}