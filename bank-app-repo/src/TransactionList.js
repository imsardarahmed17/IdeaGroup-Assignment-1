import CustomStyledCard from "./StylizedCard";
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";

export default function TransactionList() {
  const [lastTransaction, setLastTransaction] = useState(30);
  return (
    <Grid
      sx={{
        borderRadius: 5,
        maxHeight: 720,
      }}
      container
      marginLeft={5}
      marginTop={10}
      boxShadow={5}
    >
      <Card
        sx={{ marginLeft: 8, marginRight: 2, marginTop: 2, marginBottom: 2 }}
        elevation={100}
      >
        <CustomStyledCard
          heading="Last Transaction"
          subs={"Spotify Subscription - $" + lastTransaction}
          fontsize={16}
        ></CustomStyledCard>
      </Card>
    </Grid>
  );
}
