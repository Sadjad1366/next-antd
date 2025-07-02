import { Avatar, Card, Flex, Typography } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
const {Text} = Typography;

function Progress() {
  return <Card title="Progress">
      <Flex vertical align='center'>
            <Avatar size={64} src="/babi.jpg" />
            <Title level={4} style={{marginBottom:3, marginTop:5}}>Sadjad Ghasemi</Title>
            <Text type='secondary'>Basic Member</Text>
      </Flex>
  </Card>
}

export default Progress
