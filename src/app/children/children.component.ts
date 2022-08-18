import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  firstname ="";
  middlename ="";
  lastname ="";

  @ViewChildren(NgModel) modelRefList:QueryList<NgModel> = new QueryList();
  
  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.modelRefList.forEach(elem => {
      console.log(elem.value);
    })
  }

}
