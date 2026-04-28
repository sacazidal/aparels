import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search component is open if click SEARCH', () => {
    const elementSearch1 = fixture.debugElement.query(By.css('.search'));
    expect(elementSearch1).toBeFalsy();

    const navItemSearch: HTMLButtonElement = fixture.debugElement.query(
      By.css('#search'),
    ).nativeElement;

    navItemSearch.click();

    fixture.detectChanges();

    const elementSearch2 = fixture.debugElement.query(By.css('.search'));
    expect(elementSearch2).toBeTruthy();
  });

  it('should cart component is open if click CART', () => {
    const elementCart1 = fixture.debugElement.query(By.css('.cart'));
    expect(elementCart1).toBeFalsy();

    const navItemCart: HTMLButtonElement = fixture.debugElement.query(
      By.css('#cart'),
    ).nativeElement;

    navItemCart.click();

    fixture.detectChanges();

    const elementCart2 = fixture.debugElement.query(By.css('.cart'));
    expect(elementCart2).toBeTruthy();
  });
});
