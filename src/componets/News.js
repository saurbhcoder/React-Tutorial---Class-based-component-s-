// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import propTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {



    static defaultProps = {
        country: "",
        category: "general",
    }

    static propTypes = {
        country: propTypes.string,
        category: propTypes.string
    }


    constructor() {
        super();
        console.log('construtor');
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResult: 0,
            nextDisabled: false,

        }
    }

    async componentDidMount() {
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5293d88a6d245d693060bf7c3442fce&page=${this.state.page}&pageSize=10`);
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalResult: parseData.totalResults,
            loading: false,
            author: parseData.articles.author,
            publishedAt: parseData.articles.publishedAt,
        });
    }

    handelPrevClick = async () => {
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5293d88a6d245d693060bf7c3442fce&page=${this.state.page}&pageSize=10`);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1,
            totalResult: parseData.totalResults,
            nextDisabled: false,
            loading: false,
        });
    }



    handelNextClick = async () => {
        this.setState({ loading: true });
        if (this.state.page + 1 > Math.ceil(this.state.totalResult / 10)) {
            this.setState({
                nextDisabled: true,
            })
        }
        else {
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e5293d88a6d245d693060bf7c3442fce&page=${this.state.page + 1}&pageSize=10`);
            let parseData = await data.json();
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1,
                totalResult: parseData.totalResults,
                loading: false,
            });
        }
    }

    fetchMoreData = async () => {
        this.setState({ loading: true });
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e5293d88a6d245d693060bf7c3442fce&page=${this.state.page}&pageSize=10`);
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResult: parseData.totalResults,
            loading: false,
            author: parseData.articles.author,
            publishedAt: parseData.articles.publishedAt,
        });
    };



    render() {
        return (
            <div>
                
                    <h1>News</h1>

                    {/* {this.state.loading && <Loading/>} */}

                    {/* <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.urlToImage}>
                                <NewsItem
                                    title={element.title ? element.title : ""}
                                    desc={element.description ? element.description : ""}
                                    imgUrl={element.urlToImage ? element.urlToImage : "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/befunky-collage-51-1709617773.jpg"}
                                    newsUrl={element.url}
                                    author={element.author ? element.author : "cool"}
                                    date={element.publishedAt ? element.publishedAt : "12-12-2024"}
                                />
                            </div>
                        })}
                    </div> */}

                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResult}
                        loader={<Loading />}
                        // height={400}
                        endMessage={
                            <p style={{ textAlign: "center" }}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                        {/* {this.state.items.map((i, index) => (
                            <div style={style} key={index}>
                                div - #{index}
                            </div>
                        ))} */}
                        <div className="container my-3">
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.urlToImage}>
                                    <NewsItem
                                        title={element.title ? element.title : ""}
                                        desc={element.description ? element.description : ""}
                                        imgUrl={element.urlToImage ? element.urlToImage : "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2024/03/befunky-collage-51-1709617773.jpg"}
                                        newsUrl={element.url}
                                        author={element.author ? element.author : "cool"}
                                        date={element.publishedAt ? element.publishedAt : "12-12-2024"}
                                    />
                                </div>
                            })}
                        </div>
                        </div>
                    </InfiniteScroll>


                
                {/* <div className="container d-flex justify-content-between">
                    <button type='button' className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handelPrevClick}>prev</button>
                    <button type='button' className="btn btn-dark" disabled={this.state.nextDisabled} onClick={this.handelNextClick}>next</button>
                </div> */}
            </div>
        )
    }
}
