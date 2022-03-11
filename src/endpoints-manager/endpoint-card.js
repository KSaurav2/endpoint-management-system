import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  & .MuiCard-root {
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default function EndpointCard({
  endPointItemsMapper,
  endPointItem,
  renderPrimaryText,
  renderSecondaryText
}) {
  return (
    <CardWrapper>
      <Card>
        <CardContent>
          {endPointItemsMapper.map((endPointItemMapper) => {
            if (endPointItemMapper.type === "primary") {
              return renderPrimaryText(
                endPointItemMapper.label,
                endPointItem[endPointItemMapper.id]
              );
            } else {
              return renderSecondaryText(
                endPointItemMapper.label,
                endPointItem[endPointItemMapper.id]
              );
            }
          })}
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
