import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintextComponent } from './maintext.component';

describe('MaintextComponent', () => {
  let component: MaintextComponent;
  let fixture: ComponentFixture<MaintextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
