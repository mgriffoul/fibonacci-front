import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
      requestNumber: ['', [Validators.required, Validators.pattern('^[0-9]$')]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.warn(this.registerForm.value);
  }

}
