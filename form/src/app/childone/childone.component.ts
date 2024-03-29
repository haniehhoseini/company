import { AfterViewInit, Component ,  Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckService } from '../check.service'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-childone',
  standalone: true,
  imports: [ FormsModule ,  ReactiveFormsModule , CommonModule ],
  templateUrl: './childone.component.html',
  styleUrl: './childone.component.scss'
})
export class ChildoneComponent implements AfterViewInit {


  @Output() mobileError = new EventEmitter<boolean>();

  constructor(private formBuilder:FormBuilder , private checkService:CheckService){
    this.form = this.formBuilder.group({
        FirstName:['', Validators.required],
        LastName: ['' , Validators.required],
        Mobile:['', Validators.required]
    });
  }
  form !: FormGroup;
  isValidMobile: boolean = true;


  ngOnInit(): void{

    this.form.valueChanges.subscribe(value => {
      this.checkService.updateFormData(this.form);
    });
    
    this.form.valueChanges.subscribe(value => {
      this.isValidMobileFormat(this.form.value.Mobile);
    });

    this.form.get('FirstName')?.setValue(this.checkService.new.value.FirstName);
    this.form.get('LastName')?.setValue(this.checkService.new.value.LastName);
    this.form.get('Mobile')?.setValue(this.checkService.new.value.Mobile);
  }

  ngOnDestroy(): void{
    this.checkService.new.get('FirstName')?.setValue(this.form.value.FirstName);
    this.checkService.new.get('LastName')?.setValue(this.form.value.LastName);
    this.checkService.new.get('Mobile')?.setValue(this.form.value.Mobile);
    console.log("form:" , this.form.value);
  }


  ngAfterViewInit(): void {
    this.checkService.updateFormData(this.form);
    
  }


  private isValidMobileFormat(Mobile : any): void {
  
    if (/^09[0|1|2|3][0-9]{8}$/.test(Mobile)) {
      console.log("Mobile");
      
      this.checkService.MobileConfirm(true);
    } else {
      console.log("doorost nabud");
      
      this.checkService.MobileConfirm(false);
      this.mobileError.emit(true);
    }
  }
  

}
