import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  @Input() item:any
  @Input() listStatus:any
  totalRecords:any;
  page:any=1
  users: any;

  constructor(private ds:DatabaseService) {
    this.users=this.ds.userDetails
    // console.log(this.users);
    this.totalRecords=this.users.length
    
   }

  ngOnInit(): void {
  }

}
