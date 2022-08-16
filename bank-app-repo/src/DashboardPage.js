import { Avatar, Card } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import BalanceLimitComponent from "./Balance-Limit-Component";

export default function DashboardPage() {
  return (
    <Container>
      <Grid container>
        <AppBar>
          <Grid container>
            <Grid
              item
              marginTop={3}
              marginbuttom={1}
              marginLeft={16}
              marginRight={1}
              flexGrow={1}
            >
              <Typography>The Capital Bank Dashboard</Typography>
            </Grid>
            <Grid
              item
              marginTop={1}
              marginbuttom={1}
              marginLeft={1}
              marginRight={1}
              flexGrow={0}
            >
              <IconButton alt="User Account">
                <Avatar></Avatar>
              </IconButton>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
      <BalanceLimitComponent />
    </Container>
  );
}
