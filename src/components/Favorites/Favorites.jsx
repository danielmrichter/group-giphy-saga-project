import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function Favorites() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "GET_CATEGORIES"});
        dispatch({type: "GET_FAVORITES"});
    }, [])
    // get the list of favorites
    const favoriteList = useSelector(store => store.favoriteList)
    // get the list of categories
    const categoryList = useSelector(store => store.categoryList)
    // render to dom
    // ability to categorize
    return(
        <div>
            <h2>Categories</h2>
            <ul>
                {categoryList.map((category) => <li key={category.id}>{category.name}</li>)}
            </ul>
            <h2>Favorites</h2>
            <ul>
                {favoriteList.map((favorite) => <li key={favorite.id}><img src={favorite.url}/></li>)}
            </ul>
        </div>
    )
}