import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal({title, description, episodes, genre, imageUrl, url}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{title}</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


// import React from 'react'
// import './Modal.css'
// function Modal({title, description, genre,episodes,image_url,url,closeModal}){
//
//
//
//     return (
//       <div className="modalBackground">
//       <div className="modalContainer">
//       <div className="fas fa-times topCloseButton" onClick={() => closeModal(!closeModal)}>
//       </div>
//         <div className="Title">
//           <h1>{title}</h1>
//         </div>
//         <div className="Image">
//         <img src={image_url} alt=''/>
//         </div><br></br>
//           <div className="Synopsis">
//           <p>{description}</p>
//             </div>
//           <div className="Episodes">
//           <p>{episodes} episodes</p>
//             </div>
//           <div className="ButtonLink">
//           <button type="submit">Watch</button>
//           </div>
//       </div>
//       </div>
//
//     )
//
// }
//
// export default Modal
