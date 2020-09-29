import React from 'react';
import Flex from 'common/Flex';
import Spinner from 'common/Spinner';

function Loading() {
  return (
    <Flex flexGrow="1" justifyContent="center" alignItems="center">
      <Spinner />
    </Flex>
  );
}

export default Loading;
