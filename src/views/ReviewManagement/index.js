import React from "react";
import Tab from "components/Tabs/WithRoute";
import * as constant from "views/ReviewManagement/constant";
export default function Index() {
  return (
    <div >
      <Tab
        data={constant.Tabs}
        redirectTo={constant.Tabs}
        preUrl={"/analytics"}
        postUrl="/"
        childBgColor="white"
        elevation={0}
      />
    </div>
  );
}
