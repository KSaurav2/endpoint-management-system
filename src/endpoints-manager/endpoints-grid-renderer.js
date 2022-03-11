import { Grid } from "@mui/material";
import React from "react";
import EndpointCard from "./endpoint-card";
import Typography from "@mui/material/Typography";
import { ENDPONT_ITEMS_MAPPER } from "../constants";

function EndpointsGridRenderer({ endpointsData = [] }) {
  return (
    <>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      >
        {endpointsData.map((endPointItem) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
              <EndpointCard
                endPointItemsMapper={ENDPONT_ITEMS_MAPPER}
                endPointItem={endPointItem}
                renderPrimaryText={(label, value) => {
                  return (
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.primary"
                      gutterBottom
                    >
                      <b>{label}</b> :{value}
                    </Typography>
                  );
                }}
                renderSecondaryText={(label, value) => {
                  return (
                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                      <b>{label}</b> :{value}
                    </Typography>
                  );
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default EndpointsGridRenderer;
