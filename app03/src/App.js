import './css/footer.css';
import './css/header.css';
import './css/layout.css';
import './css/main.css';
import './css/mediaqueries.css';
import './css/nav.css';
import Mynav from './com/Mynav';
import Myheader from './com/Myheader';
import Mymain from './com/Mymain';
import Myfooter from './com/Myfooter';

function App() {
  return (
    <div>
      <Mynav />
      <Myheader />
      <Mymain />
      <Myfooter />
    </div>
  );
}

export default App;
