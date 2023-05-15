import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WriteComponent } from './pages/write/write.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "tag/:topic", component: HomeComponent },
  { path: "write", component: WriteComponent },
  { path: "blog/:id", component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
