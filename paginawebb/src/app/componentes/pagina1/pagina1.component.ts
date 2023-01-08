import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component implements OnInit {

  constructor(private nav: Router) { }

  ngOnInit(): void {
  }
  login(form:NgForm){

    const email =form.value.email
    const password =form.value.password
  }
  login2(){
    this.nav.navigate(['login2'])
  }
  compras(){
    this.nav.navigate(['compras'])
  }
 
}
