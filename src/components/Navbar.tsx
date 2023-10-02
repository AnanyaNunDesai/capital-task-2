import { HomeOutlined, TeamOutlined, CarryOutOutlined, ShareAltOutlined, FileTextOutlined, ReadOutlined, HeartOutlined, LeftOutlined, SettingOutlined } from "@ant-design/icons";
import './Navbar.css';
import { Button } from "antd";

function Navbar() {
    return (
        <div className='navbar'>
          <div className='nav-section'>
            <div className='circle-icon' />
            <div className='active'>
                <Button type='text' size='large' icon={<HomeOutlined />} />
            </div>
            <Button type='text' size='large' icon={<TeamOutlined />} />
            <Button type='text' size='large' icon={<CarryOutOutlined />} />
            <Button type='text' size='large' icon={<ShareAltOutlined />} />
            <Button type='text' size='large' icon={<FileTextOutlined />} />
            <Button type='text' size='large' icon={<ReadOutlined />} />
            <Button type='text' size='large' icon={<HeartOutlined />} />
            <Button type='text' size='small' icon={<LeftOutlined />} />
          </div>
          <div className='nav-section'>
          <Button type='text' size='large' icon={<SettingOutlined />} />
            <div className='circle-icon' />
          </div>
        </div>
    );
}

export default Navbar;
