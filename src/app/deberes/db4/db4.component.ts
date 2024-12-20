import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-db4',
  templateUrl: './db4.component.html',
  styleUrls: ['./db4.component.scss'],
})
export class Db4Component implements OnInit {
  form: FormGroup;
  genderOptions: any[] = [];
  interestOptions: any[] = [];
  contactPreferenceOptions: any[] = [];
  satisfactionOptions: any[] = [];
  options: any[] = [];

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      birthDate: [null, Validators.required],
      gender: [null, Validators.required],
      interests: [[], Validators.required],
      contactPreference: [null, Validators.required],
      satisfaction: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      comments: ['', Validators.required],
      notifications: [false, Validators.required],
      satisfactionLevel: [50, Validators.required],
      fileUpload: [null],
    });

    // Opciones para los selectores
    this.genderOptions = [
      { label: 'Masculino', value: 'male' },
      { label: 'Femenino', value: 'female' },
      { label: 'Otro', value: 'other' }
    ];
    this.interestOptions = [
      { label: 'Deportes', value: 'sports' },
      { label: 'Música', value: 'music' },
      { label: 'Tecnología', value: 'technology' }
    ];
    this.contactPreferenceOptions = [
      { label: 'Email', value: 'email' },
      { label: 'Teléfono', value: 'phone' }
    ];
    this.satisfactionOptions = [
      { label: 'Muy Satisfecho', value: 'very_satisfied' },
      { label: 'Satisfecho', value: 'satisfied' },
      { label: 'Neutral', value: 'neutral' },
      { label: 'Insatisfecho', value: 'unsatisfied' },
      { label: 'Muy Insatisfecho', value: 'very_unsatisfied' }
    ];
    this.options = [
      {
        label: 'Frutas',
        items: [
          { label: 'Manzana', value: 'manzana' },
          { label: 'Naranja', value: 'naranja' },
        ],
      },
      {
        label: 'Vegetales',
        items: [
          { label: 'Zanahoria', value: 'zanahoria' },
          { label: 'Brócoli', value: 'brocoli' },
        ],
      },
    ];
  }

  ngOnInit(): void {}

  // Manejo del formulario al enviarlo
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario inválido:', this.form.errors);
    }
  }
}
