import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupSubscribeComponent } from './popup-subscribe';

describe('PopupSubscribeComponent', () => {
  let component: PopupSubscribeComponent;
  let fixture: ComponentFixture<PopupSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupSubscribeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupSubscribeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
