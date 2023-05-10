import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from './transloco-testing.module';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [getTranslocoModule()],
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Fix this test
  it('should display the correct title on the homepage in English', (done) => {
    component.setLanguage('en');
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const titleElement = fixture.debugElement.query(By.css('.fw-light')).nativeElement;
      expect(titleElement.textContent.trim()).toBe("The Album of Georges");
      done();
    });
  });

  it('should display the correct title on the homepage in French', () => {
    const titleElement = fixture.debugElement.query(By.css('.fw-light')).nativeElement;
    console.log(titleElement.textContent);
    expect(titleElement.textContent.trim()).toBe('Album de Georges');
  });

});
