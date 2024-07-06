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
  const [value, setValue] = useState(initialValue);
  const { updateData } = table.options.meta;
  useEffect(()=>{
    setValue(initialValue)
  },[initialValue])
  return (
    <>
      <Menu>
        <MenuButton background={value.color}>{value.value}</MenuButton>
        <MenuList>
          {
            STATUSES.map((option,index)=>{
              return(
                <MenuItem
                key={index}
                onClick={() => updateData(row.index, column.id, option)}
                value={option.value}
                margin={0}
              >
                {option?.value}
              </MenuItem>
              )
            })
          }
        </MenuList>
      </Menu>
    </>
  );
};
export default StatusDropdown;
