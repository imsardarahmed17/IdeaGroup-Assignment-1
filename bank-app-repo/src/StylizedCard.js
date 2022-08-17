import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function CustomStyledCard(props) {
  const { heading, midValue = [null], subs, fontsize = [24] } = props;
  return (
    <Grid container marginTop={8} boxShadow={5}>
      <Card
        variant="outlined"
        sx={{ minWidth: 247, minHeight: 82, maxWidth: 247, mxHeight: 82 }}
      >
        <Paper
          sx={{ minWidth: 247, minHeight: 82, maxWidth: 247, maxHeight: 82 }}
        >
          <Grid container justifyContent="center" marginTop={2}>
            <Grid item>
              <Typography color="black" variant="subtitle1">
                {heading}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" marginTop={2}>
            <Grid item>
              <Typography variant="subtitle1" sx={{ fontSize: fontsize }}>
                {midValue}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography
                color="black"
                variant="h5"
                sx={{ fontSize: fontsize }}
                marginTop={-2}
                marginBottom={5}
                marginLeft={1}
                marginRight={1}
              >
                {subs}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Card>
    </Grid>
  );
}
