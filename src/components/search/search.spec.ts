import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Earrings } from '../../models';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  const mockEarrings: Earrings[] = [
    {
      id: '123',
      name: 'test',
      image: 'test',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not created element class search__result if results = 0', () => {
    expect(component.results().length).toBe(0);

    const el = fixture.debugElement.query(By.css('.search__result'));
    expect(el).toBeFalsy();
  });

  it('should created element class search__result if results > 0', () => {
    component.results.set(mockEarrings);
    expect(component.results().length).toBe(1);

    fixture.detectChanges();

    const el = fixture.debugElement.query(By.css('.search__result'));
    expect(el).toBeTruthy();
  });
});
