import {
  AfterViewInit,
  Component,
  inject,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  standalone: false,
})
export class AppointmentListComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  private appointmentService = inject(AppointmentService);
  private destroySubject = new Subject();
  public dataSource = new MatTableDataSource<Appointment>([]);
  public displayedColumns: string[] = ['date', 'time', 'clientName', 'status'];

  // Results length is handled by dataSource automatically for client-side pagination,
  // but if we want to show it explicitly or start empty we can keep track.
  // However, usually dataSource.data handles it.
  // We'll use dataSource for the table.
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.appointmentService
      .getAppointments()
      .pipe(
        takeUntil(this.destroySubject),
        catchError(() => of([])),
      )
      .subscribe((data) => {
        this.isLoadingResults = false;
        this.dataSource.data = data;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.destroySubject.complete();
    this.destroySubject.unsubscribe();
  }

  trackByAppointmentId(_index: number, item: Appointment): number {
    return item.id;
  }
}
