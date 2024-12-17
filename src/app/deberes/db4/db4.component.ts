import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-db4',
  templateUrl: './db4.component.html',
  styleUrls: ['./db4.component.scss'],
})
export class Db4Component {
  form: FormGroup;
  options: any[] = [];

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario
    this.form = this.fb.group({
      inputText: ['', Validators.required],
      inputNumber: [null, Validators.required],
      calendar: [null, Validators.required],
      dropdown: [null, Validators.required],
      multiSelect: [[], Validators.required],
      category: [null, Validators.required],
      radioValue: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue],
      textArea: ['', Validators.required],
      toggle: [false, Validators.required],
      slider: [50, Validators.required],
      fileUpload: [null],
    });
    

    // Opciones para el CascadeSelect con estructura correcta
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

  // Manejo del formulario al enviarlo
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario enviado:', this.form.value);
    } else {
      console.log('Formulario inválido:', this.form.errors);
    }
  }
}
