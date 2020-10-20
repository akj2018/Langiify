import React from "react";

import "./conversation-list-item.styles.scss";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxList() {
  const data = [
    {
      name: "Aesha Shah",
      email: "aesha.shah.0012@gmail.com",
      time: {
        min: 58,
        sec: 29,
      },
      date: {
        day: 1,
        month: "July",
        year: 20,
      },
    },
    {
      name: "Shubham Kumar",
      email: "shumbahm.kumar.56@gmail.com",
      time: {
        min: 8,
        sec: 9,
      },
      date: {
        day: 29,
        month: "June",
        year: 20,
      },
    },
    {
      name: "Shashank Singh",
      email: "shashanksingh78@gmail.com",
      time: {
        min: 2,
        sec: 20,
      },
      date: {
        day: 20,
        month: "June",
        year: 20,
      },
    },
    {
      name: "Bhavya Aggarwal",
      email: "er.bhavya@gmail.com",
      time: {
        min: 35,
        sec: 8,
      },
      date: {
        day: 15,
        month: "June",
        year: 20,
      },
    },
    {
      name: "Bhavya Aggarwal",
      email: "er.bhavya@gmail.com",
      time: {
        min: 35,
        sec: 8,
      },
      date: {
        day: 15,
        month: "June",
        year: 20,
      },
    },
  ];

  const indexList = data.map((value, index) => index);

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {indexList.map((value) => {
        const labelId = `checkbox-list-label-${value}`;
        const nameId = `checkbox-list-name-${value}`;
        const emailId = `checkbox-list-email-${value}`;
        const timeId = `checkbox-list-time-${value}`;
        const dateId = `checkbox-list-date-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                color="primary"
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText
              id={nameId}
              className="list-item-name"
              primary={`${data[value].name}`}
            />
            <ListItemText
              id={emailId}
              className="list-item-email"
              primary={`${data[value].email}`}
            />
            <ListItemText
              id={timeId}
              className="list-item-time"
              primary={`${data[value].time.min} min ${data[value].time.sec} sec`}
            />
            <ListItemText
              id={dateId}
              className="list-item-date"
              primary={`${data[value].date.month} ${data[value].date.day}, ${data[value].date.year}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
