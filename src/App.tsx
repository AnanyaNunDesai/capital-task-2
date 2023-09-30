import React from 'react';
import './App.css';
import { CarryOutOutlined, CheckCircleOutlined, CloseCircleOutlined, DownOutlined, FileTextOutlined, HeartOutlined, HomeOutlined, LeftOutlined, MailOutlined, ReadOutlined, SettingOutlined, ShareAltOutlined, TagOutlined, UserOutlined, WifiOutlined } from '@ant-design/icons';

function App() {
  return (
    <div>
      <div className='navbar'>
        <div className='nav-section'>
          <div className='circle icon' />
          <HomeOutlined className='icon active' />
          <UserOutlined className='icon' />
          <CarryOutOutlined className='icon' />
          <ShareAltOutlined className='icon' />
          <FileTextOutlined className='icon' />
          <ReadOutlined className='icon' />
          <HeartOutlined className='icon' />
          <LeftOutlined className='tiny-icon' />
          <p></p>
        </div>
        <div className='nav-section'>
        <SettingOutlined className='icon' />
        <div className='circle icon' />
        </div>
      </div>
      <div className='content'>
        <div className='content-column'>
          <div className='header'>
            <div className='program'>
              <h2 className='program-title'>London Internship Program</h2>
              <p>London</p>
            </div>
            <div className='dropdown'>
              <div className='drop-row'>
                <h4 className='selectable'>Opportunity Browsing</h4>
                <DownOutlined className='small-icon selectable' />
              </div>
            </div>
            <div className='user-actions'>
              <button className='action-button'>
                <TagOutlined className='small-icon' />
              </button>
              <button className='action-button'>
                <CloseCircleOutlined className='small-icon delete' />
              </button>
              <button className='action-button'>
                <CheckCircleOutlined className='small-icon' />
              </button>
              <button className='action-button'>
                <WifiOutlined className='small-icon' />
              </button>
              <button className='action-button'>
                <MailOutlined className='small-icon' />
              </button>
              <div className='dividing-bar' />
              <button className='interview-button'>
                <p>Move To Video Interview I</p>
                <div className='button-bar' />
                <DownOutlined className='tiny-icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
