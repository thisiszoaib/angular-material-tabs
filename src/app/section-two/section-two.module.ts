import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTwoComponent } from './section-two/section-two.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SectionTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionTwoComponent }]),
    MatListModule,
  ],
})
export class SectionTwoModule {}
