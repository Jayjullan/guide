import { Component, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { createCustomElement } from '@angular/elements';
import { WelcomeCard } from './welcome-card/welcome-card';

@Component({
  selector: 'app-elements',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './elements.html',
  styleUrl: './elements.css',
})
export class Elements {
  constructor(injector: Injector) {
    if (typeof customElements !== 'undefined' && !customElements.get('demo-welcome-card')) {
      const WelcomeElement = createCustomElement(WelcomeCard, { injector });

      customElements.define('demo-welcome-card', WelcomeElement);
    }
  }
}
