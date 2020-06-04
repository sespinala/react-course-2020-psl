import React from 'react';
import SearchBar from '../components/SearchBar';
import ImageGrid from '../components/ImageGrid';
import { fetchImages } from '../redux/actionCreators';
import { connect } from 'react-redux';

const Dashboard = (props) => {
  props.fetchImages();
  return (
    <div>
      <SearchBar />
      <ImageGrid />
    </div>
  );
};

const mapStateToProps = null
const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(fetchImages)
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);