import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { authGuard } from '../services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: FeedComponent,
    canDeactivate: [authGuard]
  },
  {
    path: ":postId",
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
