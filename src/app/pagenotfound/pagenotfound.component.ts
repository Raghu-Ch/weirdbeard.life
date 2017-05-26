import { Component } from '@angular/core';

@Component({
  selector: 'wb-pagenotfound',
  template: `
    <p>
     <md-icon class="warning">warning</md-icon><span class="spacer">Page not found!</span>
    </p>
  `,
  styles: [`    
    .warning { font-size: 30px;}
    .spacer { margin-left: 10px;}
  `
  ]
})
export class PageNotFoundComponent { }
