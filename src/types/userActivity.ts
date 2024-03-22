interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

export interface UserActivity {
  userId: number;
  sessions: Session[];
}
