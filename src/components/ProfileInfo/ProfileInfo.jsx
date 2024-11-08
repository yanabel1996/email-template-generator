import { useDispatch } from "react-redux";
import {
  setCompanyLink,
  setCompanyLogo,
  setCompanyName,
  setEmail,
  setFirstName,
  setJobTitle,
  setLastName,
  setPhoneNumber,
  setProfilePicture,
} from "../../store/templateReducer";
import "./style.css";
import { defaultTemplate } from "../TemplateSignature/TemplateSignature";
import CloudinaryUploadWidget from "../../CloudinaryUploadWidget";

function ProfileInfo({ uwConfig, setPublicId }) {
  const dispatch = useDispatch();
  return (
    <form className="profile-info">
      <div className="profile-info__groups">
        <label htmlFor="firstName">
          First Name:
          <input
            onChange={(e) => dispatch(setFirstName(e.target.value))}
            type="text"
            id="firstName"
            name="firstName"
            placeholder={defaultTemplate.firstName}
            required
          />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input
            onChange={(e) => dispatch(setLastName(e.target.value))}
            type="text"
            id="lastName"
            name="lastName"
            placeholder={defaultTemplate.lastName}
          />
        </label>
      </div>

      <div className="profile-info__groups">
        <label htmlFor="companyName">
          Company Name:
          <input
            onChange={(e) => dispatch(setCompanyName(e.target.value))}
            type="text"
            id="companyName"
            name="companyName"
            placeholder={defaultTemplate.companyName}
          />
        </label>

        <label htmlFor="jobTitle">
          Job title:
          <input
            onChange={(e) => dispatch(setJobTitle(e.target.value))}
            type="text"
            id="jobTitle"
            name="jobTitle"
            placeholder={defaultTemplate.jobTitle}
          />
        </label>
      </div>

      <div className="profile-info__groups">
        <label htmlFor="email">
          Email:
          <input
            onChange={(e) => dispatch(setEmail(e.target.value))}
            type="email"
            id="email"
            name="email"
            placeholder={defaultTemplate.email}
            required
          />
        </label>

        <label htmlFor="phoneNumber">
          Phone Number:
          <input
            onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
            type="phone"
            id="phoneNumber"
            name="phoneNumber"
            placeholder={defaultTemplate.phoneNumber}
            required
          />
        </label>
      </div>

      <label htmlFor="companyLink">
        Company link:
        <input
          onChange={(e) => dispatch(setCompanyLink(e.target.value))}
          type="url"
          id="companyLink"
          name="companyLink"
          placeholder={defaultTemplate.companyLink}
          required
        />
      </label>

      <label htmlFor="profilePhoto">
        Profile picture:
        <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
        {/* <input
          onChange={(e) => dispatch(setProfilePicture(e.target.value))}
          type="url"
          id="profilePhoto"
          name="profilePhoto"
          required
        /> */}
      </label>

      {/* <label htmlFor="companyLogo">
        Company Logo:
        <input
          onChange={(e) => dispatch(setCompanyLogo(e.target.value))}
          type="url"
          id="companyLogo"
          name="companyLogo"
          required
        />
      </label> */}
    </form>
  );
}

export default ProfileInfo;
