import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  constructor(private activateroute:ActivatedRoute, private router:Router)
  {

  }

  disable:boolean=false;

  // ngOnInit(): void {

  //   let value;

  //   this.activateroute.paramMap.subscribe(
  //     data =>
  //     {
  //       value=data.get('disable')
        
  //     }
  //   )
  //   alert(value)

  //   this.disable=value;
  //   console.log(this.disable);
    
  // }

  ngOnChanges(changes: SimpleChanges): void {

    let value;

    this.activateroute.paramMap.subscribe(
      data =>
      {
        value=data.get('data')
        
      }
    )
    alert(value)

    this.disable=value;
    console.log(this.disable);

  }

  onClick()
  {
    this.disable=true;
  }

}
