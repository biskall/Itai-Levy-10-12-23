import { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import SwitchMode from "../SwitchMode/SwitchMode";
import useStyles from "./Style";


function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        className={classes.main}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Favorite">Favorite</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <SwitchMode></SwitchMode>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;