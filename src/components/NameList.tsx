import * as React from "react";
import { NameListItem } from "./styles";

type NameListProps = {
  handleDelete: (idx: number) => void;
  names: string[];
};

export const NameList = ({ handleDelete, names }: NameListProps) => (
  <>
    {names.map((name, idx) => (
      <NameListItem key={idx}>
        <div>{name}</div>
        <div onClick={() => handleDelete(idx)}>&#10005;</div>
      </NameListItem>
    ))}
  </>
);
