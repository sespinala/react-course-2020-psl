import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CircularProgress from '@material-ui/core/CircularProgress';

import ImageItem from './ImageItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  }
}));

const ImageGrid = (props) => {
  const classes = useStyles();

  if (props.isLoading) return (<CircularProgress></CircularProgress>)
  return (
    <div className={classes.root}>
      <GridList 
        cellHeight={180} 
        className={classes.gridList}>
        {
          props.images.map(image => (
            <ImageItem key={image.id} {... image} />
          ))
        }
      </GridList>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.imagesList.images,
  isLoading: state.imagesList.isLoading,
});

export default connect(mapStateToProps)(ImageGrid);