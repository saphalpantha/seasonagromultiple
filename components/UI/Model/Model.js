import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './Model.module.css';

export const Backdrop = ({children, onClick}) => {
  return <div onClick={onClick} className={classes.backdrop} />
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = typeof document !== 'undefined' ?  document.getElementById('model') : null;

const Modal = ({children,onClick}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>
          
          <div onClick={onClick} className='bg-orange-500 w-[3rem] flex justify-center items-center  h-[3rem]  rounded-full absolute    right-[2%]  z-50 hover:rotate-[360deg] hover:bg-orange-900 duration-300 cursor-pointer'>
      <h1 className='text-4xl  left-4 text-white  font-bold text-center'>✘</h1>
    </div>
          {children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
