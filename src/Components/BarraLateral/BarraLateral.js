import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import styleElem from "../../styles/Routes.module.css"
import styleBar from "../../styles/BarraLateral.module.css"
import { DiAptana } from "react-icons/di";
import { CiLogin } from "react-icons/ci";
import { FaRegIdBadge } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register"
import Settings from "./Settings"
import Dashboard from "../dashboard/dash";
function BarraLateral({ isLoggedIn }) {


  return (
    <div className={styleBar.LayoutSidebar}>
      <BrowserRouter>
        <ul className={styleElem.SidebarElement}>

        {!isLoggedIn && (
          <>
            <li>
              <Link to="/"><CiLogin size={28}/> LOG-IN</Link>
            </li>
            <li>
              <Link to="/Register"><FaRegIdBadge size={25}/> REGISTER</Link>
            </li>
            <li>
                <Link to="/Settings"><DiAptana size={25}/> SETTINGS</Link>
            </li>
            </>
            )}

            {isLoggedIn && (
            <li>
              <Link to="/dashboard"><DiAptana size={25}/> DASHBOARD</Link>
            </li>
             )}
        </ul>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default BarraLateral;
