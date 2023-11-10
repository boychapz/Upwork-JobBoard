import * as React from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { PRIMARY_GREEN } from "./StyledComponents";
export default function CategoryMenu({
  filterJob,
  setFilterJob,
  categoryAvailable
}) {
  return (
    <>
      <MenuList>
        {categoryAvailable.map((category) => (
          <MenuItem dense disableGutters onClick={() => setFilterJob(category)}>
            <ListItemText
              sx={category === filterJob ? { color: PRIMARY_GREEN } : {}}
            >
              {category}
            </ListItemText>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
}
