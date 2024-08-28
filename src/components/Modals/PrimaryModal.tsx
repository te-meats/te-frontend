import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ReactNode } from "react";

type ModalProps = {
    title: string,
    modalOpened: boolean,
    onClose: () => void, 
    onSubmit: () => void,
    children: ReactNode,
}

const PrimaryModal = ({ title, modalOpened, onClose, onSubmit, children }: ModalProps) => {
    return (
        <Dialog open={modalOpened} onClose={() => onClose()}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => onClose()}>Cancel</Button>
            <Button onClick={() => onSubmit()}>Submit</Button>
          </DialogActions>
        </Dialog>
    );
};

export default PrimaryModal;