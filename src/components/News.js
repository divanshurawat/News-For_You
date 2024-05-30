import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 5,
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Mexico violence: Bodies found dumped in ravine are missing call centre workers",
      description:
        "Dozens of bags containing human remains were found dumped in a ravine in Jalisco last week.",
      url: "http://www.bbc.co.uk/news/world-latin-america-65832537",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/13E49/production/_130018418_mexico.jpg",
      publishedAt: "2023-06-07T12:37:18.1269549Z",
      content:
        "Tests carried out on human remains found dumped in a ravine in Mexico suggest they are those of workers who disappeared from a call centre.\r\nEight young employees were reported missing in the days le… [+3201 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Ukraine dam breach rescue operation... in 61 seconds",
      description:
        "The BBC's James Waterhouse reports from a town flooded by the recent dam breach.",
      url: "http://www.bbc.co.uk/news/world-europe-65832665",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/17F0D/production/_130016089_cover.jpg",
      publishedAt: "2023-06-07T11:52:17.7328291Z",
      content:
        "A dam breach in Russian controlled Nova Kakhovka area of southern Ukraine has resulted in thousands of people being evacuated and rescued.\r\nThe areas effected stretch from Nova Kakhovka to near the b… [+278 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "The one thing Mike Pence needs to beat his old boss in 2024",
      description:
        "The former VP was Trump's ambassador to the Christian right - now evangelicals can help him in 2024.",
      url: "http://www.bbc.co.uk/news/world-us-canada-65814309",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/09C4/production/_130000520_20168683001d00722922f25512e9343e004ea7b2.jpg",
      publishedAt: "2023-06-07T10:07:24.2681612Z",
      content:
        "Media caption, How Mike Pence became a villain in Trump world\r\nIn a traditional American political world, Mike Pence's 2024 presidential campaign would have a lot going for it.\r\nA politician with exp… [+4207 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Pope Francis, 86, to have abdominal surgery",
      description:
        "The 86-year-old is being hospitalised for a third time in two years, amid persistent health issues.",
      url: "http://www.bbc.co.uk/news/world-europe-65821047",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/CA80/production/_130004815_96db27dca9ce9f7f8ccee573ce1245900c78ec7e0_7_3072_17281000x563.jpg",
      publishedAt: "2023-06-07T09:37:26.4546373Z",
      content:
        'Pope Francis will have surgery on his abdomen on Wednesday afternoon at Rome\'s Gemelli hospital. \r\nHe is expected to stay in hospital for "several days" to recover from the hernia operation, the Vati… [+1322 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Prince Harry in court latest: Duke being cross-examined in hacking trial",
      description:
        'On Tuesday, Harry said reporters started hacking his phone as a teenager - creating "huge paranoia".',
      url: "http://www.bbc.co.uk/news/live/uk-65767193",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2023-06-07T09:37:24.8769055Z",
      content:
        "Prince Harry gave his first day of evidence in the witness box yesterday, as part of his case against Mirror Group Newspapers.\r\nIn doing so, he became the first senior royal to give evidence in court… [+798 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC Sport",
      title: "'Golf merger brings peace, but turmoil lies ahead'",
      description:
        "The PGA and DP World Tour's shock merger with LIV Golf brings peace between the factions now, but turmoil lies ahead, writes BBC Sport's Iain Carter.",
      url: "http://www.bbc.co.uk/sport/golf/65830436",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/110D1/production/_130014896_rory.jpg",
      publishedAt: "2023-06-07T09:07:24.8617454Z",
      content:
        "Rory McIlroy [left] and Tiger Woods were the faces of the PGA Tour's fight with LIV Golf's Greg Norman\r\nWhen the email dropped it was like reading an April Fools' Day spoof, so far-fetched was the no… [+5249 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Rishi Sunak to raise trade issues in US talks with Joe Biden",
      description:
        'The prime minister says "subsidy races" are not a solution to hitting climate goals, as he visits Washington.',
      url: "http://www.bbc.co.uk/news/uk-politics-65828817",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/13061/production/_130012977_sunakplanerishisunak.png",
      publishedAt: "2023-06-07T08:52:17.9705143Z",
      content:
        "Prime Minister Rishi Sunak has said he expects to discuss Joe Biden's flagship package of investment in green industries when he meets the president during his trip to the United States.\r\nOn the plan… [+4168 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Seven shot and two killed at Virginia high school graduation",
      description:
        "A father, 36, and his recently graduated son, 18, were killed in the shooting.",
      url: "http://www.bbc.co.uk/news/world-us-canada-65829241",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D7C9/production/_130014255_39a5196783adb53d835d2fcc248f68ddb8b46b7a1387_55_4629_26041000x563.jpg",
      publishedAt: "2023-06-07T07:07:26.4398553Z",
      content:
        "Two people have been killed and five others injured in a shooting that took place during a high school graduation ceremony in Richmond, Virginia. \r\nThe shooting outside the Atria Theater sent student… [+2148 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Ukraine war latest: UN warns of 'grave consequences' after Nova Kakhovka dam breached",
      description:
        "The UN's aid chief says the scale of the catastrophe at the Kakhovka dam will only become clear in the coming days.",
      url: "http://www.bbc.co.uk/news/live/world-europe-65816109",
      urlToImage:
        "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2023-06-07T06:52:22.5025363Z",
      content:
        "A senior Nato official says Russian actors most likely had\r\na motive to damage the Nova Kakhovka dam, but he added that it was still too\r\nearly to make an assessment. The official ruled out an air st… [+1222 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Canada wildfire smoke threatens health of millions",
      description:
        "Air quality advisories have been issued across Canada and the US as wildfire smoke travels south.",
      url: "http://www.bbc.co.uk/news/world-us-canada-65828469",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1BC6/production/_130001170_gettyimages-1258484362.jpg",
      publishedAt: "2023-06-06T19:37:22.6781583Z",
      content:
        "High-risk air quality warnings have been issued for millions of people across North America due to ongoing wildfires in Canada.\r\nWildfire smoke has blanketed major cities in Ontario and Quebec, inclu… [+3802 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello birther");
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async UpdateNews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c72bdc5c2b014cf68e1a8f2d51fd2f9e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.UpdateNews();
  }

  HandleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.UpdateNews();
  };
  HandlePreviousClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.UpdateNews();
  };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c72bdc5c2b014cf68e1a8f2d51fd2f9e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };
  render() {
    return (
      <div className="conatainer my-2">
        <h1 className="text-center">
          {this.props.category !== "general"
            ? `NewsForYou - Top ${this.props.category} headlines specially for you`
            : "NewsForYou - Top headlines specially for you"}
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 mx-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={
                        element.description
                          ? element.description.slice(0, 80)
                          : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.HandlePreviousClick}
            >
              {" "}
              &larr;Previos
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.HandleNextClick}
            >
              Next&rarr;
            </button>
          </div> */}
      </div>
    );
  }
}

export default News;
