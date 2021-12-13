import React from "react";

import fakeData from "../../data/fakeData";
import AlbumCategory from "../../components/AlbumCategory";
import PreviousSong from "../../components/PreviousSong";
import RecommendedArtist from "../../components/RecommendedArtist";

export default [
  {
    key: fakeData[0].key,
    render: () => (
      <PreviousSong title={fakeData[0].title} albums={fakeData[0].albums} />
    ),
  },
  {
    key: fakeData[1].key,
    render: () => (
      <AlbumCategory title={fakeData[1].title} albums={fakeData[1].albums} />
    ),
  },
  {
    key: fakeData[2].key,
    render: () => (
      <AlbumCategory title={fakeData[2].title} albums={fakeData[2].albums} />
    ),
  },
  {
    key: fakeData[3].key,
    render: () => (
      <AlbumCategory title={fakeData[3].title} albums={fakeData[3].albums} />
    ),
  },
  {
    key: fakeData[4].key,
    render: () => (
      <AlbumCategory title={fakeData[4].title} albums={fakeData[4].albums} />
    ),
  },
  {
    key: fakeData[5].key,
    render: () => (
      <AlbumCategory title={fakeData[5].title} albums={fakeData[5].albums} />
    ),
  },
  {
    key: fakeData[6].key,
    render: () => (
      <AlbumCategory title={fakeData[6].title} albums={fakeData[6].albums} />
    ),
  },
  {
    key: fakeData[7].key,
    render: () => (
      <AlbumCategory title={fakeData[7].title} albums={fakeData[7].albums} />
    ),
  },
  {
    key: fakeData[8].key,
    render: () => (
      <AlbumCategory title={fakeData[8].title} albums={fakeData[8].albums} />
    ),
  },
  {
    key: fakeData[9].key,
    render: () => (
      <AlbumCategory title={fakeData[9].title} albums={fakeData[9].albums} />
    ),
  },
  {
    key: fakeData[10].key,
    render: () => (
      <AlbumCategory title={fakeData[10].title} albums={fakeData[10].albums} />
    ),
  },
  {
    key: fakeData[11].key,
    render: () => (
      <AlbumCategory title={fakeData[11].title} albums={fakeData[11].albums} />
    ),
  },
  {
    key: fakeData[12].key,
    render: () => (
      <RecommendedArtist
        title={fakeData[12].title}
        artists={fakeData[12].artists}
      />
    ),
  },
  {
    key: fakeData[13].key,
    render: () => (
      <AlbumCategory title={fakeData[13].title} albums={fakeData[13].albums} />
    ),
  },
  {
    key: fakeData[14].key,
    render: () => (
      <AlbumCategory title={fakeData[14].title} albums={fakeData[14].albums} />
    ),
  },
  {
    key: fakeData[15].key,
    render: () => (
      <AlbumCategory title={fakeData[15].title} albums={fakeData[15].albums} />
    ),
  },
  {
    key: fakeData[16].key,
    render: () => (
      <AlbumCategory title={fakeData[16].title} albums={fakeData[16].albums} />
    ),
  },
  {
    key: fakeData[17].key,
    render: () => (
      <AlbumCategory title={fakeData[17].title} albums={fakeData[17].albums} />
    ),
  },
  {
    key: fakeData[18].key,
    render: () => (
      <AlbumCategory title={fakeData[18].title} albums={fakeData[18].albums} />
    ),
  },
];
