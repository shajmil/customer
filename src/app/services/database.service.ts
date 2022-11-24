import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  id:any=3
  currentUser:any;
  currentAcno:any;

 userDetails:any =[//object of objects
 {id:1,firstname:'Allwin',lastname:'shaji',email:"allwinshaji@gmail.com",city:"ernakulam",address:"345 2nd street",gender:"male"},
 {id:2,firstname:'shajmil',lastname:'jamal',email:"shajmil@gmail.com",city:"ernakulam",address:" 2 angamaly street",gender:"male"},
 {id:3,firstname:'sana',lastname:'sajid',email:"sanasajid@gmail.com",city:"ernakulam",address:"345 2nd street",gender:"female"},

 ]
  details: any;
 
constructor(private route:Router) { 
  this. details=this.userDetails
  this.getDetails();
  this.saveDetails();
    // console.log('userDetails: ', this.userDetails);
  }
  
saveDetails(){
  console.log(this.userDetails);
  if(  this.userDetails){

   
    
      localStorage.setItem('userDetails',JSON.stringify(this.userDetails));
      
    }else{
    }
    if(this.id){
      localStorage.setItem('id',this.id );
    
  }
    
}
getDetails(){
  if(this.id){
    // console.log(localStorage.getItem('todo')||' ');
        this.id= (localStorage.getItem('id')||this.id)
       
      }
  if(this.userDetails){
     this.userDetails=JSON.parse(localStorage.getItem('userDetails')||'[]')
     if(  this.userDetails.length == 0){
      this.userDetails=this.details;
     }
    // this.userDetails=JSON.parse(this.userDetails ||'[]')
  }
}

add(email:any,city:any,firstname:any,lastname:any,address:any,gender:any){
  
  var details = this.userDetails
  console.log('details: ', details);
  

  var id = this.id++
  details.push(
    {
      id,firstname,lastname,email,city,address,gender
      })
      // console.log(data);
  //  data.map((i: { id: any; })=>console.log(i));
  console.log(details);
  this.saveDetails()
  

  return true
  }

  update(email:any,city:any,firstname:any,lastname:any,address:any,index:any,id:any,gender:any){
    var data=this.userDetails
    // console.log(id);
    
    data[index]=
      {
      id,firstname,lastname,email,city,address,gender}
      this.saveDetails()
      return true
  }
 
  
remove(t:any){

  // console.log
  // ('index: ', t);
  this.userDetails.splice(this.userDetails.findIndex((a: { id: any; }) => a.id === t) , 1)
  // this.todo.splice(t,1)
  this.saveDetails()
  }

  
  
}










