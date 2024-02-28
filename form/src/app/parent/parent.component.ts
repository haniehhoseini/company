import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildoneComponent } from '../childone/childone.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ FormsModule , ChildoneComponent, RouterModule , CommonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  constructor(private router:Router , private checkService: CheckService , private cdr:ChangeDetectorRef){}

  buttonBack:boolean =  false;
  formData: any ={};
  code: any = {};
  MobileConfirm: any;

  ngOnInit() {
    this.checkService.code$.subscribe(data => {
      this.code = data;
      this.cdr.detectChanges();
    });
    this.checkService.formData$.subscribe(data => {
      this.formData = data;
      this.cdr.detectChanges();
    });
    this.checkService.MobileConfirm$.subscribe(data => {
      this.MobileConfirm = data;
      this.cdr.detectChanges();
    });
  
  }

  mobileError: boolean = false;
  codeError: boolean = false;

  RegTextColor: string = 'red';
  CofTextColor: string = 'black';
  SuTextColor: string = 'black';

  continueClick(){
    if(!this.MobileConfirm){
      this.mobileError = true;
    }

    if(this.formData.valid && this.MobileConfirm){
      this.router.navigateByUrl('/parent/childtwo');
      this.buttonBack = true;  
      this.mobileError = false;
      this.RegTextColor ='black';
      this.CofTextColor = 'red';
      this.SuTextColor = 'black';

    }
    
    if(this.code.valid){
      this.router.navigateByUrl('/parent/childthree');
      this.buttonBack = false;
      this.RegTextColor ='black';
      this.CofTextColor = 'black';
      this.SuTextColor = 'red';
    }

  }

  backClick(){
    this.router.navigateByUrl('/parent');
    this.buttonBack = false;
    this.RegTextColor ='red';
    this.CofTextColor = 'black';
    this.SuTextColor = 'black';
  }
}
