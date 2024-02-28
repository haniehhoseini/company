import { AfterViewInit , Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-childtwo',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './childtwo.component.html',
  styleUrl: './childtwo.component.scss'
})
export class ChildtwoComponent implements AfterViewInit {

  constructor(private formBuilder:FormBuilder , private checkService: CheckService){
      this.form = this.formBuilder.group({
        code:['' , Validators.required]
      });
  }
  form !: FormGroup;

  ngOnInit(): void{

    this.form.valueChanges.subscribe(value => {
      this.checkService.codeConfirm(this.form);
    });
  }
  ngAfterViewInit(): void {
    this.checkService.updateFormData(this.form);
    
  }

}
