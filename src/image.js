import PropTypes from 'prop-types';
import wurd from 'wurd-web';


const WurdImage = (props) => {
  let {id} = props;

  let url = wurd.get(id);

  return (
    <img {...props} data-wurd-img={id} src={url} />
  );
};


WurdImage.propTypes = {
  id: PropTypes.string.isRequired
};


export default WurdImage;
