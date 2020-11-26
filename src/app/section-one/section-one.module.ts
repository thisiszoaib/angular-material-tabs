import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionOneComponent } from './section-one/section-one.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SectionOneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionOneComponent }]),
    MatCardModule,
    MatButtonModule,
  ],
})
export class SectionOneModule {}
