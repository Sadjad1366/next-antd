import { RadarChartOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'

function AppHeader() {
  return (
    <Header className="!bg-white border-b border-[#f1f1f1] flex justify-between items-center sticky top-0">
      <div className='flex items-center gap-3'><RadarChartOutlined className='text-3xl' />
      <div>Academic</div>
      </div>
      <div className='flex items-center gap-3'> <Avatar size={36} src='/babi.jpg'/>
      <div>Sadjad Ghasemi</div></div>
    </Header>
  )
}

export default AppHeader
