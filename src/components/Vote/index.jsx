import React, { useEffect, useState } from 'react';
import Template from 'components/Template';
import gradient from 'random-gradient';
import { v4 as uuidv4 } from 'uuid';
import { ImHeart } from 'react-icons/im';
import { AiFillEye } from 'react-icons/ai';
import { API } from 'aws-amplify';

export default function Vote() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics();
  }, []);

  const getTopics = async () => {
    try {
      const topics = await API.get('topicapi', '/topic');
      if (topics) {
        setTopics(topics);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Template>
      <div className="spacer"></div>
      {topics.map((t, idx) => (
        <TopicBox data={t} key={idx} />
      ))}
    </Template>
  );
}

const TopicBox = ({ data }) => {
  const styles = {
    height: '8rem',
    background: gradient(uuidv4()),
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
    borderRadius: '0.5rem/5%',
    color: 'white',
    padding: '1rem',
    marginBottom: '1rem',
    position: 'relative',
    cursor: 'pointer'
  };
  return (
    <div style={styles} onClick={}>
      <strong>{data.title}</strong>
      <br />
      <small style={{ color: '#f5f5f5' }}>{data.date}</small>
      <br />
      <div
        style={{ bottom: '1rem', position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '90%' }}
      >
        <small>
          <AiFillEye /> {data.views}
        </small>
        <small>
          <ImHeart /> {data.votes}
        </small>
      </div>
    </div>
  );
};
