import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Output() data=new EventEmitter()
  constructor( private route:Router) { }
acno:any
  ngOnInit(): void {
  }
  logout(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You need to Login again!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout!',
          'You have been Successfully Logout',
          'success'
        )
        localStorage.removeItem('currentUser')
        localStorage.removeItem('currentacno')
        this.route.navigateByUrl('')
      }
    })

  }
  delete(){
    this.acno = localStorage.getItem('currentacno') ||' '
    this.data.emit()
  }
}
