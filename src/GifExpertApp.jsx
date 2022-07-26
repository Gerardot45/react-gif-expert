import { useState } from "react";
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch"
  ]);

  const onAddCategory = (newCategory) => {
    // categories.push(newCategory);
    if (categories.includes(newCategory)) return;
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, "Valorat"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
