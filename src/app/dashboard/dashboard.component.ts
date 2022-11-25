import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
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
  @ViewChild('sidenav')
  sidenav!: MatSidenav;
email:any
  reason = '';
  
  @Input() item:any
  index: any=0;
  firstname: any;
  lastname: any;
  id: any;
  gender: any;
  
  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
  type:any='male';
  users:any
  totalRecords:any;
  page:any=1

  filter:any
  showFiller = false;
  uptdStatus:any=false
  newStatus:any=true;
  viewStatus:any=false
 cardStatus:any=true;
 listStatus:any=false;
  constructor(private ds:DatabaseService,private fs:FormBuilder ,private route:Router,private fb:FormBuilder) {

this.users=this.ds.userDetails
// console.log(this.users);

   }



   formGroup=this.fb.group({
    email:['',[Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),Validators.required]],
    lastname:['',[Validators.required]],
    firstname:['',[Validators.required]],
    gender:[''],
    address:[''],
    city:[''],
   
       })
    get f(){ return this.formGroup.controls;}

  ngOnInit(): void {
    this.users=this.ds.userDetails
    this.totalRecords=this.users.length
  }

view(t:any){
  console.log(t);
  this.viewStatus=true;
  this.newStatus=false;
  this.uptdStatus=false
  this.firstname=t.firstname
  this.lastname=t.lastname
  
    this.index = this.users.findIndex((a: { firstname: any; }) => a.firstname === this.firstname)
   this.id=t.id
    let email=document.getElementById('email')?.innerHTML==""?t.email:' '
    let lastname=document.getElementById('lastname')?.innerHTML==""?t.lastname:' '
    let firstname=document.getElementById('lastname')?.innerHTML==""?t.firstname:' '
    let address=document.getElementById('lastname')?.innerHTML==""?t.address:' '
    let city=document.getElementById('city')?.innerHTML==""?t.city:' '
    // let email=document.getElementById('email')?.innerHTML==""?t.email:' '
    // console.log('email: ', ema);
    this.formGroup.get('email')?.setValue(email);
    this.formGroup.get('lastname')?.setValue(lastname);
    this.formGroup.get('firstname')?.setValue(firstname);
     this.type=t.gender
    this.formGroup.get('gender')?.setValue(this.type);
    
    this.formGroup.get('city')?.setValue(city);
    this.formGroup.get('address')?.setValue(address);
  }


uptd(t:any){
console.log(t);
this.firstname=t.firstname
this.lastname=t.lastname
this.viewStatus=false
this.uptdStatus=true
  this.newStatus=false
  this.index = this.users.findIndex((a: { firstname: any; }) => a.firstname === this.firstname)
 this.id=t.id
  let email=document.getElementById('email')?.innerHTML==""?t.email:' '
  let lastname=document.getElementById('lastname')?.innerHTML==""?t.lastname:' '
  let firstname=document.getElementById('lastname')?.innerHTML==""?t.firstname:' '
  let address=document.getElementById('lastname')?.innerHTML==""?t.address:' '
  let city=document.getElementById('city')?.innerHTML==""?t.city:' '
  // let email=document.getElementById('email')?.innerHTML==""?t.email:' '
  // console.log('email: ', ema);
  this.formGroup.get('email')?.setValue(email);
  this.formGroup.get('lastname')?.setValue(lastname);
  this.formGroup.get('firstname')?.setValue(firstname);
   this.type=t.gender
  this.formGroup.get('gender')?.setValue(this.type);
  
  this.formGroup.get('city')?.setValue(city);
  this.formGroup.get('address')?.setValue(address);
}
update(){
  var email =this.formGroup.value.email
  var city =this.formGroup.value.city
  var firstname =this.formGroup.value.firstname
  var lastname =this.formGroup.value.lastname
  var address =this.formGroup.value.address
 var index= this.index 
 var id =this.id
 var gender=this.type
  var result=this.ds.update(email,city,firstname,lastname,address,index,id,gender)
}

onChange(e:any) {
  this.type= e.target.value;
  console.log('this.type: ', this.type);
}

new(){
this.uptdStatus=false
  this.newStatus=true
  this.viewStatus=false
  this.formGroup.get('email')?.setValue('');
  this.formGroup.get('lastname')?.setValue(' ');
  this.formGroup.get('firstname')?.setValue(' ');
  this.formGroup.get('address')?.setValue(' ');

  this.formGroup.get('gender')?.setValue(' ');
  this.formGroup.get('city')?.setValue(' ');
}


add(){

  var email =this.formGroup.value.email
  var city =this.formGroup.value.city
  var firstname =this.formGroup.value.firstname
  var lastname =this.formGroup.value.lastname
  var address =this.formGroup.value.address
  var gender =this.type
  if(this.formGroup.valid){
var result=this.ds.add(email,city,firstname,lastname,address,gender)
if(result){
  Swal.fire(
    'Good job!',
    'You have successfully registered!',
    'success'
  ).then(() => {
    this.filter=""
    this.ngOnInit() 
   })
}}
  else{
    Swal.fire({
      icon: 'error',
      title: 'Please fill form ',
     
    })
  }
}

card(){
  this.cardStatus=true;
  this.listStatus=false
  this.newStatus=false
}
list(){
  this.cardStatus=false;
  this.listStatus=true;
  this.newStatus=false
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
delete(){
  
  let result=this.ds.remove(this.id)
  if(result){
    Swal.fire({
      icon:'success',
      title:'You have successfully deleted!'
     } ).then(() => {
      this.filter=""
      this.ngOnInit() 
     })

}}}
