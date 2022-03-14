import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import { ENDPONT_ITEMS_MAPPER, TEXT } from "../constants";
import DataCard from "../components/card";

function EndpointsGridRenderer({ endpointsData = [], onGridItemClick }) {
  return (
    <Grid
      container
      rowSpacing={4}
      columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
      onClick={onGridItemClick}
    >
      {endpointsData.map((endPointItem) => {
        return (
          <Grid key={endPointItem.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <DataCard
              id={TEXT.DEVICE_NAME}
              itemMapper={ENDPONT_ITEMS_MAPPER}
              item={endPointItem}
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
  );
}

export default React.memo(EndpointsGridRenderer);
