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
export class ChildtwoComponent {

  constructor(private formBuilder:FormBuilder , private checkService: CheckService){
      this.form = this.formBuilder.group({
        code:['' , Validators.required]
      });
  }
  form !: FormGroup;

  ngOnInit(): void{

    this.form.valueChanges.subscribe(value => {
      this.checkCode(this.form.value.code);
    });

  }

  checkCode(code : any): void {
    if(code && code.toString().length === 4){
      console.log("4 raghamie!");
      
      this.checkService.codeConfirm(this.form);
    }
  }

}
