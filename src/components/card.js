import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import styled from "styled-components";
import { TEXT } from "../constants";
import dynamicRefsUtil from "../utils/dynamic-refs-util";

const CardWrapper = styled.div`
  & .MuiCard-root {
    min-height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    &.selected {
      background-color: lightgrey;
    }
  }
`;

export default function DataCard({
  itemMapper,
  item,
  renderPrimaryText,
  renderSecondaryText,
  id
}) {
  return (
    <CardWrapper data-id={item[id]}>
      <Card ref={dynamicRefsUtil.setRef(item[id])}>
        <CardContent>
          {itemMapper.map((mapper) => {
            return (
              <div key={`${item[id]}_${mapper.id}`}>
                {(() => {
                  if (mapper.type === TEXT.PRIMARY) {
                    return renderPrimaryText(mapper.label, item[mapper.id]);
                  } else {
                    return renderSecondaryText(mapper.label, item[mapper.id]);
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
