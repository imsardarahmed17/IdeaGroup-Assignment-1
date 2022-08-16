import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function BalanceLimitComponent() {
  const [currentBalance, setCurrentBalance] = useState(4300);
  return (
    <Grid container marginTop={10}>
      <Box>
        <Paper height={100} width={230}>
          <Grid marginTop={1} marginButtom={1} marginLeft={1} marginRight={1}>
            <Typography color="black">Your current balance</Typography>
          </Grid>
          <Grid marginTop={1} marginButtom={1} marginLeft={1} marginRight={1}>
            <Typography color="black">$ {currentBalance}</Typography>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
}
