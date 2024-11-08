function EmailTemplate({ data }) {
  const {
    firstName,
    lastName,
    companyName,
    jobTitle,
    email,
    phoneNumber,
    companyLink,
    themeColor,
    textColor,
    linkColor,
    fontSize,
    fontFamily,
    profilePicture,
    companyLogo,
  } = data;

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      border="0"
      className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
      style={{
        verticalAlign: "-webkit-baseline-middle",
        fontSize: "medium",
        fontFamily: fontFamily,
      }}
    >
      <tbody>
        <tr>
          <td>
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
              style={{
                verticalAlign: "-webkit-baselin-middle",
                fontSize:
                  fontSize === "100"
                    ? "16px"
                    : fontSize === "50"
                    ? "14px"
                    : "12px",
                fontFamily: fontFamily,
              }}
            >
              <tbody>
                <tr>
                  <td width="150" style={{ verticalAlign: "middle" }}>
                    <span
                      className="template3__ImageContainer-sc-vj949k-0 dVVOvP"
                      style={{ marginRight: "20px", display: "block" }}
                    >
                      <img
                        src={profilePicture}
                        role="presentation"
                        width="130"
                        className="image__StyledImage-sc-hupvqm-0 iQUdAH"
                        style={{ maxWidth: "130px" }}
                      />
                    </span>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <h2
                      color={textColor}
                      className="name__NameContainer-sc-1m457h3-0 fDJBkJ"
                      style={{
                        margin: "0px",
                        fontSize:
                          fontSize === "100"
                            ? "20px"
                            : fontSize === "50"
                            ? "18px"
                            : "16px",
                        color: textColor,
                        fontWeight: 600,
                      }}
                    >
                      <span>{firstName}</span>
                      <span>&nbsp;</span>
                      <span>{lastName}</span>
                    </h2>
                    <p
                      color={textColor}
                      className="job-title__Container-sc-1hmtp73-0 eVBSPG"
                      style={{
                        margin: "0px",
                        color: textColor,
                        fontSize:
                          fontSize === "100"
                            ? "16px"
                            : fontSize === "50"
                            ? "14px"
                            : "12px",
                        lineHeight: "22px",
                      }}
                    >
                      <span>{jobTitle}</span>
                    </p>
                    <p
                      color={textColor}
                      className="company-details__CompanyContainer-sc-j5pyy8-0 kPrOBw"
                      style={{
                        margin: "0px",
                        fontWeight: 500,
                        color: textColor,
                        fontSize:
                          fontSize === "100"
                            ? "16px"
                            : fontSize === "50"
                            ? "14px"
                            : "12px",
                        lineHeight: "22px",
                      }}
                    >
                      <span>{companyName}</span>
                    </p>
                  </td>
                  <td width="30">
                    <div style={{ width: "30px" }}></div>
                  </td>
                  <td
                    color={themeColor}
                    direction="vertical"
                    width="1"
                    height="auto"
                    className="color-divider__Divider-sc-1h38qjv-0 jmHABg"
                    style={{
                      width: "1px",
                      borderBottom: "none",
                      borderLeft: `1px solid ${themeColor}`,
                    }}
                  ></td>
                  <td width="30">
                    <div style={{ width: "30px" }}></div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      border="0"
                      className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                      style={{
                        verticalAlign: "-webkit-baseline-middle",
                        fontSize:
                          fontSize === "100"
                            ? "16px"
                            : fontSize === "50"
                            ? "14px"
                            : "12px",
                        fontFamily: fontFamily,
                      }}
                    >
                      <tbody>
                        <tr height="25" style={{ verticalAlign: "middle" }}>
                          <td width="30" style={{ verticalAlign: "middle" }}>
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              border="0"
                              className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                              style={{
                                verticalAlign: "-webkit-baseline-middle",
                                fontSize:
                                  fontSize === "100"
                                    ? "16px"
                                    : fontSize === "50"
                                    ? "14px"
                                    : "12px",
                                fontFamily: fontFamily,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "bottom" }}>
                                    <span
                                      color={themeColor}
                                      width="11"
                                      className="contact-info__IconWrapper-sc-mmkjr6-1 KxJwQ"
                                      style={{
                                        display: "inline-block",
                                        backgroundColor: themeColor,
                                      }}
                                    >
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 21 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M20.1083 15.5141V18.5141C20.1095 18.7926 20.0524 19.0683 19.9408 19.3234C19.8293 19.5786 19.6656 19.8077 19.4604 19.996C19.2552 20.1842 19.0129 20.3276 18.7491 20.4168C18.4853 20.506 18.2057 20.5392 17.9283 20.5141C14.8512 20.1797 11.8953 19.1282 9.29833 17.4441C6.88216 15.9088 4.83367 13.8603 3.29833 11.4441C1.60831 8.8353 0.556575 5.86509 0.228332 2.77409C0.203342 2.49756 0.236206 2.21885 0.324832 1.95572C0.413457 1.69258 0.555902 1.45078 0.743098 1.24571C0.930293 1.04064 1.15814 0.8768 1.41212 0.764613C1.66611 0.652426 1.94067 0.594353 2.21833 0.594091H5.21833C5.70364 0.589315 6.17412 0.76117 6.54209 1.07762C6.91006 1.39408 7.15041 1.83354 7.21833 2.31409C7.34495 3.27416 7.57978 4.21682 7.91833 5.12409C8.05288 5.48201 8.08199 5.87101 8.00224 6.24497C7.92248 6.61894 7.73719 6.9622 7.46833 7.23409L6.19833 8.50409C7.62189 11.0076 9.69479 13.0805 12.1983 14.5041L13.4683 13.2341C13.7402 12.9652 14.0835 12.7799 14.4575 12.7002C14.8314 12.6204 15.2204 12.6495 15.5783 12.7841C16.4856 13.1226 17.4283 13.3575 18.3883 13.4841C18.8741 13.5526 19.3177 13.7973 19.6349 14.1716C19.952 14.5459 20.1205 15.0237 20.1083 15.5141Z"
                                          fill={themeColor}
                                        />
                                      </svg>
                                      {/* <img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                        color={themeColor}
                                        alt="mobilePhone"
                                        width="13"
                                        className="contact-info__ContactLabelIcon-sc-mmkjr6-0 bOaORQ"
                                        style={`display: block; background-color: ${themeColor};`}
                                      /> */}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ padding: "0px", color: linkColor }}>
                            <a
                              href={`tel:${phoneNumber}`}
                              color={linkColor}
                              font-size={
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }
                              className="contact-info__ExternalLink-sc-mmkjr6-2 djHrwm"
                              style={{
                                textDecoration: "none",
                                color: linkColor,
                                fontSize:
                                  fontSize === "100"
                                    ? "16px"
                                    : fontSize === "50"
                                    ? "14px"
                                    : "12px",
                              }}
                            >
                              <span>{phoneNumber}</span>
                            </a>
                          </td>
                        </tr>
                        <tr height="25" style={{ verticalAlign: "middle" }}>
                          <td width="30" style={{ verticalAlign: "middle" }}>
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              border="0"
                              className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                              style={{
                                verticalAlign: "-webkit-baseline-middle",
                                fontSize:
                                  fontSize === "100"
                                    ? "16px"
                                    : fontSize === "50"
                                    ? "14px"
                                    : "12px",
                                fontFamily: fontFamily,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "bottom" }}>
                                    <span
                                      color={themeColor}
                                      width="11"
                                      className="contact-info__IconWrapper-sc-mmkjr6-1 KxJwQ"
                                      style={{
                                        display: "inline-block",
                                        backgroundColor: themeColor,
                                      }}
                                    >
                                      <svg
                                        width="18"
                                        height="13"
                                        viewBox="0 0 18 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M16 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V11C0 11.5304 0.210714 12.0391 0.585786 12.4142C0.960859 12.7893 1.46957 13 2 13H16C16.5304 13 17.0391 12.7893 17.4142 12.4142C17.7893 12.0391 18 11.5304 18 11V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM6.316 7.316L7.918 8.716C8.223 8.982 8.609 9.114 9 9.114C9.391 9.114 9.777 8.981 10.082 8.716L11.684 7.316L11.647 7.353L15.293 10.999H2.707L6.353 7.353L6.316 7.316ZM2 10.293V3.54L5.602 6.691L2 10.293ZM12.398 6.691L16 3.54V10.29L12.398 6.691ZM16 2V2.21L9.424 7.964C9.30356 8.06006 9.15406 8.11238 9 8.11238C8.84594 8.11238 8.69644 8.06006 8.576 7.964L2.21462 2.21L2 2H16Z"
                                          fill={themeColor}
                                        />
                                      </svg>
                                      {/* <img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                        color={themeColor}
                                        alt="emailAddress"
                                        width="13"
                                        className="contact-info__ContactLabelIcon-sc-mmkjr6-0 bOaORQ"
                                        style={`display: block; background-color: ${themeColor};`}
                                      /> */}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ padding: "0px" }}>
                            <a
                              href="mailto:tomas.janousek@gmail.com"
                              color={linkColor}
                              font-size={
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }
                              className="contact-info__ExternalLink-sc-mmkjr6-2 djHrwm"
                              style={{
                                textDecoration: "none",
                                color: linkColor,
                                fontSize:
                                  fontSize === "100"
                                    ? "16px"
                                    : fontSize === "50"
                                    ? "14px"
                                    : "12px",
                              }}
                            >
                              <span>{email}</span>
                            </a>
                          </td>
                        </tr>
                        <tr height="25" style={{ verticalAlign: "middle" }}>
                          <td width="30" style={{ verticalAlign: "middle" }}>
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              border="0"
                              className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                              style={{
                                verticalAlign: "-webkit-baseline-middle",
                                fontSize:
                                  fontSize === "100"
                                    ? "16px"
                                    : fontSize === "50"
                                    ? "14px"
                                    : "12px",
                                fontFamily: fontFamily,
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ verticalAlign: "bottom" }}>
                                    <span
                                      color={themeColor}
                                      width="11"
                                      className="contact-info__IconWrapper-sc-mmkjr6-1 KxJwQ"
                                      style={{
                                        display: "inline-block",
                                        backgroundColor: themeColor,
                                      }}
                                    >
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.0002 12C9.42965 12.5741 9.97756 13.0491 10.6067 13.3929C11.2359 13.7367 11.9317 13.9411 12.6468 13.9923C13.362 14.0435 14.0798 13.9403 14.7515 13.6897C15.4233 13.4392 16.0333 13.047 16.5402 12.54L19.5402 9.53997C20.451 8.59695 20.955 7.33394 20.9436 6.02296C20.9322 4.71198 20.4063 3.45791 19.4793 2.53087C18.5523 1.60383 17.2982 1.07799 15.9872 1.0666C14.6762 1.0552 13.4132 1.55918 12.4702 2.46997L10.7502 4.17997M13.0002 9.99996C12.5707 9.42584 12.0228 8.95078 11.3936 8.60703C10.7645 8.26327 10.0687 8.05885 9.35355 8.00763C8.63841 7.95641 7.92061 8.0596 7.24885 8.31018C6.5771 8.56077 5.96709 8.9529 5.4602 9.45996L2.4602 12.46C1.54941 13.403 1.04544 14.666 1.05683 15.977C1.06822 17.288 1.59407 18.542 2.52111 19.4691C3.44815 20.3961 4.70221 20.9219 6.01319 20.9333C7.32418 20.9447 8.58719 20.4408 9.5302 19.53L11.2402 17.82"
                                          stroke={themeColor}
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                      {/* <img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                        color={themeColor}
                                        alt="website"
                                        width="13"
                                        className="contact-info__ContactLabelIcon-sc-mmkjr6-0 bOaORQ"
                                        style={`display: block; background-color: ${themeColor};`}
                                      /> */}
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ padding: "0px" }}>
                            <a
                              href={companyLink}
                              color={linkColor}
                              font-size={
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }
                              className="contact-info__ExternalLink-sc-mmkjr6-2 djHrwm"
                              style={{
                                textDecoration: "none",
                                color: linkColor,
                                fontSize:
                                  fontSize === "100"
                                    ? "16px"
                                    : fontSize === "50"
                                    ? "14px"
                                    : "12px",
                              }}
                            >
                              <span>{companyLink}</span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
              style={{
                width: "100%",
                verticalAlign: "-webkit-baseline-middle",
                fontSize:
                  fontSize === "100"
                    ? "16px"
                    : fontSize === "50"
                    ? "14px"
                    : "12px",
                fontFamily: fontFamily,
              }}
            >
              <tbody>
                <tr>
                  <td height="30"></td>
                </tr>
                <tr>
                  <td
                    color={themeColor}
                    direction="horizontal"
                    width="auto"
                    height="1"
                    className="color-divider__Divider-sc-1h38qjv-0 jmHABg"
                    style={{
                      width: "100%",
                      borderBottom: `1px solid ${themeColor}`,
                      borderLeft: "none",
                      display: "block",
                    }}
                  ></td>
                </tr>
                <tr>
                  <td height="30"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              cellPadding="0"
              cellSpacing="0"
              border="0"
              className="table__StyledTable-sc-1avdl6r-0 jKaNHW"
              style={{
                width: "100%",
                verticalAlign: "-webkit-baseline-middle",
                fontSize:
                  fontSize === "100"
                    ? "16px"
                    : fontSize === "50"
                    ? "14px"
                    : "12px",
                fontFamily: fontFamily,
              }}
            >
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "top" }}>
                    <img
                      src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/logo-placeholder@2x.png"
                      role="presentation"
                      width="130"
                      className="image__StyledImage-sc-hupvqm-0 iQUdAH"
                      style={{ display: "inline-block", maxWidth: "130px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td height="30"></td>
        </tr>
      </tbody>
    </table>
  );
}

export default EmailTemplate;
