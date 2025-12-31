function GameSort({ sortOrder, onSelectSortOrder }: Props) {
  return (
    <form className="select-wrap">
      <label>Order by: </label>
      <select
        className="sort-select"
        value={sortOrder}
        onChange={(e) => onSelectSortOrder(e.target.value)}
      >
        <option value="">Relevance</option>
        <option value="released">Release date</option>
        <option value="-metacritic">Metacritic score</option>
        <option value="-added">Popularity</option>
      </select>
    </form>
  );
}

interface Props {
  sortOrder: string;
  onSelectSortOrder: (value: string) => void;
}

export default GameSort;
