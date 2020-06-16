import React from 'react';

var CategoryContext = React.createContext();

function CategoryProvider({ children }) {
  var [categoryId, setCategoryId] = React.useState(null);
  var [selectedCategoryId, setSelectedCategoryId] = React.useState(0);

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
  var context = React.useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategoryState must be used within a CategoryProvider');
  }
  return context;
}

export { CategoryProvider, useCategoryState };
