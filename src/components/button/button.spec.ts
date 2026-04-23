import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have class btn--primary', () => {
    fixture.componentRef.setInput('styleName', 'primary');
    fixture.detectChanges();

    const btn: HTMLButtonElement = fixture.debugElement.query(
      By.css('.btn'),
    ).nativeElement;

    expect(btn.classList.contains('btn'));
    expect(btn.classList.contains('btn--primary')).toBeTruthy();
    expect(btn.classList.contains('btn--secondary')).toBeFalsy();
  });

  it('should have class btn--secondary', () => {
    fixture.componentRef.setInput('styleName', 'secondary');
    fixture.detectChanges();

    const btn: HTMLButtonElement = fixture.debugElement.query(
      By.css('.btn'),
    ).nativeElement;

    expect(btn.classList.contains('btn'));
    expect(btn.classList.contains('btn--primary')).toBeFalsy();
    expect(btn.classList.contains('btn--secondary')).toBeTruthy();
  });
});
