import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Select } from '@material-ui/core';
import './Modal.css'
import './Home.css'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const  ModalTwo = (props) =>{
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    console.log(props)

    const styles = (theme) => ({
        root: {
            justifyContent: 'center',
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        }
    });

    const DialogTitle = withStyles(styles)((props) => {
        const { children, classes, onClose, ...other } = props;
        return (
            <MuiDialogTitle disableTypography className={classes.root} {...other}>
                <Typography variant="h6">{children}</Typography>
                {onClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </MuiDialogTitle>
        );
    });
    useEffect(() => {

    }, []);


    const DialogContent = withStyles((theme) => ({
        root: {
            padding: theme.spacing(1),
            display: "flex",
            gridTemplateColumns: "1fr 1fr"
        },
    }))(MuiDialogContent);

    const DialogActions = withStyles((theme) => ({
        root: {
            margin: 0,
            padding: theme.spacing(1)
        },

    }))(MuiDialogActions);


    const handleClickOpen = () => {
        setOpen(!open);
    };
    const handleClose = () => {
        console.log("hi")
        setOpen(!open)

    };

    const handleFavorites = () =>{

    }

    return (

      <div>
      <div className="row_poster">
        <img  onClick={handleClickOpen} key={props.animes.id}  src={props.animes.image_url}  />
        </div>

       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
           {props.animes.title}
         </DialogTitle>

         <img className="image-Dialog" src={props.animes.image_url}/>

         <DialogContent dividers>

           <Typography gutterBottom>

             <p>
             <b>Description:
             </b>
             <br></br> {props.animes.description}
            </p>
             <br></br>
             <p><b>Genre:</b> {props.animes.genre}</p>
             <br></br>
             <p><b>Episodes:</b> {props.animes.episodes}</p>

           </Typography>


         </DialogContent>
         <div>
         <Button autoFocus onClick={handleFavorites} color="primary">
           Add to favorites
          </Button>

           <Button autoFocus href={props.animes.url} color="primary" className="buttonRight">
             Watch {props.animes.title}
           </Button>
           </div>

       </Dialog>
     </div>


    );
}

export default ModalTwo;
