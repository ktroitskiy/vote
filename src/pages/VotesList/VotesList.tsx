import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { Layout, List, Row, Col } from 'antd';
import { observer } from 'mobx-react-lite';
import { VoteCard } from 'components/VoteCard/VoteCard';
import { Vote } from 'types/Vote';
import VoteStore from 'store/VoteStore';
import './VotesList.css';

export const VotesList: FC = observer((): ReactElement => {
  const { voteList, getVoteList } = useContext(VoteStore);
  
  useEffect(() => {
    getVoteList();
  }, [getVoteList])

  return (
    <Layout
      style={{ height: '100vh' }}
    >
      <Row>
        <Col span={16} offset={4}>
          <List
            dataSource={voteList as Vote[]}
            renderItem={vote => <VoteCard vote={vote} />}
          />
        </Col>
      </Row>
    </Layout>
  )
});