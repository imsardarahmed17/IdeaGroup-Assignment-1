import { Button, Card, Grid, TextField, Typography } from "@mui/material";

export default function SendMoney({ setAmount, amount, handleChange }) {
  function getData(val) {
    setAmount(val.target.value);
  }

  return (
    <Grid
      sx={{
        borderRadius: 5,
      }}
      container
      boxShadow={5}
    >
      <Card
        variant="outlined"
        sx={{
          bgcolor: "#1976d2",
          minWidth: 247,
          minHeight: 20,
          maxWidth: 247,
          mxHeight: 20,
          borderRadius: 5,
        }}
      >
        <Grid
          alignItems="stretch"
          sx={{
            borderRadius: 5,
          }}
          container
          justifyContent="center"
          marginTop={1}
          marginBottom={1}
          marginLeft={1}
          marginRight={1}
        >
          <Grid item>
            <TextField variant="filled" label="Receiver's Name"></TextField>
          </Grid>
          <Grid>
            <TextField variant="filled" label="Receiver's IBN"></TextField>
          </Grid>
          <Grid>
            <TextField
              onChange={getData}
              variant="filled"
              label="Amount"
            ></TextField>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              onClick={() => {
                handleChange(amount);
              }}
            >
              <Typography>Send</Typography>
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
