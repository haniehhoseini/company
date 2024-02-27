import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtwoComponent } from './childtwo.component';

describe('ChildtwoComponent', () => {
  let component: ChildtwoComponent;
  let fixture: ComponentFixture<ChildtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildtwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
