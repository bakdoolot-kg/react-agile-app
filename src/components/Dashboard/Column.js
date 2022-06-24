import {observer} from "mobx-react-lite";
import {Draggable} from "react-beautiful-dnd";
import {Card} from "@mui/material";
import Task from "./Task";
import {useCallback, useState} from "react";
import TaskDialog from "../TaskDialog";

function getItemStyle(isDragging, draggableStyle) {
  return {
    display: "flex",
    alignItems: "end",
    justifyContent: "space-between",
    padding: 8,
    marginBottom: 8,
    cursor: "pointer",
    ...draggableStyle
  }
}

function Column({section}) {
  const [taskToSection, setTaskToSection] = useState(null)

  const handleCloseDialog = useCallback(() => {
    setTaskToSection(null)
  }, [setTaskToSection])

  return (
    <div>
      {section?.tasks?.map((task, index) => {
        return (
          <div key={task.id}>
            <Draggable draggableId={task.id} index={index}>
              {(provided, snapshot) => (
                <Card
                  onClick={() => {setTaskToSection(section.id)}}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                >
                  <Task task={task}/>
                </Card>
              )}
            </Draggable>

            <TaskDialog
              task={task}
              open={!!taskToSection}
              handleClose={handleCloseDialog}
            />
          </div>
        )
      })}
    </div>
  )
}

export default observer(Column)