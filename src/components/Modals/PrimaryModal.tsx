import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { ReactNode } from "react";

type ModalProps = {
    title: string,
    modalOpened: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    onSubmit: VoidFunction,
    children: ReactNode,
}

const PrimaryModal = ({ title, modalOpened, setModalOpen, onSubmit, children }: ModalProps) => {
    return (
        <Dialog open={modalOpened} onClose={() => setModalOpen(false)}>
          <DialogTitle>
            {title}
          </DialogTitle>
          <DialogContent>
            {children}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => onSubmit()}>Submit</Button>
          </DialogActions>
        </Dialog>
    );
};

export default PrimaryModal;