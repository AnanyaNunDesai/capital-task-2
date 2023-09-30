// import React from 'react';
import './App.css';
import { CarryOutOutlined, 
DownOutlined, ExclamationCircleOutlined, FileTextOutlined, HeartOutlined, 
HomeOutlined, LeftOutlined, MailOutlined, ReadOutlined, SearchOutlined, 
SettingOutlined, ShareAltOutlined, TagOutlined, UserDeleteOutlined, WifiOutlined,
UserAddOutlined , TeamOutlined} from '@ant-design/icons';
import { Button, Dropdown, Input, MenuProps, Space } from 'antd';

//unused:  CheckCircleOutlined, CloseCircleOutlined, UserOutlined, 

function App() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p>Placeholder</p>
      ),
    }
  ];

  return (
    <div>
      <div className='navbar'>
        <div className='nav-section'>
          <div className='circle icon' />
          <HomeOutlined className='icon active' />
          <TeamOutlined  className='icon' />
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
              <h2 className='secondary-color'>London Internship Program</h2>
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
                <UserDeleteOutlined className='small-icon delete' />
              </button>
              <button className='action-button'>
                <UserAddOutlined  className='small-icon' />
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
          <div className='candidate-query'></div>
            <Input className='medium-length' size='large' placeholder='Search by name, edu, exp or #tag' prefix={<SearchOutlined className='small-icon' />} suffix={<ExclamationCircleOutlined className='small-icon' />} />
            <div className='filter-list'>
              <div className='medium-length filter-description'>
                <h5>Filters</h5>
                <p>0 selected</p>
              </div>
              <Dropdown menu={{ items }} className='medium-length'>
                <Button className='filter-detail'>
                  <div className='filter-prefix'>
                    <FileTextOutlined />
                    <p>Personal Information</p>
                  </div>
                  <DownOutlined className='secondary-color' />
                </Button>
              </Dropdown>
              <Dropdown menu={{ items }} className='medium-length'>
                <Button className='filter-detail'>
                  <div className='filter-prefix'>
                    <FileTextOutlined />
                    <p>Education</p>
                  </div>
                  <DownOutlined className='secondary-color' />
                </Button>
              </Dropdown>
              <Dropdown  menu={{ items }} className='medium-length'>
                <Button className='filter-detail'>
                  <div className='filter-prefix'>
                    <FileTextOutlined />
                    <p>Work Experience</p>
                  </div>
                  <DownOutlined className='secondary-color' />
                </Button>
              </Dropdown>
              <Dropdown  menu={{ items }} className='medium-length'>
                <Button className='filter-detail'>
                  <div className='filter-prefix'>
                    <FileTextOutlined />
                    <p>Activity Filter</p>
                  </div>
                  <DownOutlined className='secondary-color' />
                </Button>
              </Dropdown>
              <Dropdown menu={{ items }} className='medium-length'>
                <Button className='filter-detail'>
                  <div className='filter-prefix'>
                    <FileTextOutlined />
                    <p>Advanced Filter</p>
                  </div>
                </Button>
              </Dropdown>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
