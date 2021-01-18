import { Container } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();
  const { pathname } = useLocation();

  return pathname !== "/checkout" ? (
    <Container id="footer" maxWidth="xl" className={classes.main}>
      {/* <Container className={classes.content}>
        <Grid container className={classes.menu}>
          {menuItems.map((item) => (
            <Grid item align="center" xs={12} md={4} key={item.title}>
              <Button component={Link} to={item.link} className={classes.item}>
                {item.title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container> */}
      <div className={classes.signature}>
        <Container>© Pazari - {new Date().getFullYear()}</Container>
      </div>
    </Container>
  ) : null;
};

export default Footer;
