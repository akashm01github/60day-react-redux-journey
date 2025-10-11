import React, { createContext, useState } from 'react'

export const MyRecipeContext = createContext(null);

const RecipeContext = ({ children }) => {

  
  const [data, setdata] = useState([
    {
      "id": 1,
      "title": "Spicy Paneer Tikka",
      "recipe_url": "https://images.unsplash.com/photo-1701579231320-cc2f7acad3cd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "description": "A flavorful Indian appetizer made with marinated paneer cubes grilled to perfection with smoky spices.",
      "ingredients": "Paneer, Yogurt, Red chili powder, Garam masala, Lemon juice, Salt, Bell peppers, Onions",
      "instructions": "1. Mix yogurt and spices in a bowl.\n2. Add paneer and vegetables, marinate for 30 minutes.\n3. Grill or bake until golden.\n4. Serve with mint chutney.",
      "price": "220",
      "catagories": "lunch"
    },
    {
      "id": 2,
      "title": "Creamy Mushroom Pasta",
      "recipe_url": "https://images.unsplash.com/photo-1581228258201-fe6e5861d1f6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "description": "A rich and creamy pasta dish loaded with mushrooms and parmesan cheese.",
      "ingredients": "Pasta, Mushrooms, Cream, Garlic, Butter, Parmesan, Salt, Pepper",
      "instructions": "1. Boil pasta and keep aside.\n2. Sauté garlic and mushrooms in butter.\n3. Add cream and cheese.\n4. Mix with pasta and serve hot.",
      "price": "280",
      "catagories": "dinner"
    },
    {
      "id": 3,
      "title": "Avocado Toast Deluxe",
      "recipe_url": "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
      "description": "A healthy breakfast made with creamy avocado, crunchy toast, and poached eggs.",
      "ingredients": "Bread, Avocado, Egg, Olive oil, Lemon, Chili flakes, Salt",
      "instructions": "1. Toast the bread.\n2. Mash avocado with lemon and salt.\n3. Spread on toast, top with poached egg and chili flakes.",
      "price": "150",
      "catagories": "breakfast"
    },
    {
      "id": 4,
      "title": "Chicken Biryani",
      "recipe_url": "https://images.unsplash.com/photo-1697155406055-2db32d47ca07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "description": "A fragrant rice dish cooked with marinated chicken, saffron, and aromatic spices.",
      "ingredients": "Chicken, Basmati rice, Saffron, Onions, Yogurt, Garlic, Ginger, Spices",
      "instructions": "1. Marinate chicken in yogurt and spices.\n2. Fry onions till golden.\n3. Layer chicken and rice.\n4. Cook on low flame for 30 minutes.",
      "price": "350",
      "catagories": "dinner"
    },
    {
      "id": 5,
      "title": "Pancakes with Maple Syrup",
      "recipe_url": "https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      "description": "Fluffy homemade pancakes served with maple syrup and butter — a breakfast favorite!",
      "ingredients": "Flour, Eggs, Milk, Sugar, Baking powder, Butter, Maple syrup",
      "instructions": "1. Mix dry ingredients.\n2. Add eggs and milk to form batter.\n3. Cook on pan until golden.\n4. Serve with butter and syrup.",
      "price": "180",
      "catagories": "breakfast"
    }
  ]

  )

  
  return (
    <div>
      <MyRecipeContext.Provider value={[data, setdata]}>
        {children}
      </MyRecipeContext.Provider>
    </div>
  )
}

export default RecipeContext