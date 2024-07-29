import { useState } from "react";
import LoginComponent from "../components/login";
import Sidebar from "../components/sidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cusip from "./cusip/cusip";
import { Outlet } from 'react-router-dom';

function Root() {
  const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);
  return (
    <>
    <div>
      <div>
      <Sidebar setExpand={setSideMenuIsExpand} />
      </div>
      <div className="ps-24 pt-10 pe-6">
      <Outlet />
      </div>
    </div>
    </>
  );

}

const LayoutComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/" element={<Root />}>
            <Route path="/cusip" element={<Cusip />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default LayoutComponent;