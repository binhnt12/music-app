import React, { createContext, useState, useContext } from 'react';

const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [categoryId, setCategoryId] = useState(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const handleSelectedCategoryId = (index) => {
    setSelectedCategoryId(index);
  };

  const handleCategoryId = (index) => {
    setCategoryId(index);
  };

  return (
    <CategoryContext.Provider
      value={{
        categoryId,
        handleCategoryId,
        selectedCategoryId,
        handleSelectedCategoryId,
      }}>
      {children}
    </CategoryContext.Provider>
  );
}

function useCategoryState() {
  var context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategoryState must be used within a CategoryProvider');
  }
  return context;
}

export { CategoryProvider, useCategoryState };
