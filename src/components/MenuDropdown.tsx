import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";

import './MenuDropdown.css';

function MenuDropdown() {
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <div className='candidate-by'>
              <p>Applied</p>
              <div className='placement-tag'>
                <p>1745 </p>
              </div>
            </div>
          ),
        },
        {
          key: '2',
          label: (
            <div className='candidate-by'>
              <p>Shortlisted</p>
              <div className='placement-tag'>
                <p>453</p>
              </div>
            </div>
          ),
        },
        {
          key: '3',
          label: (
            <div className='candidate-by'>
              <p>Technical Interview</p>
              <div className='placement-tag'>
                <p>123</p>
              </div>
            </div>
          ),
        },
        {
          key: '4',
          label: (
            <div className='candidate-by'>
              <p>Opportunity Browsing</p>
              <div className='placement-tag'>
                <p>243</p>
              </div>
            </div>
          ),
        },
        {
          key: '5',
          label: (
            <div className='candidate-by'>
              <p>Video Interview I</p>
              <div className='placement-tag'>
                <p>25</p>
              </div>
            </div>
          ),
        },
        {
          key: '6',
          label: (
            <div className='candidate-by'>
              <p>Video Interview II</p>
              <div className='placement-tag'>
                <p>25</p>
              </div>
            </div>
          ),
        },
        {
          key: '7',
          label: (
            <div className='candidate-by'>
              <p>Video Interview III</p>
              <div className='placement-tag'>
                <p>25</p>
              </div>
            </div>
          ),
        },
        {
          key: '8',
          label: (
            <div className='candidate-by'>
              <p>Offer</p>
              <div className='placement-tag'>
                <p>25</p>
              </div>
            </div>
          ),
        },
        {
          key: '9',
          label: (
            <div className='candidate-by'>
              <p>Withdrawn</p>
              <div className='placement-tag'>
                <p>25</p>
              </div>
            </div>
          ),
        },
    ];

    const menuProps = {
        items,
        onClick: () => {}
      };

    return (
        <Dropdown className='menu-dropdown' menu={menuProps}>
        <Button>
          <div className='dropdown-detail'>
            Opportunity Browsing
            <DownOutlined />
          </div>
        </Button>
      </Dropdown>
    );
}

export default MenuDropdown;
