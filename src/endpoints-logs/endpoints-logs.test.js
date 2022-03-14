import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EndpointsLogs from "./endpoints-logs";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("../providers/action-logs-provider", () => ({
  ActionLogsContext: {
    Consumer: ({ children }) => children({ actionLogs: [] })
  }
}));

describe("Testing Endpoints Logs Component", () => {
  it("Should render screen label", () => {
    const wrapper = shallow(<EndpointsLogs />, {
      context: { actionLogs: [] }
    }).dive();
    const labelElement = wrapper.find("#screenLabel");
    expect(labelElement).toHaveLength(1);
    expect(labelElement.text()).toEqual("Endpoints Action Logs");
  });
});
