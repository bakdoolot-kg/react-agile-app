import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {observer} from "mobx-react-lite";

function TaskDialog({task, open, handleClose}) {

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{task?.title}</DialogTitle>

      <DialogContent>
          {task?.description}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()}>Cancel</Button>
        <Button >Edit</Button>
      </DialogActions>
    </Dialog>
  )
}

export default observer(TaskDialog)