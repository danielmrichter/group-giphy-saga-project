import { useSelector } from "react-redux";

function SearchList () {
    const gifList = useSelector(store => store.gifList)
    console.log('in SearchList. the gifList is: ',gifList)

    return (
        <div>
            {gifList.map((gif)=> {
                return (
                <div>
                    <img src={gif} /> 
                    <button>Favorite</button>
                    </div>
                    )
            })}
            
        </div>
    )
}

export default SearchList;