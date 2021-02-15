import React, { FC, ReactElement, useState } from 'react';
import { Card } from 'antd';
import { Vote, VoteMode } from 'types/Vote';
import { VoteForm } from './VoteForm/VoteForm';
import { VoteResults } from './VoteResults/VoteResults';
import './VoteCard.css';

export interface VoteCardProps {
  vote: Vote;
};

export const VoteCard: FC<VoteCardProps> = (props): ReactElement => {
  const [ mode, setMode ] = useState<VoteMode>(VoteMode.VOTE);
  const { vote } = props;
  const { title, variants } = vote;

  const getActualRender = (): ReactElement => {
    if (mode === VoteMode.VOTE) {
      return <VoteForm variants={variants} setModeView={setMode} />
    }

    if (mode === VoteMode.RESULTS) {
      return <VoteResults variants={variants} setModeView={setMode} />
    }

    return <div></div>
  };

  return (
    <div className="vote-card">
      <Card
        title={title}
      >
        {getActualRender()}
      </Card>
    </div>
  );
}