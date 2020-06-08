import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import { selectImage, unSelectImage } from '../redux/actionCreators'
import { connect } from 'react-redux';
var _ = require('lodash');

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const renderActionIcon = (isSelected) => {
  if (isSelected) {
    return (<RemoveShoppingCartIcon />);
  } else {
    return (<AddShoppingCartIcon />);
  }
}
    
const isImageSelected = (image, selectedImages) => {
  const isSelected = selectedImages.find(img => _.isEqual(img, image));
  
  return !_.isEmpty(isSelected);
};

const ImageItem = props => {
  const classes = useStyles();

  const { id, image, name, price, onSelect, onUnselect, selectedImages } = props;
  const img = { id, image, name, price };

  const isSelected = isImageSelected(img, selectedImages);

  return (
    <GridListTile>
      <img 
        src={image} 
        alt={image} />

      <GridListTileBar
        title={price}
        subtitle={
          <span>By: {name}</span>
        }
        actionIcon={
          <IconButton className={classes.icon}
            onClick={() => { isSelected ?  onUnselect(img) : onSelect(img) } } >
              { renderActionIcon(isSelected) }
          </IconButton>
        }
      />

    </GridListTile>
  );
};

const mapDispatchToProps = { 
  onSelect: selectImage, 
  onUnselect: unSelectImage 
};
const mapStateToProps = state => ({
  selectedImages: state.imagesList.selectedImages
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageItem);