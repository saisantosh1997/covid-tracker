import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, active, isRed, isBlue, total, ...props }) {
  // {{'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'}}
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      } ${isBlue && "infoBox--blue"}`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
        <h2
          className={`infoBox__cases ${!isRed && "infoBox__cases--green"} ${
            isBlue && "infoBox__cases--blue"
          }`}
        >
          {cases}
        </h2>
      </CardContent>
      <Typography className="infoBox__total" color="textSecondary">
        {total} Total
      </Typography>
    </Card>
  );
}

export default InfoBox;
