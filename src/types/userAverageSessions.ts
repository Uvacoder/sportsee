interface Session {
  day: number;
  sessionLength: number;
}

export interface UserAverageSessions {
  userId: number;
  sessions: Session[];
}
