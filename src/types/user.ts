export interface KeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

export interface User {
  id: number;
  userInfos: {
    firstName: string;
    lastName: string;
    age: number;
  };
  todayScore: number;
  keyData: KeyData;
}
