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
      {
        id: 3,
        date: '2025-01-03',
        time: '10:00',
        clientName: 'Alice Johnson',
        status: 'Completed',
      },
      {
        id: 4,
        date: '2025-01-04',
        time: '14:00',
        clientName: 'Michael Brown',
        status: 'Scheduled',
      },
      {
        id: 5,
        date: '2025-01-05',
        time: '08:30',
        clientName: 'Emily Davis',
        status: 'Scheduled',
      },
      {
        id: 6,
        date: '2025-01-06',
        time: '11:15',
        clientName: 'David Wilson',
        status: 'Cancelled',
      },
      {
        id: 7,
        date: '2025-01-07',
        time: '13:45',
        clientName: 'Sarah Miller',
        status: 'Completed',
      },
      {
        id: 8,
        date: '2025-01-08',
        time: '09:30',
        clientName: 'James Taylor',
        status: 'Scheduled',
      },
      {
        id: 9,
        date: '2025-01-09',
        time: '15:20',
        clientName: 'Laura Anderson',
        status: 'Scheduled',
      },
      {
        id: 10,
        date: '2025-01-10',
        time: '10:45',
        clientName: 'Robert Thomas',
        status: 'Completed',
      },
      {
        id: 11,
        date: '2025-01-11',
        time: '12:00',
        clientName: 'Jennifer Jackson',
        status: 'Scheduled',
      },
      {
        id: 12,
        date: '2025-01-12',
        time: '16:30',
        clientName: 'William White',
        status: 'Cancelled',
      },
      {
        id: 13,
        date: '2025-01-13',
        time: '08:15',
        clientName: 'Elizabeth Harris',
        status: 'Scheduled',
      },
      {
        id: 14,
        date: '2025-01-14',
        time: '14:50',
        clientName: 'Charles Martin',
        status: 'Completed',
      },
      {
        id: 15,
        date: '2025-01-15',
        time: '11:00',
        clientName: 'Linda Thompson',
        status: 'Scheduled',
      },
      {
        id: 16,
        date: '2025-01-16',
        time: '09:45',
        clientName: 'Matthew Garcia',
        status: 'Scheduled',
      },
      {
        id: 17,
        date: '2025-01-17',
        time: '13:30',
        clientName: 'Barbara Martinez',
        status: 'Completed',
      },
      {
        id: 18,
        date: '2025-01-18',
        time: '10:15',
        clientName: 'Daniel Robinson',
        status: 'Cancelled',
      },
      {
        id: 19,
        date: '2025-01-19',
        time: '15:00',
        clientName: 'Susan Clark',
        status: 'Scheduled',
      },
      {
        id: 20,
        date: '2025-01-20',
        time: '08:45',
        clientName: 'Paul Rodriguez',
        status: 'Scheduled',
      },
      {
        id: 21,
        date: '2025-01-21',
        time: '12:30',
        clientName: 'Karen Lewis',
        status: 'Completed',
      },
      {
        id: 22,
        date: '2025-01-22',
        time: '16:00',
        clientName: 'Mark Lee',
        status: 'Scheduled',
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
