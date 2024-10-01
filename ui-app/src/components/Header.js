import { EN, ES } from "../constants.js";
import { formatDate } from "../utils.js";

const Header = ({ feed, language, toggleLanguage }) => {
  return (
    <header className="sticky-header">
      <p>{formatDate(feed?.published)}</p>
      <h1>{feed?.title}</h1>
      <div className="language-toggle">
        <button onClick={() => toggleLanguage()} disabled={language === EN}>
          ENG
        </button>
        \
        <button onClick={() => toggleLanguage()} disabled={language === ES}>
          ESP
        </button>
      </div>
    </header>
  );
};

export default Header;
