import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function DashboardPage() {
  return (
    <Grid container>
      <AppBar>
        <Grid container>
          <Grid item>
            <Typography>The Capital Bank Dashboard</Typography>
          </Grid>
          <Grid item>
            <IconButton alt="User Account"></IconButton>
          </Grid>
        </Grid>
      </AppBar>
    </Grid>
  );
}
