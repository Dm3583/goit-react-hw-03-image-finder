import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import Searchbar from './Searchbar';
import Button from './Button';
import { LoaderTailSpin } from './Loader';
import Modal from './Modal';
import ImageGallery from './ImageGallery';

const API_KEY = '19762883-8865d0dea9f1f7e21a434f769';
const BASE_URL = 'https://pixabay.com/api/';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    per_page: 12,
    isModalOpen: false,
    isLoadMore: false,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      this.getImages();
    }
  }

  getImages = () => {
    const { query, page, per_page } = this.state;
    return axios
      .get(
        `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
      )
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState(({ images }) => ({ images: [...images, ...data.hits] }));
        this.setState({ isLoading: false });
        if (data.totalHits - this.state.page * this.state.per_page > 0) {
          this.setState({ isLoadMore: true });
          this.incrementPage();
        } else {
          this.setState({ isLoadMore: false });
        }
      });
  };

  onSubmit = query => {
    this.setState({ query: query, page: 1, images: [] });
  };

  incrementPage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { onSubmit, getImages } = this;
    const { isModalOpen, images, isLoadMore, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={onSubmit} />

        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <LoaderTailSpin />}
        {isLoadMore && !isLoading && (
          <Button handleShowMore={getImages}>Load more</Button>
        )}

        {isModalOpen && <Modal />}
      </div>
    );
  }
}

export default App;
