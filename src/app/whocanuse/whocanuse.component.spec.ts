import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhocanuseComponent } from './whocanuse.component';

describe('WhocanuseComponent', () => {
  let component: WhocanuseComponent;
  let fixture: ComponentFixture<WhocanuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhocanuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhocanuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
