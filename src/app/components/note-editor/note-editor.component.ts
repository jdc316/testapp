import { Component, inject, signal } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NotesService } from 'src/app/services/notes.service';
import { debounce, form, FormField, required } from '@angular/forms/signals';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ErrorStateMatcher } from '@angular/material/core';

// We have to do it this way because reset on the form doesnt reset it to pristine...ugh
export class TouchedErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null,
  ): boolean {
    return !!(control && control.invalid && control.touched);
  }
}

@Component({
  selector: 'app-note-editor',
  imports: [
    MatFormField,
    MatInput,
    FormField,
    CommonModule,
    MatLabel,
    MatButtonModule,
    MatFormFieldModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [
    NotesService,
    { provide: ErrorStateMatcher, useClass: TouchedErrorStateMatcher },
  ],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.scss',
  standalone: true,
})
export class NoteEditorComponent {
  notesService = inject(NotesService);

  notes$ = this.notesService.getNotes();

  note = signal<Note>({
    title: '',
    content: '',
    tags: [] as string[],
  } satisfies Note);

  noteForm = form(this.note, (n) => {
    debounce(n.title, 500);
    required(n.title, { message: 'Title is required' });
    debounce(n.content, 500);
    required(n.content, { message: 'Content is required' });
    debounce(n.tags, 500);
  });

  removeTag(tag: string) {
    this.note.update((n) => {
      const indx = n.tags.findIndex((t) => t === tag);
      if (indx) {
        n.tags.splice(indx, 1);
      }
      n.tags = [...n.tags];
      return n;
    });
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.note.update((n) => {
        n.tags = [...n.tags, value];
        return n;
      });
    }

    event.chipInput!.clear();
  }

  editNote(note: Note) {
    this.note.set({
      ...note,
      tags: note.tags || [],
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const note = this.note();

    if (note.id) {
      console.log('Updating note: ', note);
      this.notesService.putNote(note);
    } else {
      console.log('Adding note: ', note);
      this.notesService.postNote(note);
    }

    this.note.set({
      title: '',
      content: '',
      tags: [] as string[],
    });
    this.noteForm().reset();
  }
}
