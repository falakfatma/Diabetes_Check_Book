import { chakra } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { STATUSES } from "../data";

const StatusDropdown = ({ getValue, row, column, table }) => {
  const initialValue = getValue();

  // console.log("initialValue", initialValue)
  // console.log("row", row)
  const [value, setValue] = useState(initialValue);
  // console.log("value",value)
  const { updateData } = table.options.meta;
  useEffect(()=>{
    setValue(initialValue)
  },[initialValue])
  return (
    <>
      <Menu>
        <MenuButton isLazy>{value.value}</MenuButton>
        <MenuList>
          {
            STATUSES.map((option,index)=>{
              return(
                <MenuItem
                key={index}
                value={option.value}
                onClick={() => updateData(row.index, column.id, option)}
              >
                {option?.value}
              </MenuItem>
              )
            })
          }
          {/* {value.options.map((option, index) => {
            return (
              <MenuItem
                key={index}
                value={option}
                onClick={() => updateData(row.index, column.id, option)}
              >
                {option}
              </MenuItem>
            );
          })} */}
        </MenuList>
      </Menu>
    </>
  );
};
export default StatusDropdown;
