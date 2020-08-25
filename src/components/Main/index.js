import React, { useState, useEffect } from "react";
import { fetchItems } from "api/items";
import Navbar from "components/Navbar";
import VoteItemContainer from "components/FeedItemContainer";
import { Image } from "react-bootstrap";

const Main = () => {
  const loadingImage = "assets/images/loading.gif";
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getItems = async (after = "") => {
    setLoading(true);
    const items = await fetchItems(after);
    setItems((prevItems) => {
      return [...prevItems, ...items];
    });
    setLoading(false);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div style={{ maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
      <Navbar />
      <div style={{ marginTop: "3rem" }}>
        <VoteItemContainer
          items={items}
          isLoading={isLoading}
          getItems={getItems}
        />
        {isLoading && <Image src={loadingImage} alt="loading img" fluid />}
      </div>
    </div>
  );
};

export default Main;
