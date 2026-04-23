import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overheader } from './overheader';

describe('Overheader', () => {
  let component: Overheader;
  let fixture: ComponentFixture<Overheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overheader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
