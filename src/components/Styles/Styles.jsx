import { useDispatch, useSelector } from "react-redux";
import {
  setFontFamily,
  setFontSize,
  setLinkColor,
  setTextColor,
  setThemeColor,
} from "../../store/templateReducer";
import "./style.css";

const fonts = [
  "Arial",
  "Courier New",
  "Georgia",
  "Lucida Sans Unicode",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
];

function Styles() {
  const dispatch = useDispatch();
  const {
    themeColor,
    textColor,
    linkColor,
    fontSize,
    fontFamily,
    fontSizeTooltip,
  } = useSelector((state) => state.templateReducer);

  return (
    <form className="styles">
      {/* <label htmlFor="">Theme color</label>
      <div className="styles__group">
        <input
          onChange={(e) => dispatch(setThemeColor(e.target.value))}
          value={themeColor}
          type="text"
        />
        <input
          className="styles__color"
          value={themeColor}
          onChange={(e) => dispatch(setThemeColor(e.target.value))}
          type="color"
        />
      </div> */}

      <label htmlFor="">Text color</label>
      <div className="styles__group">
        <input
          onChange={(e) => dispatch(setTextColor(e.target.value))}
          value={textColor}
          type="text"
        />
        <input
          className="styles__color"
          value={textColor}
          onChange={(e) => dispatch(setTextColor(e.target.value))}
          type="color"
        />
      </div>

      <label htmlFor="">Link color</label>
      <div className="styles__group">
        <input
          onChange={(e) => dispatch(setLinkColor(e.target.value))}
          value={linkColor}
          type="text"
        />
        <input
          className="styles__color"
          value={linkColor}
          onChange={(e) => dispatch(setLinkColor(e.target.value))}
          type="color"
        />
      </div>

      <label htmlFor="fontFamily">Font</label>
      <div className="styles__group">
        <select
          value={fontFamily}
          name="fontFamily"
          id="fontFamily"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch(setFontFamily(e.target.value));
          }}
        >
          {fonts.map((font, i) => (
            <option key={i} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <label htmlFor="fontSize">Font Size</label>
      <div className="styles__group">
        <input
          value={fontSize}
          type="range"
          min="0"
          max="100"
          step="50"
          id="fontSize"
          onChange={(e) => dispatch(setFontSize(e.target.value))}
        />
        <span>{fontSizeTooltip}</span>
      </div>
    </form>
  );
}

export default Styles;
