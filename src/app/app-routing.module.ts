import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';

const routes: Routes = [
  { path: '', component: AppointmentListComponent },
  { path: 'notes', component: NoteEditorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
