import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionThreeComponent } from './section-three/section-three.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [SectionThreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionThreeComponent }]),
    MatExpansionModule,
  ],
})
export class SectionThreeModule {}
