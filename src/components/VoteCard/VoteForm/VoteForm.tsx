import React, { FC, ReactElement } from 'react';
import { Form, Radio, Button } from 'antd';
import { Variant, VoteMode } from 'types/Vote';
import './VoteForm.css';


export interface VoteFormProps {
  variants: Variant[];
  setModeView: React.Dispatch<React.SetStateAction<VoteMode>>;
}

export const VoteForm: FC<VoteFormProps> = (props): ReactElement => {
  const { variants, setModeView } = props;

  const renderVariant = (variant: Variant): ReactElement => {
    const { id, message } = variant;

    return (
      <Radio
        key={id}
        value={id}
        className="vote-group-item"
      >
        {message}
      </Radio>
    );
  }

  return (
    <Form
      name="basic"
      className="vote-form"
    >
      <Radio.Group className="vote-group">
        {variants.map(variant => renderVariant(variant))}
      </Radio.Group>

      <Button.Group className="vote-card-footer">
        <Button type="primary" htmlType="submit">
          Проголосовать
      </Button>
        <Button onClick={() => setModeView(VoteMode.RESULTS)}>
          Посмотреть результаты
      </Button>
      </Button.Group>
    </Form>
  )
}