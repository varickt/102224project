import { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

// src/components/Sidebar.jsx

const Sidebar = () => {
    return <div>Sidebar Content</div>;
  };
  
  export default Sidebar;
  

  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Transactions" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="FAQs" />
        </ListItem>
      </List>
    </Drawer>
  );

