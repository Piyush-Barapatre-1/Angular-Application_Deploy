import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){
   
  }

 disable:boolean=true; //true

 onClickHome()
 {
  this.disable=false
  this.router.navigateByUrl('/home/'+this.disable)
  // if(this.disable==false)
  // {
  //   alert("in disable true")
  //   this.disable=true;
  //   this.router.navigateByUrl('home/'+this.disable);
  //   // this.hc.foo();
  // }
  
  // else if(this.disable==true){
  //   alert("in disable false"+this.disable)
  //   this.disable=false;
  //   this.router.navigateByUrl('home/'+this.disable);
  //   alert(this.disable)
  //   // this.hc.foo();
  }
 }

