interface UserPerformanceKind {
  1: "cardio";
  2: "energy";
  3: "endurance";
  4: "strength";
  5: "speed";
  6: "intensity";
}

interface UserPerformanceData {
  value: number;
  kind: keyof UserPerformanceKind;
}

export interface UserPerformance {
  userId: number;
  kind: UserPerformanceKind;
  data: UserPerformanceData[];
}
