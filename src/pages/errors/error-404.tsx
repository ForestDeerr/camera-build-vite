import { Link } from 'react-router-dom';

function Error404(): JSX.Element {
  return(
    <div className="modal is-active">
      <div className="modal__content" >
        <h1 className='title title--h4' style={{fontSize : '45px', color: '#ed6041'}}>ERROR 404</h1>
        <h1 className='title title--h4'><Link to={'/'}>на главную страницу</Link></h1>
      </div>
    </div>
  );
}
export default Error404;
