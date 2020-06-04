import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { selectImage, unSelectImage } from '../redux/actionCreators'
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const ImageItem = props => {
  const classes = useStyles();

  const { id, image, name, price, onSelect } = props;

  console.log(props);

  return (
    <GridListTile key={id}>
      <img src={image} alt={image} />

      <GridListTileBar
        title={price}
        subtitle={
          <span>By: {name}</span>
        }
        actionIcon={
          <IconButton className={classes.icon}
            onClick={() => { onSelect(image) } } >
            <InfoIcon />
          </IconButton>
        }
      />

    </GridListTile>
  );
};

const mapDispatchToProps = { onSelect: selectImage, onUnselect: unSelectImage }
const mapStateToProps = state => ({
  selectedImages: state.imagesList.selectedImages
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageItem);