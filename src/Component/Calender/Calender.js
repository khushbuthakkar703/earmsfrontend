import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import {
  format,
  addDays,
  lastDayOfWeek,
  getWeek,
  addWeeks,
  subWeeks,
  subDays,
} from "date-fns";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: "20px 20px 0px 20px",
      width: theme.spacing(16),
      height: "auto",
    },
  },
  paper: {
    width: "100%",
  },
  calender: {
    float: "right",
    margin: "20px 10px",
  },
  heading: {
    marginLeft: "20px",
  },
  layout: {
    margin: "40px 20px",
  },
  icon: {
    border: "1px solid #ADD8E6",
    padding: "5px",
    color: "#0000FF",
  },
  Dateicon: {
    display: "inline-block",
    border: "1px solid #ADD8E6",
    padding: "5px",
    color: "#0000FF",
  },
  view: {
    padding: "5px",
    width: "130px",
  },
  week: {
    color: "#0000FF",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "18px",
  },
  day: {
    color: "#000000c9",
    fontSize: "24px",
  },
  main: {
    background: "#8080802b",
    padding: "0px 20px",
  },
}));

export default function Calender() {
  const classes = useStyles();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentWeek, setCurrentWeek] = useState(getWeek(currentMonth));
  const [startDate, setStartDate] = useState(new Date());

  const changeWeekHandle = (btnType) => {
    if (btnType === "prev") {
      setStartDate((date) => {
        return subDays(date, 1);
      });
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      setStartDate((date) => {
        console.log("date", date);
        return addDays(date, 1);
      });
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };
  const ExampleCustomInput = ({ value, onClick }) => {
    return <CalendarTodayIcon className={classes.Dateicon} onClick={onClick} />;
  };

  const renderCells = () => {
    const endDate = lastDayOfWeek(currentMonth, { weekStartsOn: 1 });
    const dateFormat = "d ";
    const dateFormatMonth = " MMM ";
    const dateFormatWeek = "EEE";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    let formattedDateMonth = "";
    let formattedDateWeek = "";
    // while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      console.log(day);
      formattedDate = format(day, dateFormat);
      formattedDateMonth = format(day, dateFormatMonth);
      formattedDateWeek = format(day, dateFormatWeek);
      days.push(
        <div
          key={day}
          className={classes.view}
          style={{ display: "inline-block" }}
        >
          <div className={classes.week}>{formattedDateWeek}</div>
          <div className={classes.day}>{formattedDate}</div>
          <div>{formattedDateMonth}</div>
        </div>,
      );
      day = addDays(day, 1);
    }
    rows.pop();
    rows.push(<div key={day}>{days}</div>);
    days = [];
    // }

    return (
      <div className={classes.main}>
        <Grid container>
          <Grid item lg={12}>
            <div>{rows}</div>
          </Grid>
        </Grid>
      </div>
    );
  };
  return (
    <>
      <div className={classes.root}>
        <Paper className={classes.paper} variant="outlined" elevation={0}>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <div className={classes.calender}>
                <div style={{ display: "inline-block" }}>
                  <ArrowBackIosIcon
                    onClick={() => changeWeekHandle("prev")}
                    className={classes.icon}
                  />
                </div>
                <div style={{ display: "inline-block" }}>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput />}
                  />
                </div>
                <div style={{ display: "inline-block" }}>
                  <ArrowForwardIosIcon
                    onClick={() => changeWeekHandle("next")}
                    className={classes.icon}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
          <div className={classes.layout}>{renderCells()}</div>
        </Paper>
      </div>
    </>
  );
}
