import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

    public array: any = [{name: 'thanseeh'}, {
        age: 85, name: 'anchu'}, {size: 'Large'}];
  public inp: any;

  ngOnInit() {
  }


    changefuntions(value) {
    alert('changed' + this.inp);
    console.log(value);
    }
}
