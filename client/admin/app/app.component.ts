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
         <a class="hidden-xs navbar-brand" routerLink="/home" title="לדף הבית">
           <img [src]="siteLogo" alt="לוגו" />
           <div id="site-name">
             {{name}}
             <br/>
             <div>ליווי אישי-רוחני<br />מול אתגרי הפוריות</div>
           </div>
         </a>

       </div><!-- /navbar-header -->

       <!-- navbar -->
       <div class="navbar-collapse collapse">
         <ul class="nav navbar-nav navbar-left">
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/home" routerLinkActive="active">ברוכה הבאה</a></li>
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/about" routerLinkActive="active">אודות</a></li>
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/media" routerLinkActive="active">בתקשורת</a></li>
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/personal" routerLinkActive="active">תהליך אישי</a></li>
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/workshop" routerLinkActive="active">סדנאות</a></li>
           <!--<li><a routerLink="/lecture" routerLinkActive="active">הרצאות</a></li>-->
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/blog" routerLinkActive="active">בלוג</a></li>
           <li class="navbar-toggle hidden-xs" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/creative" routerLinkActive="active">השראה</a></li>
           <li class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/book" routerLinkActive="active">ספר</a></li>
           <li class="navbar-toggle visible-xs" data-toggle="collapse" data-target=".navbar-collapse.in"><a routerLink="/contact" routerLinkActive="active">צרי קשר</a></li>
         </ul>

       </div><!-- /navbar -->

   </nav>
 </header>
 <div class="main-container">
   <router-outlet></router-outlet>
   <aside>סדנה חדשה יוצאת לדרך!<br />הסדנה מתחיל בי"ב באייר, 8.5, ותתקיים בסטודיו כפרי בהוד השרון. פרטים כאן:<br />
   <gallery-image src="/assets/images/promotions/5777workshop.jpg" map=""></gallery-image>
   <map name="flyer">
    <area shape="rect" coords="100,200,250,50" href="/workshop" alt="סדנה" title="סדנה" style="background:red;border: 1px solid black;">
   </map>
   <hr />
   לקראת החג -<br />
   <a href="https://youtu.be/o7TxNHhI53I">סרטון חיזוק לקראת החג</a>
   <br />
   <a href="/assets/files/pesach_prep_77.docx">דף הכנה עצמית לקראת החג</a>
   </aside>
 </div>
 <footer class="hidden-xs hidden-sm">
     <div><a class="email" href="mailto:galit@be-shvili.co.il">galit@be-shvili.co.il</a></div>
     <div><a class="phone" href="tel:+972-050-44-70-180">050-4470180</a></div>
     <div><a class="facebook" href="http://facebook.com/galit.beshvili">גלית אימון אישי לפוריות</a></div>
     <!-- <a href='whatsapp://send?text=האתר של גלית פרידמן - אימון אישי לפוריות: http://be-shvili.co.il'>whatsApp</a> -->
 </footer>

 `,
 providers: [ ]
})
export class AppComponent {
 siteLogo = 'assets/images/site-logo.png';
 name = 'גלית פרידמן';
 url = '/';
}
