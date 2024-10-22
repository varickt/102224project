import { useState } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
}

