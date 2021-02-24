import { action, makeObservable, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import { Vote } from 'types/Vote';
import { Api } from 'api';

const api = new Api();

class VoteStore {
  voteList: Vote[] = [];

  constructor() {
    makeObservable(this, {
      voteList: observable,
      getVoteList: action.bound,
    });
  }

  getVoteList = () => {
    runInAction(async () => {
      this.voteList = await api.getAll('vote');
    });
  }
}

export default createContext(new VoteStore());
