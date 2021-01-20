import React from "react";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import useStyles from "./styles";
import sortBy from "lodash.sortby";

const Accordion = withStyles({
  root: {
    minWidth: "100%",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    transition: "background-color 80ms ease-in, min-height 200ms ease-out",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 36,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {
    backgroundColor: theme.palette.secondary.light,
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexFlow: "column",
  },
}))(MuiAccordionDetails);

const OrdersAccordion = ({ orders = [{}, {}] }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");

  const sortedOrders = sortBy(orders, ["created"]).reverse();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container style={{ padding: 0 }}>
      {/* headers */}
      <Grid container className={classes.headingsContainer}>
        <Grid item xs={4}>
          <Typography variant="subtitle2">Referenca</Typography>
        </Grid>
        <Grid item align="center" xs={4}>
          <Typography variant="subtitle2">Data (D/M/Y)</Typography>
        </Grid>
        <Grid item align="right" xs={4}>
          <Typography variant="subtitle2">Statusi</Typography>
        </Grid>
      </Grid>
      {/* list */}
      <div className={classes.listContainer}>
        {sortedOrders.length > 0 &&
          sortedOrders.map((order) => {
            let orderDate = new Date(order.created * 1000);
            orderDate = `${orderDate.getDate()}/${
              orderDate.getMonth() + 1
            }/${orderDate.getFullYear()}`;
            return (
              <Accordion
                key={order.id}
                square
                expanded={expanded === order.id}
                onChange={handleChange(order.id)}
              >
                <AccordionSummary
                  aria-controls={`${order.id}-content`}
                  id={`${order.id}-header`}
                  className={classes.summary}
                >
                  <Grid container>
                    <Grid item xs={4}>
                      <Typography>{order.customer_reference}</Typography>
                    </Grid>
                    <Grid item align="center" xs={4}>
                      <Typography>{orderDate}</Typography>
                    </Grid>
                    <Grid item align="right" xs={4}>
                      <Typography>
                        {order.status_payment} / {order.status_fulfillment}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails>
                  {/* items */}
                  <Grid container className={classes.detailsGrid}>
                    <Grid
                      container
                      item
                      xs={12}
                      className={classes.innerHeader}
                    >
                      <Grid item xs={6}>
                        <Typography variant="subtitle2">Produkti</Typography>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <Typography variant="subtitle2">Sasia</Typography>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <Typography variant="subtitle2">Çmimi</Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xs={12}
                      className={classes.innerContent}
                    >
                      {/* order review */}
                      {order.order.line_items.map((item) => {
                        return (
                          <React.Fragment key={item.id}>
                            <Grid item xs={6}>
                              <Typography>{item.name}</Typography>
                              {item.variants.length
                                ? item.variants.map((variant, index) => (
                                    <Typography
                                      key={variant.variant_id}
                                      variant="caption"
                                    >
                                      {index !== 0 ? " - " : null}
                                      {variant.variant_name}:{" "}
                                      {variant.option_name}
                                    </Typography>
                                  ))
                                : null}
                            </Grid>
                            <Grid item xs={3} align="right">
                              <Typography>{item.quantity}</Typography>
                            </Grid>
                            <Grid item xs={3} align="right">
                              <Typography>
                                {item.line_total.formatted_with_code}
                              </Typography>
                            </Grid>
                          </React.Fragment>
                        );
                      })}
                    </Grid>
                  </Grid>
                  {/* totals */}
                  <Grid container className={classes.paymentDetailsGrid}>
                    <Grid container item xs={12} className={classes.subtotal}>
                      <Grid item xs={6}>
                        <Typography>Subtotali</Typography>
                      </Grid>
                      <Grid item xs={6} align="right">
                        <Typography>
                          {order.order.subtotal.formatted_with_code}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.shipping}>
                      <Grid item xs={6}>
                        <Typography>Dërgesa</Typography>
                      </Grid>
                      <Grid item xs={6} align="right">
                        <Typography>
                          {order.order.shipping.price.formatted_with_code}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} className={classes.total}>
                      <Grid item xs={6}>
                        <Typography>Totali</Typography>
                      </Grid>
                      <Grid item xs={6} align="right">
                        <Typography>
                          {order.order.total.formatted_with_code}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
    </Container>
  );
};

export default OrdersAccordion;
