import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import styled from "styled-components";
import dynamicRefsUtil from "../utils/dynamic-refs-util";

const CardWrapper = styled.div`
  & .MuiCard-root {
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    &.selected {
      background-color: lightgrey;
    }
  }
`;

export default function EndpointCard({
  endPointItemsMapper,
  endPointItem,
  renderPrimaryText,
  renderSecondaryText
}) {
  console.log("Card Render");
  return (
    <CardWrapper data-devicename={endPointItem.deviceName}>
      <Card ref={dynamicRefsUtil.setRef(endPointItem.deviceName)}>
        <CardContent>
          {endPointItemsMapper.map((endPointItemMapper) => {
            return (
              <div key={`${endPointItem.deviceName}_${endPointItemMapper.id}`}>
                {(() => {
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
                })()}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </CardWrapper>
  );
}
