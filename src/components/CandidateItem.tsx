import { Avatar, Checkbox, Divider } from 'antd';
import './CandidateItem.css';

interface CandidateItemProps {
    name: string,
    location: string,
    university: string,
    hashtags: string[],
    tags: string[]
}

function CandidateItem(props: CandidateItemProps) {
    return (
        <div className='candidate-box'>
            <Divider />
            <div className='row-detail'>
                <Checkbox />
                <Avatar className='candidate-avatar'>AS</Avatar>
                <div className='description'>
                    <p className='font-bold text-lg'>{props.name}</p>
                    <p className='font-medium'>{props.location}</p>
                    <p className='font-thin'>{props.university}</p>
                    <div className='taglist'>
                        {props.hashtags.map((hashtag) => (
                            <p className='hashtag-item secondary-color'>{hashtag}</p>
                        ))}
                    </div>
                    <div className='taglist'>
                        {props.tags.map((tag) => (
                            <div className='tag-item'>
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateItem;
