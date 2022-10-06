import '../css/layout.css';
import '../css/mediaqueries.css';
import '../css/main.css';
import imghtml from '../img/html.png';

function MySection(props) {
  return (
        <section>
            <div><img src={imghtml} alt="HTML이미지" /></div>
            <h1>{props.h1}</h1>
            <div>{props.contents}</div>
        </section>
  );
}

export default MySection;
