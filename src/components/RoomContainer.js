import React from 'react';

import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

const RoomContainer = ({ context }) => {
  const { loading, sortedRomms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRomms} />
    </>
  );
};

export default withRoomConsumer(RoomContainer);
