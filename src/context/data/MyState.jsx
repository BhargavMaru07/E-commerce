import { useState, useEffect } from "react";
import MyContext from "./MyContext";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  Timestamp,
  QuerySnapshot,
  doc,
  deleteDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { fireDB } from "../../firebase/FirebaseConfig";
import { data } from "autoprefixer";

export const MyState = ({ children }) => {
  let [mode, setMode] = useState("light");
  let [loading, setLoading] = useState(false);

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  let [products, setProducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // ********************** Add Product Section  **********************

  const addProduct = async () => {
    setLoading(true);
    if (
      products.title == "" ||
      products.price == "" ||
      products.imageUrl == "" ||
      products.category == "" ||
      products.description == ""
    ) {
      setLoading(false);
      return toast.error("All Fields are required");
    }

    const productRef = collection(fireDB, "products");

    try {
      await addDoc(productRef, products);
      toast.success("Product Add successfully");

      setProducts({
        ...products,
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        description: "",
      });

      getProductData();

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Error Occurred In AddProduct");
    } finally {
      setLoading(false);
    }
  };

  let [product, setProduct] = useState([]);

  //*********get Product

  const getProductData = async () => {
    setLoading(true);

    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));

      //onSnapshot explaination below...
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];

        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });

        setProduct(productsArray);
        setLoading(false);
      });

      return () => data; //it's explanation below
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error Occurred In GetProductData");
    }
  };

  //editHandle....................

  let editHandle = (item) => {
    setProducts(item);
  };

  //Update Products................

  let updateProduct = async (item) => {
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully");
      getProductData();
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Error!!!!!!!");
    } finally {
      setLoading(false);
      setProducts({
        ...products,
        title: "",
        price: "",
        imageUrl: "",
        category: "",
        description: "",
      });
    }
  };

  //delete Products....................

  let deleteProduct = async (item) => {
    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success("Product Deleted Successfully!!");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error in deleteProduct!!!!!");
    }
  };

  //order data.........................

  let [order, setOrder] = useState([]);

  let getOrderData = async () => {
    setLoading(true);
    try {
      let result = await getDocs(collection(fireDB, "orders"));
      let orderArray = [];

      result.forEach((doc) => {
        orderArray.push(doc.data());
      });
      setLoading(false);
      setOrder(orderArray);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  //user data......................

  let [user,setUser] = useState([])

  let getUserData = async ()=>{
      setLoading(true)
      let userArray = []

      try {
        let result = await getDocs(collection(fireDB,'users'))
        result.forEach((doc)=>{
          userArray.push(doc.data())
        })
        setLoading(false)
        setUser(userArray)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
  }

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);


  let [searchKey,setSearchKey] = useState('')
  let [filterType,setFilterType] = useState('')
  let [filterPrice,setFilterPrice] = useState('')

  return (
    //for multiple value, we create object and wrape all values in it
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        editHandle,
        updateProduct,
        deleteProduct,
        order,
        user,
        searchKey,
        setSearchKey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

/* 
Why is return () => data Used?

The onSnapshot method sets up a real-time listener to Firestore, meaning it listens for updates and triggers the callback whenever the data changes.

Firestore provides a listener unsubscribe function when you call onSnapshot. This function (data in your code) is used to detach the listener when it is no longer needed.

Key Purpose

This cleanup function (return () => data) ensures that when the component using this listener is unmounted, the real-time listener is unsubscribed.

Without it, the listener will remain active even if the component is removed, causing memory leaks or unwanted updates to a non-existent component.

How It Works

When getProductData is called, onSnapshot sets up a Firestore listener and assigns the unsubscribe function to data.
The return () => data ensures that the listener is cleaned up when the component unmounts.

*/
