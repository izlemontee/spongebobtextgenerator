import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertextComponent } from './headertext.component';

describe('HeadertextComponent', () => {
  let component: HeadertextComponent;
  let fixture: ComponentFixture<HeadertextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadertextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
