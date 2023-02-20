import { Select } from "@sanity/ui";
import { useState, useEffect } from "react";
import client from "../client";

const CategoryList = (props:any) => {
  const {
    onChange,
    value = "",
    id,
    focusRef,
    onBlur,
    onFocus,
    readOnly,
  } = props;

  const [options, setOptions] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "category"]`).then((results:any) => {
      setOptions(results);
    });
  }, []);

  const handleChange = (e:any) => {
    console.log(e.target.value);
  };
  return (
    <Select onChange={handleChange}>
      {options.map((option:any, index) => (
        <option value={option.slug._current}> {option.plural} </option>
      ))}
    </Select>
  );
};

export default CategoryList;
