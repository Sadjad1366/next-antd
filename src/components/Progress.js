import { Avatar, Card, Flex, Typography, Progress } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";
const { Text } = Typography;

function ProgressComp() {
  return (
    <Card title="Progress">
      <Flex vertical align="center">
        <Avatar size={64} src="/babi.jpg" />
        <Title level={4} style={{ marginBottom: 3, marginTop: 5 }}>
          Sadjad Ghasemi
        </Title>
        <Text type="secondary">Basic Member</Text>
      </Flex>
      <Text>Front-end</Text>
      <Progress percent={50} status="active" />
      <Text>Back-end</Text>
      <Progress percent={70} status="active" />
      <Text>Devops</Text>
      <Progress percent={40} status="active" />
      <Text>Testings</Text>
      <Progress percent={80} status="active" />
    </Card>
  );
}

export default ProgressComp;
