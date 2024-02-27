import { Component } from '@angular/core';
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

  constructor(private router:Router , private checkService: CheckService){}

  buttonBack:boolean =  false;
  formData: any;
  code: any;

  activeButton:boolean = false;

  ngOnInit() {
    this.checkService.code$.subscribe(data => {
      this.code = data;
    });
    this.checkService.formData$.subscribe(data => {
      this.formData = data;
      
    });
  }

  continueClick(){
    
    const allFieldsFilled = Object.values(this.formData).every(value => !!value);
    if(allFieldsFilled){
      this.router.navigateByUrl('/parent/childtwo');
      this.buttonBack = true;    
    }

    if(this.code.code){
      this.router.navigateByUrl('/parent/childthree');
      this.buttonBack = false;
    }

  }
  backClick(){
    this.router.navigateByUrl('/parent');
    this.buttonBack = false;
  }
}
