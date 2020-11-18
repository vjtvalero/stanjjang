import React, { useState, useEffect } from 'react';
import { fetchItems } from 'api/items';
import Navbar from 'components/Navbar';
import FeedItemContainer from 'components/FeedItemContainer';
import { Image } from 'react-bootstrap';
import { apiIsLoggedIn } from 'api/account';
import BottomNavbar from 'components/Navbar/BottomNavbar';

const Main = () => {
  const loadingImage = 'assets/images/loading.gif';
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});
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
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const result = await apiIsLoggedIn();
    setProfile(result);
  };

  return (
    <div style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
      <Navbar profile={profile} />
      <div style={{ marginTop: '3rem' }}>
        <FeedItemContainer items={items} isLoading={isLoading} getItems={getItems} />
        {isLoading && <Image src={loadingImage} alt="loading img" fluid />}
      </div>
      <BottomNavbar />
    </div>
  );
};

export default Main;
