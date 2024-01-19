import React from "react";
import InputField from "./InputField";
import SwitchField from "./SwitchField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";

const GroupField = ({ schema }) => {
  // console.log(schemas);
  return (
    <>
      {schema.subParameters.map((item, index) => {
        return <>
          {/* {item.uiType === "" && <InputField schema={item} />} */}
        {console.log(schema)}
          {schema.uiType === "Input" && <InputField schema={item} key={schema.sort} />}

          {schema.uiType === "Radio" && <RadioField schema={item} key={schema.sort}/>}
            {/* {schema.uiType === "Switch" && <SwitchField schema={item} key={schema.sort}/>}
            {schema.uiType === "Select" && <SelectField schema={item} key={schema.sort}/>}
            {schema.uiType === "Group" && <GroupField schema={item} key={schema.sort}/>} */}
        </>;
      })}
    </>
  );
};

export default GroupField;