import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayLists } from './play-lists';

@NgModule({
  declarations: [
    PlayLists,
  ],
  imports: [
    IonicPageModule.forChild(PlayLists),
  ],
})
export class PlayListsModule {}
