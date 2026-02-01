import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  httpClient = inject(HttpClient);

  // for mock returns
  notes: Note[] = [];

  getClients(): Observable<Client[]> {
    // if we had real api...
    // return this.httpClient.get<Client[]>('.../api/clients');

    // return mock data
    const clients: Client[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Bob Johnson' },
      { id: 4, name: 'Alice Williams' },
      { id: 5, name: 'Charlie Brown' },
      { id: 6, name: 'David Jones' },
      { id: 7, name: 'Emma Davis' },
      { id: 8, name: 'Frank Miller' },
      { id: 9, name: 'Grace Wilson' },
      { id: 10, name: 'Henry Moore' },
    ];
    return of(clients);
  }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  getNote(noteId: number): Observable<Note> {
    // if we had real api...
    // return this.httpClient.get<Note>(`.../api/note/${noteId}`)

    const localNote = this.notes.find((note) => note.id === noteId);
    if (localNote) {
      return of();
    }

    const noteMock: Note = {
      id: noteId,
      title: 'test',
      content: 'content',
      clientId: 1,
      createdAt: '2025-01-01',
      tags: ['progress', 'anxiety'],
    };
    return of(noteMock);
  }

  postNote(note: Note): Observable<Note[]> {
    const localNote: Note = {
      ...note,
      id: this.notes.length + 1,
      clientId: (this.notes.length + 1) * 100,
      createdAt: new Date().toISOString(),
    };

    this.notes.push(localNote);

    return of(this.notes);
  }

  putNote(note: Note): Observable<Note[]> {
    const localNote = this.notes.findIndex((n) => n.id === note.id);

    if (localNote !== -1) {
      this.notes[localNote] = note;
    }

    return of(this.notes);
  }
}
