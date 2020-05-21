import React from 'react';
import { Descriptions, Badge } from 'antd';

function MovieInfo(props) {
  let { movie } = props;

  return (
    <Descriptions title="Movie Info" bordered>
      <Descriptions.Item label="제목">{movie.original_title}</Descriptions.Item>
      <Descriptions.Item label="개봉일자">
        {movie.release_date}
      </Descriptions.Item>
      <Descriptions.Item label="매출">{movie.revenue}</Descriptions.Item>
      <Descriptions.Item label="상영 시간(분)">
        {movie.runtime}
      </Descriptions.Item>
      <Descriptions.Item label="평점" span={2}>
        {movie.vote_average}
      </Descriptions.Item>
      <Descriptions.Item label="추천 수">{movie.vote_count}</Descriptions.Item>
      <Descriptions.Item label="개봉 여부">{movie.status}</Descriptions.Item>
      <Descriptions.Item label="인기도">{movie.popularity}</Descriptions.Item>
    </Descriptions>
  );
}

export default MovieInfo;
