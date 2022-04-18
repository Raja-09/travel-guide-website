import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Please check your email...");
      })
      .catch(function (e) {
        console.log(e);
      });

    handleClose();
    // console.log(email);
  };
  return (
    <div className="mx-3 forgotLink">
      <a onClick={handleClickOpen}>Forgot Password?</a>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address for resetting your password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleReset}>Reset</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
