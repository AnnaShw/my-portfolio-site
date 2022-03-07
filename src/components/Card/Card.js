import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function BasicCard(props) {
  return (
    <Card style={{backgroundColor: "transparent"}} sx={{ minWidth: 275 }}>
      <CardContent>
       {props.children}
      </CardContent>
    </Card>
  );
}
