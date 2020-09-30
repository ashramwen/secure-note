import React from 'react';
import Flex from 'common/Flex';
import Spinner from 'common/Spinner';

function Loading({ overlay, absolute }) {
  return (
    <Flex
      flexGrow="1"
      justifyContent="center"
      alignItems="center"
      bg={overlay && 'rgba(0, 0, 0, 0.3)'}
      position={absolute && 'absolute'}
      height="100%"
      width="100%"
    >
      <Spinner />
    </Flex>
  );
}

export default Loading;
