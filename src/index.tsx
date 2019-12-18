import * as React from "react";
import { useState, ChangeEvent } from "react";
import { render } from "react-dom";
import _ from "lodash";
import {
  GlobalStyle,
  AppContainer,
  PageContainer,
  NameInputContainer,
  NameListContainer,
  NameSelectContainer
} from "./styles";
import { NameInput, NameList, NameSelect } from "./components";

const App = () => {
  const [names, setNames] = useState<string[]>([]);
  const [displayName, setDisplayName] = useState<string>("");
  const [fieldName, setFieldName] = useState<string>("");

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFieldName(value);
  };

  const handleCreate = (name: string) => {
    setNames([...names, name]);
    setFieldName("");
  };

  const handleDelete = (idx: number) => {
    const newNames = names.filter((_, i) => i !== idx);
    setNames(newNames);
    setDisplayName("");
  };

  const handleSelect = () => {
    let randomName = displayName;
    while (randomName === displayName) {
      const idx = Math.floor(Math.random() * names.length);
      randomName = names[idx];
    }
    setDisplayName(randomName);
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <PageContainer>
          <NameInputContainer>
            <NameInput
              handleCreate={handleCreate}
              handleInputChange={handleInputChange}
              value={fieldName}
              disabled={fieldName === ""}
            />
          </NameInputContainer>
          {!_.isEmpty(names) && (
            <>
              <h2>Names:</h2>
              <hr />
              <NameListContainer>
                <NameList names={names} handleDelete={handleDelete} />
              </NameListContainer>
              <hr />
              <NameSelectContainer>
                <NameSelect
                  handleSelect={handleSelect}
                  displayName={displayName}
                />
              </NameSelectContainer>
            </>
          )}
        </PageContainer>
      </AppContainer>
    </>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
