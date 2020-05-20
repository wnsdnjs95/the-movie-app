import React from 'react';
import { Col } from 'antd';

function GridCards(props) {
  return (
    <Col lg={6} md={8} xs={24}>
      {/* 전체 사이즈가 24이고, 전체 웹사이즈가 가장 클때는 6씩 4개,
        중간은 8씩 3개, 가장 작을때는 24 1개*/}
      <div style={{ position: 'relative' }}>
        <a href={`/movie/${props.movieId}`}>
          <img
            style={{ width: '100%', height: '320px' }}
            src={props.image}
            alt={props.movieName}
          />
        </a>
      </div>
    </Col>
  );
}

export default GridCards;
