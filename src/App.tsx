import { DownOutlined, ExclamationCircleOutlined, FileTextOutlined, MailOutlined, SearchOutlined, TagOutlined, UserAddOutlined, UserDeleteOutlined, WifiOutlined } from '@ant-design/icons';
import { Button, Checkbox, Divider, Dropdown, Input, MenuProps } from 'antd';
import CandidateItem from './components/CandidateItem';
import MenuDropdown from './components/MenuDropdown';
import Navbar from './components/Navbar';
import './App.css';

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
      <Navbar />  
      <div className='content'>
        <div className='content-column'>
          <div className='header'>
            <div className='program'>
              <h2 className='text-2xl font-semibold secondary-color'>London Internship Program</h2>
              <p className='font-light'>London</p>
            </div>
            <MenuDropdown />
            <div className='user-actions'>
              <Button className='action-button' icon={<TagOutlined className='action-icon' />} />
              <Button className='action-button' icon={<UserDeleteOutlined className='action-icon delete' />} />
              <Button className='action-button' icon={<UserAddOutlined className='action-icon' />} />
              <Button className='action-button' icon={<WifiOutlined className='action-icon' />} />
              <Button className='action-button' icon={<MailOutlined className='action-icon' />} />
              <Divider type='vertical' />
              <Dropdown.Button
                icon={<DownOutlined className='video-text' />}
                menu={{ items }}
                onClick={() => {}}
                className='video-button'
              >
              <p className='video-text'>Move To Video Interview I</p>
              </Dropdown.Button>
            </div>
          </div>
          <div className='candidates-area'>
            <div className='candidates-query'>
              <Input size='large' placeholder='Search by name, edu, exp or #tag' prefix={<SearchOutlined className='small-icon' />} suffix={<ExclamationCircleOutlined className='small-icon' />} />
              <div className='filter-list'>
                <div className='filter-description'>
                  <h5>Filters</h5>
                  <p>0 selected</p>
                </div>
                <Dropdown menu={{ items }}>
                  <Button className='filter-detail'>
                    <div className='filter-prefix'>
                      <FileTextOutlined />
                      <p>Personal Information</p>
                    </div>
                    <DownOutlined className='secondary-color' />
                  </Button>
                </Dropdown>
                <Dropdown menu={{ items }}>
                  <Button className='filter-detail'>
                    <div className='filter-prefix'>
                      <FileTextOutlined />
                      <p>Education</p>
                    </div>
                    <DownOutlined className='secondary-color' />
                  </Button>
                </Dropdown>
                <Dropdown  menu={{ items }}>
                  <Button className='filter-detail'>
                    <div className='filter-prefix'>
                      <FileTextOutlined />
                      <p>Work Experience</p>
                    </div>
                    <DownOutlined className='secondary-color' />
                  </Button>
                </Dropdown>
                <Dropdown  menu={{ items }}>
                  <Button className='filter-detail'>
                    <div className='filter-prefix'>
                      <FileTextOutlined />
                      <p>Activity Filter</p>
                    </div>
                    <DownOutlined className='secondary-color' />
                  </Button>
                </Dropdown>
                <Dropdown menu={{ items }}>
                  <Button className='filter-detail'>
                    <div className='filter-prefix'>
                      <FileTextOutlined />
                      <p>Advanced Filter</p>
                    </div>
                  </Button>
                </Dropdown>
              </div>
            </div>
            <div className='candidates-results'>
              <div className='candidates-overview'>
                <div className='total-candidates'>
                  <Checkbox />
                  <h4 className='secondary-color'>247 Candidates</h4>
                </div>
                <div className='candidates-categories'>
                  <h4 className='secondary-color'>Qualified</h4>
                  <Divider type='vertical' />
                  <div className='category-value'>
                    <p>Task</p>
                    <div className='value-bubble'>
                      <p>25</p>
                    </div>
                  </div>
                  <Divider type='vertical' />
                  <div className='category-value'>
                    <p>Disqualified</p>
                    <div className='value-bubble'>
                      <p>78</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='candidates-details'>
                <CandidateItem
                  name='Aaliyah Sanderson'
                  location='Riyadh, Saudi Arabia'
                  university='Bachelor - Cambridge University (2023-2023)'
                  hashtags={['#top_candidate', '#top_candidate']}
                  tags={['New York', 'Marketing', 'London']}
                />
                <CandidateItem
                  name='John Doe'
                  location='Bostom, USA'
                  university='Bachelor - MIT (2023-2023)'
                  hashtags={['#top_candidate', '#top_candidate']}
                  tags={['New York', 'Marketing', 'London']}
                />
                <CandidateItem
                  name='Thomas Matt'
                  location='Edinburgh, UK'
                  university='Bachelor - Harvard University (2023-2023)'
                  hashtags={['#top_candidate', '#top_candidate']}
                  tags={['New York', 'Marketing', 'London']}
                />
                <CandidateItem
                  name='Kamilia Smith'
                  location='London, UK'
                  university='Bachelor - Boston University (2023-2023)'
                  hashtags={['#top_candidate', '#top_candidate']}
                  tags={['New York', 'Marketing', 'London']}
                />
                <CandidateItem
                  name='Roy Jade'
                  location='Cambridge, UK'
                  university='Bachelor - Yale (2023-2023)'
                  hashtags={['#top_candidate', '#top_candidate']}
                  tags={['New York', 'Marketing', 'London']}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
