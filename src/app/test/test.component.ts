import { Component, OnInit } from '@angular/core';
declare var Fingerprint2: any;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() {
    new Fingerprint2().get(function(result, components) {
      console.log(result); // a hash, representing your device fingerprint
      console.log(components); // an array of FP components
    });
  }

  ngOnInit() {
  }

}
