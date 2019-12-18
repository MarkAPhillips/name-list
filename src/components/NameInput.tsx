import * as React from "react";
import { ChangeEvent } from "react";
import { Input, Button } from "./styles";

type NameInputProps = {
  handleCreate: (name: string) => void;
  handleInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled: boolean;
};

export const NameInput = ({
  handleCreate,
  handleInputChange,
  value,
  disabled
}: NameInputProps) => (
  <form autoComplete="off">
    <Input
      type="text"
      id="name"
      value={value}
      placeholder="Enter Your Name"
      onChange={handleInputChange}
    />
    <Button onClick={() => handleCreate(value)} disabled={disabled}>
      Add
    </Button>
  </form>
);
