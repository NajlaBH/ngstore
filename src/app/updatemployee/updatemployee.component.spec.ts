import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemployeeComponent } from './updatemployee.component';

describe('UpdatemployeeComponent', () => {
  let component: UpdatemployeeComponent;
  let fixture: ComponentFixture<UpdatemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
