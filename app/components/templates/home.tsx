import React, { useEffect } from "react";
import { Link } from "@remix-run/react";

import useMapLock from "~/hooks/map/use-map-lock";

import Header from "~/components/regions/header";
import Footer from "~/components/regions/footer";

import Logo from "~/components/atoms/logo";

export default function HomeIndexTemplate() {
  const [isLocked, { setUnlock }] = useMapLock();

  useEffect(() => {
    if (isLocked) setUnlock();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header>
        <div className="flex flex-row items-center bg-white p-2">
          <div className="ml-3 flex-grow">
            <Logo />
          </div>
          <Link to="/search" className="btn btn-light">
            <i className="btn-icon icon icon-search" />
          </Link>
        </div>
      </Header>
      <Footer>
        <div className="flex flex-row items-center bg-white p-2">
          <Link to="/create" className="btn btn-primary w-full">
            <i className="btn-icon icon icon-pin-add" />
            <p className="btn-text">Create a Report</p>
          </Link>
        </div>
      </Footer>
    </>
  );
}