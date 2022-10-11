import './css/footer.css';
import './css/header.css';
import './css/layout.css';
import './css/main.css';
import './css/mediaqueries.css';
import './css/nav.css';
import MyNav from './com/MyNav';
import MyHeader from './com/MyHeader';
import MyMain from './com/MyMain';
import MyFooter from './com/MyFooter';

function App() {
  return (
    <div>
      <MyNav />
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  );
}

export default App;
