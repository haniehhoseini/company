import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-childone',
  standalone: true,
  imports: [ FormsModule ,  ReactiveFormsModule],
  templateUrl: './childone.component.html',
  styleUrl: './childone.component.scss'
})
export class ChildoneComponent {

  constructor(private formBuilder:FormBuilder , private checkService:CheckService){}
  form !: FormGroup;

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      FirstName:[''],
      LastName: [''],
      Mobile:['']
    });
    this.form.valueChanges.subscribe(value => {
      this.checkService.updateFormData(value);
    });
  }


}
