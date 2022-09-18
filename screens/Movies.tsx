import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-swiper';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { makeImgPath } from '../utils';
import { BlurView } from 'expo-blur';

// const Btn = styled.TouchableOpacity`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => props.theme.mainBgColor};
//   color: ${(props) => props.theme.textColor};
// `;

// const Title = styled.Text`
//   color: ${(props) => props.theme.textColor};
// `;

// const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = ({
//   navigation: { navigate },
// }) => {
//   return (
//     <Btn onPress={() => navigate('Stack', { screen: 'Page3' })}>
//       <Title>Movies</Title>
//     </Btn>
//   );
// };

const API_KEY = 'c087975e2ff48a49d8ade1fdf44c69c4';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Slide = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.darkBackground};
`;

const Wrapper = styled.View`
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Column = styled.View`
  width: 40%;
  margin-left: 16px;
`;

const BgImg = styled.Image`
  flex: 1;
`;

const Poster = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 5px;
`;
const Title = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 20px;
`;

const Overview = styled.Text`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Votes = styled(Overview)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Movies: React.FC<NativeStackScreenProps<any, 'Movies'>> = () => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);

  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=whiplash&language=en-US&region=US`
      )
    ).json();
    setNowPlaying(results);
    setLoading(false);
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return loading ? (
    <Loader>
      <ActivityIndicator size="small" />
    </Loader>
  ) : (
    <Container>
      <Swiper
        horizontal
        autoplay
        loop
        autoplayTimeout={3}
        showsButtons={false}
        showsPagination={false}
        containerStyle={{ width: '100%', height: SCREEN_HEIGHT / 2 }}
      >
        {nowPlaying.map((movie) => (
          <Slide key={movie.id}>
            <BgImg
              style={StyleSheet.absoluteFill}
              blurRadius={1}
              source={{ url: makeImgPath(movie.backdrop_path) }}
            />
            <Wrapper>
              <Poster source={{ url: makeImgPath(movie.poster_path) }} />
              <Column>
                <Title>{movie.original_title}</Title>
                <Overview>{movie.overview.slice(0, 100)}...</Overview>
                <Votes>&#9733; {movie.vote_average}/10</Votes>
              </Column>
            </Wrapper>
            {/* <BlurView style={StyleSheet.absoluteFill}></BlurView> */}
          </Slide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
