import React from 'react';
import { connect, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { fetchImages } from '../redux/actionCreators';
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
    width: 500,
    height: 450,
  }
}));

const ImageGrid = (props) => {
  const classes = useStyles();

  props.fetchImages();

  const tileData = []/*useSelector((state) => state && state.images)*/;

  return (
    <div className={classes.root}>
      <GridList 
        cellHeight={180} 
        className={classes.gridList}>
          
        <GridListTile 
          key="Subheader" 
          cols={2} 
          style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>

        {tileData.map((tile) => (
          <ImageItem />
        ))}
      </GridList>
    </div>
  );
};

const mapStateToProps = null
const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(fetchImages)
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);