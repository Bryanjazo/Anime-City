import React from 'react'
import './Modal.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function ModalHome({title, description, genre,episodes,imageUrl,url,closeModal}){

  const classes = useStyles();

    return (

    <div className="modalBackground">
      <Modal
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"

               on
          >
               <div className={classes.paper}>
                   <h2>Simple React Modal</h2>
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim, non pharetra est ultrices et.
                   </p>
               </div>
           </Modal>
    </div>
    )

}

export default Modal
