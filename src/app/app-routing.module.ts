import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaceComponent } from './face/face.component';
import { CamComponent } from './cam/cam.component';
import { CompareComponent } from './compare/compare.component';
import { Face2Component } from './face2/face2.component';
import { DatabaseComponent } from './database/database.component';
import { LoginwithfaceComponent } from './loginwithface/loginwithface.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FacedatabaseComponent } from './facedatabase/facedatabase.component';

const routes: Routes = [
  { path: 'face', component: Face2Component},
  { path: 'cam', component: CamComponent},
  { path: 'compare', component: CompareComponent},
  { path: 'facedatabase', component: FacedatabaseComponent },
  { path: 'database', component: DatabaseComponent},
  { path: 'face2', component: Face2Component },
  { path: '', component: LoginwithfaceComponent },
  { path: 'loginwithface', component: LoginwithfaceComponent },
  { path: 'main', component: MainpageComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
