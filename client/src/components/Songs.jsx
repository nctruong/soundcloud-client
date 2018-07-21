import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from "react-js-pagination";
import Song from './Song';

const propTypes = {
  songs: PropTypes.shape(
    {
      count: PropTypes.number.isRequired,
      per: PropTypes.number.isRequired,
      tracks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
        })
      )
    }
  ).isRequired,
  fetchSongs: PropTypes.func.isRequired,
  playSong: PropTypes.func.isRequired,
};

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPage: null,
      activePage: 1
    };
  }

  componentWillMount() {
    const { fetchSongs } = this.props;
    fetchSongs();
  }

  // componentWillReceiveProps(nextProps) {
  //   const { songs, fetchSongs } = this.props;
  //   if (songs.length !== nextProps.songs.length) {
  //     fetchSongs();
  //   }
  // }

  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.props.fetchSongs(pageNumber);
    this.setState({activePage: pageNumber});
  }

  render() {
    const size = this.props.songs.per;
    const col1Songs = this.props.songs.tracks.slice(0, size / 2).map(song => (
      <Song song={song} playSong={this.props.playSong} key={song.id} />
    ));

    const col2Songs = this.props.songs.tracks.slice(size / 2, size).map(song => (
      <Song song={song} playSong={this.props.playSong} key={song.id} />
    ));

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <ul className="songs">
              {col1Songs}
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="songs">
              {col2Songs}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={this.props.songs.per}
              totalItemsCount={this.props.songs.count}
              pageRangeDisplayed={5}
              onChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

Songs.propTypes = propTypes;
export default Songs;
