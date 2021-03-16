import React, { Component } from 'react';
import './App.scss';
import Searchbar from './Searchbar';
import Button from './Button';
import { LoaderTailSpin } from './Loader';
import Modal from './Modal';
import ImageGallery from './ImageGallery';
import ContainerCentered from './ContainerCentered';
import imagesApi from '../services/images-api';

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    per_page: 12,
    showModal: false,
    loadMore: false,
    isLoading: false,
    error: null,
    message: '',
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true });
      this.getImages();
    }
  }

  getImages = () => {
    const { query, page, per_page } = this.state;
    const options = { query, page, per_page };
    imagesApi
      .getImages(options)
      .then(data => {
        this.galleryContentHandler(data);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  galleryContentHandler = data => {
    if (data.totalHits === 0) {
      this.setState({ message: 'There is no images for your query' });
      return;
    }
    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
    }));
    if (data.totalHits - this.state.images.length > 0) {
      this.loadMore();
    } else {
      this.setState({ loadMore: false });
    }
    this.handleAutoScrollDown();
  };

  handleAutoScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    this.setState({ loadMore: true });
  };

  onSubmit = query => {
    this.setState({
      query: query,
      page: 1,
      images: [],
      error: null,
      message: '',
      loadMore: false,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    if (this.state.showModal) {
      this.setState({ largeImage: '' });
    }
  };

  showLargeImage = url => {
    this.setState({ largeImage: url });
    this.toggleModal();
  };

  handleShowMore = () => {
    this.setState({
      isLoading: true,
      error: null,
    });
    this.getImages();
  };

  render() {
    const { onSubmit, handleShowMore, toggleModal, showLargeImage } = this;
    const {
      showModal,
      images,
      loadMore,
      isLoading,
      error,
      message,
      largeImage,
    } = this.state;
    const shouldRenderLoadMoreButton = loadMore && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={onSubmit} />
        {images.length > 0 && (
          <ImageGallery images={images} showLargeImage={showLargeImage} />
        )}
        {error && (
          <ContainerCentered>
            <p>Something went wrong ....</p>
          </ContainerCentered>
        )}
        {isLoading && (
          <ContainerCentered>
            <LoaderTailSpin />
          </ContainerCentered>
        )}
        {shouldRenderLoadMoreButton && (
          <ContainerCentered>
            <Button handleShowMore={handleShowMore} label="Show more" />
          </ContainerCentered>
        )}
        {message && (
          <ContainerCentered>
            <p>{message}</p>
          </ContainerCentered>
        )}
        {showModal && (
          <Modal onClose={toggleModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
