import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const DrawerComp = ({ links }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#c3226e" },
        }}
        open={open}
        onClose={() => setopen(false)}
      >
        <List>
          {links.map((link, index) => (
            <ListItemButton onClick={() => setopen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "whitesmoke" }}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "whitesmoke" }}
        onClick={() => setopen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
