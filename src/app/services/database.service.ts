import { transition } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  currentUser:any;
  currentAcno:any;

 userDetails:any =[//object of objects
 {firstname:'Allwin',lastname:'shaji',email:"allwinshaji@gmail.com",city:"ernakulam",address:"345 2nd street",gender:"male"},
 {firstname:'shajmil',lastname:'jamal',email:"shajmil@gmail.com",city:"ernakulam",address:" 2 angamaly street",gender:"male"},
 {firstname:'sana',lastname:'sajid',email:"sanasajid@gmail.com",city:"ernakulam",address:"345 2nd street",gender:"female"},

 ]
constructor(private route:Router) { 
  this.saveDetails()
    // console.log('userDetails: ', this.userDetails);
  this.getDetails();
  }
  
saveDetails(){
  // if(this.currentAcno){
  //   localStorage.setItem('currentacno',this.currentAcno)
  // }
  // if(this.currentUser){
  //   localStorage.setItem('currentUser',this.currentUser)
  // }
  if(this.userDetails){
    localStorage.setItem('userDetails',JSON.stringify(this.userDetails))
  }
}
getDetails(){
  // if(this.currentAcno){
  //  this.currentAcno= localStorage.getItem('currentacno')||''
  // }
  // if(this.currentUser){
  //  this.currentUser= localStorage.getItem('currentUser')||''
  // }
  if(this.userDetails){
  this.userDetails=JSON.parse(localStorage.getItem('userDetails')||' ')
  }
}









}
