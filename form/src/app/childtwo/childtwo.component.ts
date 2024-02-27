import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-childtwo',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './childtwo.component.html',
  styleUrl: './childtwo.component.scss'
})
export class ChildtwoComponent {

  constructor(private formBuilder:FormBuilder , private checkService: CheckService){}
  form !: FormGroup;

  ngOnInit(): void{
    this.form = this.formBuilder.group({
      code:['']
    });
    this.form.valueChanges.subscribe(value => {
      this.checkService.codeConfirm(value);
    });
  }


}
