import * as React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

import { App } from "./index";

const helperFn = jest.setMock();

configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders the correct text", () => {
    const app = shallow(<App />);
    expect(app.find("h2").text()).toBe("Test prop: 10");
  });
});
