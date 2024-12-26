import ArticleListItem from './ArticleListItem';

const ArticleList = () => {
  return (
    <ul className="articles list-none grid grid-cols-2 gap-4">
      {articles.map((content, index) => (
        <ArticleListItem key={index} content={content} />
      ))}
    </ul>
  );
};

export default ArticleList;
