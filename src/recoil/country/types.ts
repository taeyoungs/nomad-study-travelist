export interface Country {
  bucketlist: string[];
  completed: string[];
  liked: string[];
}

export type CountryType = 'bucketlist' | 'completed' | 'liked';
