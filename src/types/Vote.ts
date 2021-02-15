export enum VoteMode {
  VOTE = 'vote',
  RESULTS = 'results'

};

export type Variant = {
  id: string;
  name: string;
  value: number;
};

export interface Vote {
  title: string;
  variants: Variant[];
};