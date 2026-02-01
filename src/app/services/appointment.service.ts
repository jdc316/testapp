import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private httpClient = inject(HttpClient);

  getAppointments(): Observable<Appointment[]> {
    // Return mocked API request
    const appointments: Appointment[] = [
      {
        id: 1,
        date: '2025-01-01',
        time: '09:00',
        clientName: 'John Doe',
        status: 'Scheduled',
      },
      {
        id: 2,
        date: '2025-01-02',
        time: '09:00',
        clientName: 'John Smith',
        status: 'Cancelled',
      },
    ];
    return of(appointments);

    // NOTE: this is what we would actually use when calling an api
    // return this.httpClient.get<Appointment[]>('https://.../api/appointments', {
    //   headers: {
    //     Accept: 'application/json',
    //   },
    // });
  }
}
