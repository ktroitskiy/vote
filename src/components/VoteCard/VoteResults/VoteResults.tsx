import React, { FC, ReactElement } from 'react';
import { Progress, Button } from 'antd';
import { Variant, VoteMode } from 'types/Vote';
import './VoteResults.css';

export interface VoteResultsProps {
  variants: Variant[];
  setModeView: React.Dispatch<React.SetStateAction<VoteMode>>;
}

export const VoteResults: FC<VoteResultsProps> = (props): ReactElement => {
  const { variants, setModeView } = props;

  const renderVariant = (variant: Variant): ReactElement => {
    const { voteNumber } = variant;

    return <Progress percent={voteNumber} />
  }

  return (
    <>
      <div className="vote-results">
        {variants.map(variant => renderVariant(variant))}
      </div>
      <Button.Group className="vote-card-footer">
        <Button onClick={() => setModeView(VoteMode.VOTE)}>
          Перейти к голосованию
        </Button>
      </Button.Group>
    </>
  );
}