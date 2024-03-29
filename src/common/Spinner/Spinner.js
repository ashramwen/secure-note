import PropTypes from 'prop-types';
import Flex from 'common/Flex';
import { SpinnerSvg } from 'svg';
import { Wrapper } from './Styled';

function Spinner({ overlay, absolute }) {
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
      <Wrapper>
        <SpinnerSvg aria-label="spinner" />
      </Wrapper>
    </Flex>
  );
}

Spinner.propTypes = {
  overlay: PropTypes.bool,
  absolute: PropTypes.bool,
};

Spinner.defaultProps = {
  overlay: false,
  absolute: false,
};

export default Spinner;
