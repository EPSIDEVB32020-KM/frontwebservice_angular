import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaiDetailComponent } from './essai-detail.component';

describe('EssaiDetailComponent', () => {
  let component: EssaiDetailComponent;
  let fixture: ComponentFixture<EssaiDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssaiDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
