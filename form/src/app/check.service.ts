import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CheckService{
    private formDataSubject = new BehaviorSubject<any>({});
    private codeSubject = new BehaviorSubject<any>({});
    private MobileConfirmSubject = new BehaviorSubject<any>({});

    formData$: Observable<any> = this.formDataSubject.asObservable();
    code$ = this.codeSubject.asObservable();
    MobileConfirm$ = this.MobileConfirmSubject.asObservable();
    
    constructor(private formBuilder:FormBuilder){
        this.new = this.formBuilder.group({
            FirstName:[''],
            LastName: [''],
            Mobile:['']
          });
    }
    new !: FormGroup;

    updateFormData(formData: any) {
        
        this.formDataSubject.next(formData);
    }

    codeConfirm(code: any){
        
        this.codeSubject.next(code);
    }

    MobileConfirm(MobileConfirm: boolean){

        this.MobileConfirmSubject.next(MobileConfirm);
    }

}