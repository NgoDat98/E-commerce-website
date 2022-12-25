import { useCallback } from "react";

const useProduct = (item) => {
  const productData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      const ItemsData = [];

      for (const key in data) {
        ItemsData.push({
          id: data[key]._id.$oid,
          name: data[key].name,
          price: data[key].price,
          category: data[key].category,
          short_desc: data[key].short_desc,
          long_desc: data[key].long_desc,
          img1: data[key].img1,
          img2: data[key].img2,
          img3: data[key].img3,
          img4: data[key].img4,
        });
      }
      item(ItemsData);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return {
    productData: productData,
  };
};

export default useProduct;
