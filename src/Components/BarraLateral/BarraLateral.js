import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styleElem from "../../styles/Routes.module.css"
import styleBar from "../../styles/BarraLateral.module.css"
import { DiAptana } from "react-icons/di";
import { CiLogin } from "react-icons/ci";
import { FaRegIdBadge } from "react-icons/fa";
import Login from "./Login";
import Register from "./Register"
import Settings from "./Settings"
function BarraLateral() {
  return (
    <div className={styleBar.LayoutSidebar}>
      <BrowserRouter>
        <ul className={styleElem.SidebarElement}>
         
            <li>
              <Link to="/"><CiLogin size={28}/> LOG-IN</Link>
            </li>
            <li>
              <Link to="/Register"><FaRegIdBadge size={25}/> REGISTER</Link>
            </li>
          

        <li>
          <Link to="/Settings"><DiAptana size={25}/> SETTINGS</Link>
        </li>
        </ul>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default BarraLateral;
