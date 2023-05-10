import { Component } from '@angular/core';
import { LangDefinition, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectTranslation';
  constructor(public translocoService: TranslocoService) { }

  setLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    console.log(this.translocoService.getActiveLang());
  }
}
