import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetitionCardComponent } from './petition-card.component';


@NgModule({
  declarations: [
    PetitionCardComponent
  ],
  imports: [
    CommonModule
  ],exports:[PetitionCardComponent]
})
export class PetitionCardModule { }
