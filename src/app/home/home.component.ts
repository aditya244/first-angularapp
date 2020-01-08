import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount : number;
  btnText : string = 'Add a Todo';
  todoText : string = 'My first todo';
  todos : string[] = [];
  counter : number = 0;
  isLoggedIn: boolean = false;
  twoWayText: string = '';
  countries : any[] = [
    {code: 'ind', country: 'India'},
    {code: 'uae', country: 'United Arab Emirates'},
    {code: 'uk', country: 'United Kingdom'}
  ];
  selectedCountryCode : string;

  constructor() { }

  ngOnInit() {
   
  }

  onIncHandler(){
    this.counter ++;
  }

  onDecHandler(){
    this.counter --;
  }

  onResetHandler(){
    this.counter = 0;
  }

  onLoginHandler(){
    this.isLoggedIn = true;
  }

  onLogoutHandler(){
    this.isLoggedIn = false;
  }
  choice(code){
    this.selectedCountryCode = code
  }
  // getValue(){
  //   value : HTMLInputElement;
  //   console.log(inputhello.value)
  // }


}
