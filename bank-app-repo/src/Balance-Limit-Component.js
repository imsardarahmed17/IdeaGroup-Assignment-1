import { Home } from "@mui/icons-material";
import { Card, Grid, Icon } from "@mui/material";
import { useState } from "react";
import CustomStyledCard from "./StylizedCard";

export default function BalanceLimitComponent() {
  const [currentBalance, setCurrentBalance] = useState(4300);
  const [creditLimit, setCreditLimit] = useState(6000);
  const [lastTransaction, setLastTransaction] = useState(30);
  return (
    <Grid container wrap="nowrap">
      <Grid
        container
        marginRight={5}
        marginTop={10}
        boxShadow={5}
        sx={{ maxWidth: 251 }}
      >
        <Card
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        >
          <CustomStyledCard midValue="Dashboard"></CustomStyledCard>
          <CustomStyledCard midValue="Bills"></CustomStyledCard>
          <CustomStyledCard midValue="Account"></CustomStyledCard>
        </Card>
      </Grid>
      <Grid container marginLeft={5} marginTop={10} boxShadow={5}>
        <Card
          sx={{ marginLeft: 2, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        >
          <CustomStyledCard
            heading="Your Current Balance"
            subs={"$" + " " + currentBalance}
          ></CustomStyledCard>
          <CustomStyledCard
            heading="Your credit limit"
            subs={"$" + " " + creditLimit}
          ></CustomStyledCard>
          <CustomStyledCard
            heading="Last Transaction"
            subs={"Spotify Subscription " + "-" + "$" + lastTransaction}
            fontsize={16}
          ></CustomStyledCard>
        </Card>
      </Grid>
    </Grid>
  );
}
