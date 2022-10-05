import './My.css';
import MyTime from './MyTime';

function MyTick() {
  return (
    <div>
      <div className='name'>
        <h2>현재시각</h2>
      </div>
      <MyTime />
    </div>
  );
}

export default MyTick;
