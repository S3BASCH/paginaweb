import { Component, OnInit } from '@angular/core';
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
  pasatiempos(){
    this.nav.navigate(['Pagina 2'])
  }
  hobbies(){
    this.nav.navigate(['Pagina 3'])
  }
 
}
