import './My.css';

function MyTime() {
  return (
    <div className='clock'>
      <h2>{new Date().toLocaleTimeString()}</h2>
      {/* // toLocaleTimeString : node.js에서 지원하는 함수 */}
    </div>
  );
}

export default MyTime;
