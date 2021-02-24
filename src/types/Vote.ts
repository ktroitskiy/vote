export enum VoteMode {
  VOTE = 'vote',
  RESULTS = 'results'

};

export type Variant = {
  id: string;
  message: string;
  voteNumber: number;
};

export interface Vote {
  name: string;
  variants: Variant[];
};