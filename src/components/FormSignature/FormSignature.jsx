import ProfileInfo from "../ProfileInfo/ProfileInfo";
import Styles from "../Styles/Styles";
import { useState } from "react";

import "./style.css";

function FormSignature({ uwConfig, setPublicId }) {
  const [isProfileActive, setIsProfileActive] = useState(true);

  return (
    <div className="form-signature">
      <ul className="list form-signature__list">
        <li
          className={isProfileActive ? "list__item active" : "list__item"}
          onClick={() => setIsProfileActive(true)}
        >
          Profile info
        </li>
        <li
          className={!isProfileActive ? "list__item active" : "list__item"}
          onClick={() => setIsProfileActive(false)}
        >
          Styles
        </li>
      </ul>
      {isProfileActive ? (
        <ProfileInfo setPublicId={setPublicId} uwConfig={uwConfig} />
      ) : (
        <Styles />
      )}
    </div>
  );
}

export default FormSignature;
