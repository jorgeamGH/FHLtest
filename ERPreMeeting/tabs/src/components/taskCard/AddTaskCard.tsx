import React from "react";
import { Input, Button, Card, Flex } from "@fluentui/react-northstar";
import "./Card.css";

interface IProps {
  propValue?: string;
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
  close: () => void;
}

export default function AddTaskCard(props: IProps) {
  const { tasks, setTasks, close, propValue = "" } = props;
  const [value, setValue] = React.useState<string>(propValue);
  const [error, setError] = React.useState<boolean>(false);
  const finish = () => {
    setValue("");
    close();
  };
  const submitAndClose = () => {
    if (tasks.find((task) => value === task)) {
      setError(true);
    } else {
      if (propValue) {
        setTasks((t) => {
          const index = tasks.findIndex((task) => task === propValue);
          return [...t.slice(0, index), value, ...t.slice(index + 1)];
        });
      } else {
        setTasks((tasks) => tasks.concat(value));
      }
      finish();
    }
  };
  return (
    <Card elevated inverted styles={{ height: "auto", width: "330px" }}>
      <Flex column gap="gap.medium" padding="padding.medium">
        <Input
          defaultValue={propValue}
          error={error}
          placeholder="Task name"
          onChange={(_, props) => {
            setError(false);
            setValue(props ? props.value : "");
          }}
          className="taskNameInput"
        />
        <div className="buttons">
          <Button
            content="Cancel"
            styles={{ alignSelf: "center" }}
            onClick={() => {
              finish();
            }}
          />
          <Button
            primary
            disabled={!value}
            content={propValue ? "Edit" : "Add"}
            styles={{ alignSelf: "center" }}
            onClick={() => {
              submitAndClose();
            }}
          />
        </div>
      </Flex>
    </Card>
  );
}
