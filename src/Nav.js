import React, { useEffect } from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className={`nav`}>
      <img
        className="nav_logo"
        src="https://w.namu.la/s/e73d00d283513f086ecee75aa1edfef3449d97bccceda03ba0d9c240d28545645902a68011c5c2a3716044813aa5ff58326efd747daa413aea3de07c3ec21dbbf25eb4d48788880a36222495fbcf504f44132cf42d24b39872c8dd3d686cf363"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
