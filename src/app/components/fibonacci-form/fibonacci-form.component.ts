import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import axios from "axios";

@Component({
  selector: 'fibonacci-form',
  templateUrl: './fibonacci-form.component.html',
  styleUrls: ['./fibonacci-form.component.scss']
})
export class FibonacciFormComponent implements OnInit{
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      requestNumber: ['', [Validators.min(0),Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  onSubmit() {
    let result = '';
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert('FAIL');
      return;
    }
    console.warn(this.registerForm.get('requestNumber').value);

    axios.get('http://127.0.0.1:5000/fibonacci/closest?requestNumber=' + this.registerForm.get('requestNumber').value,
      {
        timeout: 1000,
      })
      .then(function (response) {
        // handle success
        console.log('You ARE LOGGED ' + response.data.result + ' with TOKEN : ');
        result = response.data.result
      });

    alert('receive closest' + result)
  }

}
