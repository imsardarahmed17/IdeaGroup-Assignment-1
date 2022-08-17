import { Card, Grid } from "@mui/material";
import { useState } from "react";
import CustomStyledCard from "./StylizedCard";
import TransactionList from "./TransactionList";

export default function BalanceLimitComponent() {
  const [currentBalance, setCurrentBalance] = useState(4300);
  const [creditLimit, setCreditLimit] = useState(6000);
  return (
    <Grid
      sx={{
        borderRadius: 5,
      }}
      container
      wrap="nowrap"
    >
      <Grid
        container
        marginRight={5}
        marginTop={14}
        boxShadow={5}
        sx={{ maxWidth: 270, borderRadius: 5 }}
      >
        <Grid marginLeft={1} marginRight={1} marginTop={1} marginBottom={2}>
          <CustomStyledCard midValue="Dashboard"></CustomStyledCard>
          <CustomStyledCard midValue="Paybill"></CustomStyledCard>
          <CustomStyledCard midValue="Account"></CustomStyledCard>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          sx={{
            borderRadius: 5,
          }}
          container
          marginLeft={5}
          marginTop={14}
          boxShadow={5}
        >
          <Card
            sx={{
              marginLeft: 8,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
            elevation={100}
          >
            <CustomStyledCard
              heading="Send Money"
              subs={"$" + " " + currentBalance}
            ></CustomStyledCard>
          </Card>
        </Grid>
        <Grid
          item
          sx={{
            borderRadius: 5,
          }}
          container
          marginLeft={5}
          marginTop={1}
          boxShadow={5}
        >
          <Card
            sx={{
              marginLeft: 8,
              marginRight: 2,
              marginTop: 2,
              marginBottom: 2,
            }}
            elevation={100}
          >
            <CustomStyledCard
              heading="Your Current Balance"
              subs={"$" + " " + currentBalance}
            ></CustomStyledCard>
            <CustomStyledCard
              heading="Your credit limit"
              subs={"$" + " " + creditLimit}
            ></CustomStyledCard>
          </Card>
        </Grid>
      </Grid>
      <TransactionList />
    </Grid>
  );
}
