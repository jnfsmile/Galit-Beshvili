import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <header>
   <nav class="navbar navbar-default">

       <!-- navbar-header -->
       <div class="navbar-header">

         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
           <span class="sr-only">Toggle navigation</span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
           <span class="icon-bar"></span>
         </button>
         <a class="hidden-xs hidden-sm navbar-brand" routerLink="/home" title="בשבילי - אימון והדרכה">
           <img [src]="siteLogo" alt="לוגו" />
           <div id="site-name">
             {{name}}
             <br/>
             <div>הכוונה והדרכה<br />מול אתגרי הפוריות</div>
           </div>
         </a>

       </div><!-- /navbar-header -->

       <!-- navbar -->
       <div class="navbar-collapse collapse">
         <ul class="nav navbar-nav navbar-left">
           <li><a routerLink="/home" routerLinkActive="active">ראשי</a></li>
           <li><a routerLink="/personal" routerLinkActive="active">תהליך אישי</a></li>
           <li><a routerLink="/workshop" routerLinkActive="active">סדנאות</a></li>
           <li><a routerLink="/lecture" routerLinkActive="active">הרצאות</a></li>
           <li><a routerLink="/blog" routerLinkActive="active">בלוג</a></li>
           <li><a routerLink="/book" routerLinkActive="active">ספר</a></li>
           <li><a routerLink="/about" routerLinkActive="active">אודות</a></li>
           <li><a routerLink="/contact" routerLinkActive="active">צרי קשר</a></li>
         </ul>

       </div><!-- /navbar -->

   </nav>
 </header>
 <router-outlet></router-outlet>
 <footer></footer>

 `,
 providers: [ ]
})
export class AppComponent {
 siteLogo = 'assets/images/site-logo.png';
 name = 'בשבילי';
 url = '/';
}
