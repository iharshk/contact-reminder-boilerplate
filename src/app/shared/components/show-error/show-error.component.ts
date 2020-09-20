import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-error',
  templateUrl: './show-error.component.html',
  styleUrls: ['./show-error.component.css']
})
export class ShowErrorComponent implements OnInit, OnChanges {

  private static readonly errorMessages = {
    'required': () => 'Please fill the mandatory fields.',
    'minlength': (params) => 'Please type atleast ' + params.requiredLength + ' characters in this field.',
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'mask' : (params) => 'The required pattern is:' + params.requiredMask,
    'max' : (params) => 'The max allowed number is:' + params.max,
    'min' : (params) => 'The min allowed number is:' + params.min
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;
  constructor() { }

  ngOnChanges(){

  }
  ngOnInit() {
  }

  shouldShowErrors(): boolean {
    // console.log("Control is:",this.control)
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    let error =  Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
      return error;
  }

  private getMessage(type: string, params: any) {
    // console.log("String param:", type, params);
    return ShowErrorComponent.errorMessages[type](params);
  }

}
