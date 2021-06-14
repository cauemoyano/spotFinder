import React from "react";

import { Popper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { setMapData } from "../../redux/Map/map.actions";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  popper: {
    width: "fit-content",
  },
}));

const CustomPopper = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const { open, anchorEl, suggestions, setMapData } = props;
  const handleClick = () => {
    setMapData(suggestions);
    history.push("/map");
  };
  return (
    <Popper
      id={"simple-popper"}
      open={open}
      anchorEl={anchorEl}
      onClick={handleClick}
      style={{ width: 195 }}
    >
      <div className={classes.paper}>
        <Typography variant="body1" display="inline">
          {suggestions?.name}
        </Typography>
        <Typography variant="body1" display="inline">
          {suggestions?.country}
        </Typography>
      </div>
    </Popper>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMapData: (payload) => dispatch(setMapData(payload)),
  };
};

export default connect(null, mapDispatchToProps)(CustomPopper);
