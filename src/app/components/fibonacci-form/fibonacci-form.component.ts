import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import getRequestNumber from "../services/axiosService";
import {ERROR_MESSAGE_PATTERN, ERROR_MESSAGE_REQUIRED, REGEX_NUMBER_ONLY} from "./constants";

@Component({
  selector: 'fibonacci-form',
  templateUrl: './fibonacci-form.component.html',
  styleUrls: ['./fibonacci-form.component.scss']
})
export class FibonacciFormComponent implements OnInit {
  registerForm: FormGroup;
  apiResult: any;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      requestNumber: ['', [Validators.min(0), Validators.required, Validators.pattern(REGEX_NUMBER_ONLY)]]
    });
  }

  resetForm() {
    if (this.registerForm.invalid) {
      this.registerForm.reset();
    }
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      if (this.registerForm.controls.requestNumber.errors.required) {
        this.apiResult = ERROR_MESSAGE_REQUIRED;
        return;
      }
      if (this.registerForm.controls.requestNumber.errors.pattern) {
        this.apiResult = ERROR_MESSAGE_PATTERN;
        return;
      }
    }
    getRequestNumber(this.registerForm.get('requestNumber').value).then(data => this.apiResult = data);
  }


}
