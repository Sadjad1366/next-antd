import { Space, Table, Tag } from "antd";
import React from "react";

function LearningTable() {
  const columns = [
    {
      title: "Course name",
      dataIndex: "courseName",
      key: "courseName",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, text) => <Tag color={text.status === "completed"? "green" : "blue"}>{text.status}</Tag>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
            <Space size="middle">
                  <a>View</a>
                  <a>Delete</a>
            </Space>
      ),
    },
  ];
  const data = [
    {
      id: "1",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "Mid-Level",
      status: "completed",
    },
      {
      id: "2",
      courseName: "Phyton",
      duration: "60 hours",
      level: "Mid-Level",
      status: "InProgress",
    },
      {
      id: "3",
      courseName: "UI/UX Design",
      duration: "50 hours",
      level: "Elementary",
      status: "completed",
    },
      {
      id: "4",
      courseName: "AngularJs",
      duration: "80 hours",
      level: "Mid-Level",
      status: "InProgress",
    },
      {
      id: "5",
      courseName: "Design Accessibility",
      duration: "5 hours",
      level: "mid",
      status: "completed",
    },
  ];
  return <Table className="mt-4" columns={columns} dataSource={data} />;
}

export default LearningTable;
