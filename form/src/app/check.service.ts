import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CheckService{
    private formDataSubject = new BehaviorSubject<any>({});
    private codeSubject = new BehaviorSubject<any>({});
    private MobileConfirmSubject = new BehaviorSubject<any>({});

    formData$ = this.formDataSubject.asObservable();
    code$ = this.codeSubject.asObservable();
    MobileConfirm$ = this.MobileConfirmSubject.asObservable();
    

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