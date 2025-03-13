import { useDispatch, useSelector } from "react-redux";
import "./CategoryFilter.css";
import { updateSelectedCategory } from "../posts/postsSlice";

function CategoryFilter() {
  const categories = useSelector((state) => state.posts.categories);
  const dispatch = useDispatch();
  const handleClick = (category) => {
    console.log(category);
    dispatch(updateSelectedCategory(category));
  };
  return (
    <div className="category-filter">
      {categories.map(category => <button onClick={() => handleClick(category)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
