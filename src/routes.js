import * as React from "react";
import { Routes as ReactRouterDOMRoutes, Route } from "react-router-dom";

import { RulePage } from "pages/rule";

export const Routes = () => (
  <ReactRouterDOMRoutes>
    <Route path={"/"} exact element={<RulePage />} />
    <Route path={"/rules/:name"} exact element={<RulePage />} />
  </ReactRouterDOMRoutes>
);
