import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatabaseService } from '../services/database.service';

// import {SidebarModule} from 'primeng/sidebar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users:any
  filter:any

 cardStatus:any=true;
 listStatus:any=false;
  constructor(private ds:DatabaseService,private fs:FormBuilder ,private route:Router) {

this.users=this.ds.userDetails
console.log(this.users);

   }

  ngOnInit(): void {
    this.users=this.ds.userDetails
    // if(!localStorage.getItem('currentacno')){
    //   alert('Please login')
    //   this.route.navigateByUrl('')
    // }
  }
//   form = this.fs.group({
//     acno:['',[Validators.pattern('[0-9]*')]],
//     pswd:[''],
//     amnt:['',[Validators.pattern('[0-9]*')]],
    
//   })

// get f(){
//  return this.form.controls
// }

new(){

}
card(){
  this.cardStatus=true;
  this.listStatus=false
}
list(){
  this.cardStatus=false;
  this.listStatus=true
}
search(){
if(this.filter==""){
this.ngOnInit()
}else{


this.users=this.users.filter((re: any) =>{

 return re.firstname.toLocaleLowerCase().match(this.filter.toLocaleLowerCase())
})
}
}



}
