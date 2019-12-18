import * as React from "react";
import { Button } from "./styles";

type NameSelectProps = {
  handleSelect: () => void;
  displayName: string;
};

export const NameSelect = ({ displayName, handleSelect }: NameSelectProps) => (
  <>
    <div>
      <Button onClick={handleSelect}>Select Name</Button>
    </div>
    {displayName && (
      <div>
        You have selected <strong>{displayName}</strong>
      </div>
    )}
  </>
);
