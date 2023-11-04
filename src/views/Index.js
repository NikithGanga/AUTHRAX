import React, {useState} from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

import Typography from "views/IndexSections/Typography.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";

// import walletConnectFcn from "./Hedera/walletConnect.js"
// import contractDeployFcn from "./Hedera/contractDeploy.js"

export default function Index() {

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <NucleoIcons />
          <Typography />
        </div>
        <Footer />
      </div>
    </>
  );
}
