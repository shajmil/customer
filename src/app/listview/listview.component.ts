import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  @Input() item:any
  @Input() listStatus:any
  constructor() {

   }

  ngOnInit(): void {
  }

}
