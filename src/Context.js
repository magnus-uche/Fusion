import React from "react";
import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import { reducer } from "./reducer";
import { todaysdeal } from "./data";
import { heroImage } from "./data";
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
  getCategoriesAndDocuments
} from "./utils/firebase/firebase.util";
const AppContext = React.createContext();
const url = "https://fakestoreapi.com/products";

const initialState = {
  cartProduct: [],
  searchTerm: "",
  total: 0,
  price: 0,
  amount: 0,
  products: [],
};

const AppProvider = ({ children }) => {
  const [fireData, setFireData] = useState([]);
  console.log("fire",fireData);

  const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isSubMenuOpen, SetIsSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});

  useEffect(() => {
    const unscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unscribe;
  }, []);


  const fetchData = useCallback(async () => {
    const response = await fetch(url);
    const product = await response.json();

    const filterData = product.filter((items) => {
      return items.title.toLowerCase().includes(searchField);
    });
    //dynamically add key-value pairs
    const data = filterData.map((item) => {
      const newItem = {
        ...item,
        ["amount"]: 1,
        ["intialPrice"]: item.price,
      };
      return newItem;
    });
    const deals = todaysdeal.map((item) => {
      return { ...item, ["amount"]: 1 };
    });
    const heroImg = heroImage.map((item) => {
      return { ...item, ["amount"]: 1 };
    });

    // merge the url data and base data
    const newData = [...data, ...deals, ...heroImg];
    
    const getItem = (arr, id) => {
      const items = new Map();
  
      for (let index = 0; index < arr.length; index++) {
        if (id.includes(arr[index].category)) {
          const category = arr[index].category;
          if (!items.has(category)) {
            items.set(category, []);
          }
          items.get(category).push(arr[index]);
        }
      }
      
      const categories = Array.from(items.keys());
      const result = [];
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const categoryItems = items.get(category);
        result.push({ title: category, items: categoryItems });
      }
      return result;
    
      };
    const getitems = getItem(newData, [
      "electronics",
      "computer",
      "jewelery",
      "phone",
      "bags",
      "men's clothing",
      "women's clothing",
      "kids",
    ]);
    setFireData(getitems)
    dispatch({ type: "UPDATE-PRODUCT", payload: newData });
    setIsLoading(false);
  }, [searchField]);

  useEffect(() => {
    fetchData();
  }, [searchField]);

  
  useEffect(()=>{
    const getCategoriesMap = async ()=> {
     const categoryMap = await getCategoriesAndDocuments()
     console.log(categoryMap);
    }
    getCategoriesMap()
   },[])

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cartProduct]);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const addCart = (id) => {
    dispatch({ type: "ADD-TO-CART", payload: id });
  };

  const openCategory = (coordinate) => {
    setLocation(coordinate);
    setIsCategoriesOpen(true);
  };

  const closeCategory = () => {
    setIsCategoriesOpen(false);
  };

  const openSidebar = () => {
    setIsSideBarOpen(true);
  };
  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };
  const openSubmenu = () => {
    SetIsSubMenuOpen(true);
  };

  const closeSubmenu = () => {
    SetIsSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        increase,
        decrease,
        addCart,
        remove,
        setSearchField,
        isLoading,
        isCategoriesOpen,
        openCategory,
        closeCategory,
        isSideBarOpen,
        openSidebar,
        closeSidebar,
        isSubMenuOpen,
        openSubmenu,
        closeSubmenu,
        location,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
