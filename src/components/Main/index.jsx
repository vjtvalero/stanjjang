import React, { useState, useEffect } from 'react';
import { fetchItems } from 'api/items';
import FeedItemContainer from 'components/FeedItemContainer';
import { Image } from 'react-bootstrap';
import Template from 'components/Template';

const Main = () => {
  const loadingImage = 'assets/images/loading.gif';
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getItems = async (after = '') => {
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
    <Template>
      <div style={{ marginTop: '3rem' }}>
        <FeedItemContainer items={items} isLoading={isLoading} getItems={getItems} />
        {isLoading && <Image src={loadingImage} alt="loading img" fluid />}
      </div>
    </Template>
  );
};

export default Main;
