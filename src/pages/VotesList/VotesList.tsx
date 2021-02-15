import React, { FC, ReactElement } from 'react';
import { Layout, List, Row, Col } from 'antd';
import { VoteCard } from 'components/VoteCard/VoteCard';
import { Vote } from 'types/Vote';
import './VotesList.css';

const votes: Vote[] = [
  {
    title: 'Голосовалка №1',
    variants: [
      {
        id: '12221',
        name: 'Томатный сок',
        value: 0
      },
      {
        id: '16654',
        name: 'Яблочный сок',
        value: 50
      }
    ]
  },
  {
    title: 'Голосовалка №2',
    variants: [
      {
        id: '6564',
        name: 'Томатный сок',
        value: 75
      },
      {
        id: '23323',
        name: 'Яблочный сок',
        value: 50
      }
    ]
  }
];

export const VotesList: FC = (): ReactElement => {
  return (
    <Layout
      style={{ height: '100vh' }}
    >
      <Row>
        <Col span={16} offset={4}>
          <List
            dataSource={votes}
            renderItem={vote => <VoteCard vote={vote} />}
          />
        </Col>
      </Row>
    </Layout>
  )
};