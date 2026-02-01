export interface Appointment {
  id: number;
  date: string; // ISO date string, e.g., "2026-02-15"
  time: string; // e.g., "14:30"
  clientName: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}
