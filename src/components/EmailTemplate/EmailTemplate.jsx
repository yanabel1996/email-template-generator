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
  } = data;

  return `<table
      cellpadding="0"
      cellspacing="0"
      border="0"
      class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
      style="vertical-align: -webkit-baseline-middle; font-size: ${
        fontSize === "100" ? "20px" : fontSize === "50" ? "18px" : "16px"
      }; font-family: ${fontFamily};"
    >
      <tbody>
        <tr>
          <td>
            <table
              cellpadding="0"
              cellspacing="0"
              border="0"
              class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
              style="vertical-align: -webkit-baseline-middle; font-size: ${
                fontSize === "100"
                  ? "20px"
                  : fontSize === "50"
                  ? "18px"
                  : "16px"
              }; font-family: ${fontFamily};"
            >
              <tbody>
                <tr>
                  <td width="150" style="vertical-align: middle;">
                    <span
                      class="template3__ImageContainer-sc-vj949k-0 dVVOvP"
                      style="margin-right: 20px; display: block;"
                    >
                      <img
                        src=${profilePicture}
                        role="presentation"
                        width="130"
                        class="image__StyledImage-sc-hupvqm-0 iQUdAH"
                        style="max-width: 130px;"
                      />
                    </span>
                  </td>
                  <td style="vertical-align: middle;">
                    <h2
                      color=${textColor}
                      class="name__NameContainer-sc-1m457h3-0 fDJBkJ"
                      style='margin: 0px; font-size: ${
                        fontSize === "100"
                          ? "16px"
                          : fontSize === "50"
                          ? "14px"
                          : "12px"
                      }; color: ${textColor}; font-weight: 600;'
                    >
                      <span>${firstName}</span>
                      <span>&nbsp;</span>
                      <span>${lastName}</span>
                    </h2>
                    <p
                      color=${textColor}
                      class="job-title__Container-sc-1hmtp73-0 eVBSPG"
                      style='margin: 0px; color: ${textColor}; font-size: ${
    fontSize === "100" ? "16px" : fontSize === "50" ? "14px" : "12px"
  }; line-height: 22px;'
                    >
                      <span>${jobTitle}</span>
                    </p>
                    <p
                      color=${textColor}
                      class="company-details__CompanyContainer-sc-j5pyy8-0 kPrOBw"
                      style='margin: 0px; font-weight: 500; color: ${textColor}; font-size: ${
    fontSize === "100" ? "16px" : fontSize === "50" ? "14px" : "12px"
  }; line-height: 22px;'
                    >
                      <span>${companyName}</span>
                    </p>
                  </td>
                  <td width="30">
                    <div style="width: 30px;"></div>
                  </td>
                  <td
                    color=${themeColor}
                    direction="vertical"
                    width="1"
                    height="auto"
                    class="color-divider__Divider-sc-1h38qjv-0 jmHABg"
                    style='width: 1px; border-bottom: none; border-left: 1px solid ${themeColor};'
                  ></td>
                  <td width="30">
                    <div style="width: 30px;"></div>
                  </td>
                  <td style="vertical-align: middle;">
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                      class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                      style='vertical-align: -webkit-baseline-middle; font-size: ${
                        fontSize === "100"
                          ? "16px"
                          : fontSize === "50"
                          ? "14px"
                          : "12px"
                      }; font-family: ${fontFamily};'
                    >
                      <tbody>
                        <tr height="25" style="vertical-align: middle;">
                          <td width="30" style="vertical-align: middle;">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                              style='vertical-align: -webkit-baseline-middle; font-size:
                        ${
                          fontSize === "100"
                            ? "16px"
                            : fontSize === "50"
                            ? "14px"
                            : "12px"
                        }; font-family: ${fontFamily};'
                            >
                              <tbody>
                                <tr>
                                  <td style="vertical-align: bottom;">
                                    <span
                                      width="11"
                                      class="contact-info__IconWrapper-sc-mmkjr6-1 KxJwQ"
                                      style='display: inline-block;'
                                    >
                                      <img src="https://res.cloudinary.com/dzsvdigz2/image/upload/v1731100125/Email%20template%20generator/odzmxusjrljkganbngoa.png" alt="Phone number" />
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style='padding: 0px; color: ${linkColor};'>
                            <a
                              href={tel:${phoneNumber}}
                              color=${linkColor}
                              font-size=${
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }
                              class="contact-info__ExternalLink-sc-mmkjr6-2 djHrwm"
                              style='text-decoration: none; color: ${linkColor}; font-size: ${
    fontSize === "100" ? "16px" : fontSize === "50" ? "14px" : "12px"
  };'
                            >
                              <span>${phoneNumber}</span>
                            </a>
                          </td>
                        </tr>
                        <tr height="25" style="vertical-align: middle;">
                          <td width="30" style="vertical-align: middle;">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                              style='vertical-align: -webkit-baseline-middle; font-size: ${
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }; font-family: ${fontFamily};'
                            >
                              <tbody>
                                <tr>
                                  <td style="vertical-align: bottom;">
                                    <span
                                      width="11"
                                      class="contact-info__IconWrapper-sc-mmkjr6-1 KxJwQ"
                                      style='display: inline-block;'
                                    >
                                      <img src="https://res.cloudinary.com/dzsvdigz2/image/upload/v1731100124/Email%20template%20generator/ffgh4h0tbvy0ugjanoiv.png" alt="Email" />
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="padding: 0px;">
                            <a
                              href="mailto:${email}"
                              color=${linkColor}
                              font-size=${
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }
                              class="contact-info__ExternalLink-sc-mmkjr6-2 djHrwm"
                              style='text-decoration: none; color: ${linkColor}; font-size: ${
    fontSize === "100" ? "16px" : fontSize === "50" ? "14px" : "12px"
  };'
                            >
                              <span>${email}</span>
                            </a>
                          </td>
                        </tr>
                        <tr height="25" style="vertical-align: middle;">
                          <td width="30" style="vertical-align: middle;">
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              border="0"
                              class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
                              style='vertical-align: -webkit-baseline-middle; font-size: ${
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }; font-family: ${fontFamily};'
                            >
                              <tbody>
                                <tr>
                                  <td style="vertical-align: bottom;">
                                    <span
                                      width="11"
                                      class="contact-info__IconWrapper-sc-mmkjr6-1 KxJwQ"
                                      style='display: inline-block;'
                                    >
                                    <img src="https://res.cloudinary.com/dzsvdigz2/image/upload/v1731100125/Email%20template%20generator/cnk11gpxwnjqcbtfngo3.png" alt="COmpany link" />
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style="padding: 0px;">
                            <a
                              href=${companyLink}
                              color=${linkColor}
                              font-size=${
                                fontSize === "100"
                                  ? "16px"
                                  : fontSize === "50"
                                  ? "14px"
                                  : "12px"
                              }
                              class="contact-info__ExternalLink-sc-mmkjr6-2 djHrwm"
                              style='text-decoration: none; color: ${linkColor}; font-size: ${
    fontSize === "100" ? "16px" : fontSize === "50" ? "14px" : "12px"
  };'
                            >
                              <span>${companyLink}</span>
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
              cellpadding="0"
              cellspacing="0"
              border="0"
              class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
              style='width: 100%; vertical-align: -webkit-baseline-middle; font-size: ${
                fontSize === "100"
                  ? "16px"
                  : fontSize === "50"
                  ? "14px"
                  : "12px"
              }; font-family: ${fontFamily};'
            >
              <tbody>
                <tr>
                  <td height="30"></td>
                </tr>
                <tr>
                  <td
                    color=${themeColor}
                    direction="horizontal"
                    width="auto"
                    height="1"
                    class="color-divider__Divider-sc-1h38qjv-0 jmHABg"
                    style='width: 100%; border-bottom: 1px solid ${themeColor}; border-left: none; display: block;'
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
              cellpadding="0"
              cellspacing="0"
              border="0"
              class="table__StyledTable-sc-1avdl6r-0 jKaNHW"
              style='width: 100%; vertical-align: -webkit-baseline-middle; font-size: ${
                fontSize === "100"
                  ? "16px"
                  : fontSize === "50"
                  ? "14px"
                  : "12px"
              }; font-family: ${fontFamily};'
            >
              <tbody>
                <tr>
                  <td style="vertical-align: top;">
                    <img
                      src="https://res.cloudinary.com/dzsvdigz2/image/upload/v1731092767/Email%20template%20generator/qjrocrsvkuqegdqw9nlk.png"
                      role="presentation"
                      width="130"
                      class="image__StyledImage-sc-hupvqm-0 iQUdAH"
                      style="display: inline-block; max-width: 130px;"
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
    </table>`;
}

export default EmailTemplate;

{
  /* <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M9.0002 12C9.42965 12.5741 9.97756 13.0491 10.6067 13.3929C11.2359 13.7367 11.9317 13.9411 12.6468 13.9923C13.362 14.0435 14.0798 13.9403 14.7515 13.6897C15.4233 13.4392 16.0333 13.047 16.5402 12.54L19.5402 9.53997C20.451 8.59695 20.955 7.33394 20.9436 6.02296C20.9322 4.71198 20.4063 3.45791 19.4793 2.53087C18.5523 1.60383 17.2982 1.07799 15.9872 1.0666C14.6762 1.0552 13.4132 1.55918 12.4702 2.46997L10.7502 4.17997M13.0002 9.99996C12.5707 9.42584 12.0228 8.95078 11.3936 8.60703C10.7645 8.26327 10.0687 8.05885 9.35355 8.00763C8.63841 7.95641 7.92061 8.0596 7.24885 8.31018C6.5771 8.56077 5.96709 8.9529 5.4602 9.45996L2.4602 12.46C1.54941 13.403 1.04544 14.666 1.05683 15.977C1.06822 17.288 1.59407 18.542 2.52111 19.4691C3.44815 20.3961 4.70221 20.9219 6.01319 20.9333C7.32418 20.9447 8.58719 20.4408 9.5302 19.53L11.2402 17.82"
                                          stroke=${themeColor}
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg> */
}
