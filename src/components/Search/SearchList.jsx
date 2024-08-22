import { useSelector } from "react-redux";
import FavoriteButton from "../FavoriteButton/FavoriteButton.jsx";

function SearchList() {
  const gifList = useSelector((store) => store.gifList);
  // console.log('in SearchList. the gifList is: ',gifList)

  return (
    <div>
      {gifList.map((gif) => {
        return (
          <div key={gif}>
            <img src={gif} />
            <FavoriteButton url={gif} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchList;
