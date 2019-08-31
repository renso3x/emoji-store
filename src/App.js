import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';

import './App.css';
import * as S from './styled';

import EmojiCard from './EmojiCard';
import Ads from './Ads';
import SortBy from './SortBy';
import EndContent from './EndContent';
import Loader from './Loader';

import { fetchEmojisAPI, fetchAdsAPI } from './services';

const { Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [],
      page: 1,
      limit: 15,
      hasMore: true,
      isLoading: false,
      sortBy: '',
      options: ['id', 'size', 'price']
    };

    window.onscroll = () => {
      const {
        fetchProducts,
        state: { hasMore, isLoading }
      } = this;

      if (isLoading || !hasMore) return;

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        fetchProducts();
      }
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    this.setState({ isLoading: true }, async () => {
      const { page, limit, sortBy } = this.state;
      try {
        let urlParam = `_page=${page}`;
        const sortByParam = `&_sort=${sortBy}`;
        const limitParam = `&_limit=${limit}`;

        if (sortBy !== '') {
          urlParam += sortByParam;
        }
        if (page >= 10) {
          urlParam += limitParam;
        }

        const res = await fetchEmojisAPI(urlParam);

        this.setState({
          emojis: this.getEmojis(this.state.emojis, res.data),
          page: this.state.page + 1,
          hasMore: res.data.length > 0,
          isLoading: false
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  getEmojis = (prevData, newData) => {
    const newArray = [...prevData, ...newData];

    newArray.map((arr, index) => {
      if (index > 0 && index % 20 === 0) {
        newArray.splice(index, 1, fetchAdsAPI());
      }
      return arr;
    });

    return newArray;
  };

  handleSort = e => {
    this.setState(() => ({
      sortBy: e.target.value,
      isLoading: true,
      emojis: [],
      page: 1
    }));

    this.fetchProducts();
  };

  renderEmojis = () => {
    const { emojis } = this.state;
    return (
      <Row gutter={16}>
        {emojis.map((emoji, index) => {
          return (
            <Col key={emoji.id || index} span={6}>
              {emoji.id ? <EmojiCard emoji={emoji} /> : <Ads ads={emoji} />}
            </Col>
          );
        })}
      </Row>
    );
  };

  render() {
    const { isLoading, hasMore, sortBy, options } = this.state;
    return (
      <Layout className="layout">
        <S.HeaderContent>
          <h1>Emoji Store</h1>
        </S.HeaderContent>
        <Content className="content">
          <Row>
            <S.PaddingContent>
              Here you're sure to find a bargain on some of the finest ascii
              available to purchase. Be sure to peruse our selection of ascii
              faces in an exciting range of sizes and prices.
            </S.PaddingContent>
            <S.PaddingContent right>
              <span>Sort By </span>
              <SortBy
                options={options}
                sortBy={sortBy}
                onChange={this.handleSort}
              />
            </S.PaddingContent>
          </Row>
          {this.renderEmojis()}
          {isLoading && <Loader />}
        </Content>
        <Footer className="text-center">{!hasMore && <EndContent />}</Footer>
      </Layout>
    );
  }
}

export default App;
