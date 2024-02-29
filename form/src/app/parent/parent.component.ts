import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildoneComponent } from '../childone/childone.component';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CheckService } from '../check.service';
import { ChildthreeComponent } from '../childthree/childthree.component';
import { ChildtwoComponent } from '../childtwo/childtwo.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ FormsModule , ChildoneComponent, RouterModule , CommonModule , ChildtwoComponent , ChildthreeComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  constructor(private router:Router , private checkService: CheckService , private cdr:ChangeDetectorRef){}

  buttonBack:boolean =  false;
  iconR :boolean = false;
  iconC :boolean = false;
  end :boolean = false;
  formData: any ={};
  code: any = {};
  MobileConfirm: any;
  childone: boolean = true;
  childtwo: boolean = false;
  childthree: boolean = false;

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
      this.buttonBack = true;  
      this.mobileError = false;
      this.RegTextColor ='black';
      this.CofTextColor = 'red';
      this.SuTextColor = 'black';
      this.iconR = true;
      this.childone = false;
      this.childtwo = true;
    }
    
    if(this.code.valid){
      this.buttonBack = false;
      this.RegTextColor ='black';
      this.CofTextColor = 'black';
      this.SuTextColor = 'red';
      this.iconC = true;
      this.end = true;
      this.childtwo = false;
      this.childthree = true;
    }

  }

  backClick(){
    this.childone = true;
    this.childtwo = false;
    this.childthree = false;
    this.router.navigateByUrl('/parent');
    //this.childone.backButton();
    this.buttonBack = false;
    this.RegTextColor ='red';
    this.CofTextColor = 'black';
    this.SuTextColor = 'black';
  }
}
