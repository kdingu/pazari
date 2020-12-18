import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Row, Item } from "@mui-treasury/components/flex";
import { useDynamicAvatarStyles } from "@mui-treasury/styles/avatar/dynamic";
import useStyles from "./style";
import { noImageUrl } from "../../../../../constant";
import { IconButton, Typography } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../../store/actions";

const PopoverCartItem = ({ item }) => {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();

  const avatarStyles = useDynamicAvatarStyles({ size: 56 });
  const styles = useStyles();

  const handleRemoveProductFromCart = (id) => {
    setDisabled(true);
    dispatch(cartActions.removeProductFromCartAsync(id)).then(() => {
      // setDisabled(false);
    });
  };

  return (
    <Row gap={2} p={2.5}>
      <Item>
        <Avatar
          classes={avatarStyles}
          src={
            item.media.type === "image" && item.media.source
              ? item.media.source
              : noImageUrl
          }
          style={{ border: "2px solid rgba(0,0,0,0.2)" }}
        />
      </Item>
      <Row wrap grow gap={0.5} minWidth={0}>
        <Item grow minWidth={0}>
          <Typography>{item.name}</Typography>
          <Typography>x{item.quantity}</Typography>
        </Item>
        <Item position={"middle"}>
          <IconButton
            className={styles.btn}
            variant={"outlined"}
            disabled={disabled}
            onClick={() => handleRemoveProductFromCart(item.id)}
          >
            <DeleteForever />
          </IconButton>
        </Item>
      </Row>
    </Row>
  );
};

export default PopoverCartItem;
