import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'cg-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})

export class StatFiltersComponent implements OnInit {
  details: FormGroup;
  videoRatings = [
    'Love',
    'Like',
    'Meh',
    'Needs Improvement'
  ];

  constructor(fb: FormBuilder) {
    this.details = fb.group({
      firstName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      jobTitle: ['', Validators.minLength(3)],
      videoRatings: [''],
    });
  }

  saveUserDetails(): void {
    console.log('Form Submitted', this.details.value);
  }

  logForm(): void {
    console.log('form:', this.details);
  }
  ngOnInit() {
  }

}
