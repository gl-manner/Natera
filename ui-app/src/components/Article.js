import { formatDate } from "../utils";

const Article = ({ entry }) => {
  return (
    <div className="article" onClick={() => window.open(entry?.link, "_blank")}>
      <div className="article-image">
        <img
          src={entry.media_content[0].url}
          alt={entry.title}
          onClick={() => window.open(entry.link, "_blank")}
        />
      </div>
      <div className="article-content">
        <div className="description">
          <p>{formatDate(entry?.published)}</p>
          <h2>{entry?.title}</h2>
          <p>{entry?.summary}</p>
        </div>

        <p className="article-author">{`BY ${entry?.author}`.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default Article;
