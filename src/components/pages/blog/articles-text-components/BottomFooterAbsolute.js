import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
//import firstImg100vh from '../../../../assets/images/blog-page/articles/footer/min-height-100-200px.png';
//import secondImg100vh200f from '../../../../assets/images/blog-page/articles/footer/min-height-100.png';
//import ReactCompareImage from 'react-compare-image';

export default class BottomFooterAbsolute extends React.Component {

    render() {
        return (
            <React.Fragment className="m-3 p-3">
                <section>
                    <Container >
                        <Row className="mt-5 mb-2">
                            <Col xs="12" md="6" className="align-self-center">
                                <p>
                                    Any Web Developer has faced an issue of a <strong>"flying" footer</strong> once or twice in their life.
                                    This problem occurs when <strong>a page doesn't contain enough content</strong> to show.
                                    There are several solutions that I have found for myself to the mentioned query.
                                </p>
                                <p>In this article, I will explain the second method - <strong>position: absolute</strong>.
                                The first one - <strong>min-height: 100vh</strong> is <Link to={'/blog/footer-bottom-min-height/'}>here</Link>.
                                                    Let's start, again! {`:)`}
                                </p>
                            </Col>
                            <Col xs="12" md="6">
                                <img className="page-screenshot" width="100%" src={require("../../../../assets/images/blog-page/articles/footer/preview-image-2.png")} alt="All element at the top of the page" />
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <h2>Initial settings</h2>
                                <p>
                                    Two documents have been prepared: <strong>index.html</strong>, and <strong>styles.css</strong>.
                            Have a look at them.
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex flex-row flex-wrap justify-content-center align-items-start m-0 p-0">
                            <Col xs="12" md="6" className="m-0 p-0">
                                <img className="page-screenshot mb-3" width="100%" src={require("../../../../assets/images/blog-page/articles/footer/footer-start-html.png")} alt="All element at the top of the page" />
                                <code className="code-styles px-5 py-3 text-light bg-dark">{`
    <!-- index.html -->
    <!-- ********** -->
    
    <!DOCTYPE html>
    <html>
    
    <head>
        <link rel="stylesheet" href="./styles.css">
    </head>
    
    <body>
        <div class="container">
    
            <header>
                header
            </header>
            
            <div class="content">
                content
            </div>
            
        </div>
    
        <footer>
            footer
        </footer>
    
    </body>
    
    </html>`}
                                </code>
                            </Col>
                            <Col xs="12" md="6">
                                <code className="code-styles px-5 py-3 text-light bg-dark">
                                    {`
    /****************/
    
    /* styles.css */
    
    /***************/
    
    * {
        margin: 0;
        padding: 0;
        }
    
    html {
        background-color: lightgray;
        font-size: 50px;
        text-align: center;
        height: 100%;
        }
    
    body {
        background-color: lightsalmon;
    }
    
    .container {
        background-color: skyblue;
    }
    
    header {
        background-color: lemonchiffon;
        margin: 0 5px;
    }
    
    .content {
        background-color: hotpink;
        margin: 0 5px;
    }
    
    footer {
        background-color: aquamarine;
    }`}
                                </code>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <p>For more details go to the first article <Link to={'/blog/footer-bottom-min-height/'}>Footer at the bottom. "min-height"</Link></p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section>
                    <Container>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <h2>Using position absolute</h2>
                                <p> I could say the "position: absolute" it is the most popular way to keep a footer at the bottom.
                Many articles describe this approach. The "absolute" way is always the first suggestion for those who are searching for help with "flying" footer.
                 Invite you to investigate {`:)`}.
    At first, what is <a href="https://www.w3schools.com/css/css_positioning.asp">"position: absolute"</a>?
                                                                                                                                                                                                                                                                 The element is positioned as "absolute" is excluded from the normal document flow and placed in the document relatively to the closest positioned parent i.e parent should have "position:" with one of the values: relative, fixed, sticky, absolute but not static.
                                                                                                                                                                                                                                                                 Let's try to position our footer using "position: absolute". Go to the styles.css and be sure that you have deleted all added before  for the "min-height" approach properties. Add the "position: absolute" property to the footer.
                    </p>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12" md="6">
                                <code className="code-styles px-5 py-2 bg-dark text-light">
                                    {`
    ...
    footer {
        background-color: aquamarine;
        position: absolute;
    }
    ...`}
                                </code>
                            </Col>
                            <Col xs="12" md="6">
                                <img width="100%" src={require("../../../../assets/images/blog-page/articles/footer/pos-absolute-1.png")} alt="All element at the top of the page" />
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <p>Hmm... nothing has benn changed in the order of the elements, but footer now tooks only the amount of place needed for its content.
                                 Nice! Lets fix it and add "width: 100%" to the footer
                       </p>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12" md="6">
                                <code className="code-styles px-5 py-2 bg-dark text-light">
                                    {`
    ...
    footer {
        background-color: aquamarine;
        position: absolute;
        width: 100%;
    }
    ...`}
                                </code>
                            </Col>
                            <Col xs="12" md="6">
                                <img width="100%" src={require("../../../../assets/images/blog-page/articles/footer/pos-absolute-2.png")} alt="All element at the top of the page" />
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <p>{`Now, without adding any other "position" properties (we are going to add it later), let's move the <footer> to the bottom element by adding "bottom:0" to the footer styles in styles.css.`}</p>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12" md="6">
                                <code className="code-styles px-5 py-2 bg-dark text-light">
                                    {`
    ...
    footer {
        background-color: aquamarine;
        position: absolute;
        width: 100%;
        bottom: 0;
    }
    ...`}
                                </code>
                            </Col>
                            <Col xs="12" md="6">
                                <img width="100%" src={require("../../../../assets/images/blog-page/articles/footer/pos-absolute-3.png")} alt="All element at the top of the page" />
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <p>{`Now it is better! Only the footer has its "position", then the default "positioned" parent element for the <footer> is the page itself, not the <body> (we can prove it further).  The footer is in place at the bottom of the page, right? Yes, but it isn't right. If you open Web Developers tools in your browser ->  and find a tab with elements inspecting, you can see that the <footer> is outside the <body>. Hmm, but you know from the index.html that the footer should be inside. Let's fix it! 
                    The parent container for the <footer> is the <body>.So, let's add "position: *something *" to the body, but which one? How it was discribed above it could be: relative, fixed, sticky, but not static. 
                    The "position: relative" is preferred because it doesn't move or fix element if a direction hasn't been mentioned(top, right, bottom, left) like for fixed or sticky which are have an impact on the element without additional properties, but if you need or wan you can use them either. Add "position: relative" to the body.
                    `}</p>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12" md="6">

                                <code className="code-styles px-5 py-2 bg-dark text-light">
                                    {`
    ...
    footer {
        background-color: aquamarine;
        position: absolute;
        width: 100%;
        bottom: 0;
    }
    ...`}
                                </code>
                            </Col>
                            <Col xs="12" md="6">
                                <img width="100%" src={require("../../../../assets/images/blog-page/articles/footer/pos-absolute-3.png")} alt="All element at the top of the page" />
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12">
                                <p>{`Now it is better! Only the footer has its "position", then the default "positioned" parent element for the <footer> is the page itself, not the <body> (we can prove it further).  The footer is in place at the bottom of the page, right? Yes, but it isn't right. If you open Web Developers tools in your browser ->  and find a tab with elements inspecting, you can see that the <footer> is outside the <body>. Hmm, but you know from the index.html that the footer should be inside. Let's fix it! 
    The parent container for the <footer> is the <body>.So, let's add "position: *something *" to the body, but which one? How it was discribed above it could be: relative, fixed, sticky, but not static. 
    The "position: relative" is preferred because it doesn't move or fix element if a direction hasn't been mentioned(top, right, bottom, left) like for fixed or sticky which are have an impact on the element without additional properties, but if you need or wan you can use them either. Add "position: relative" to the body.
    `}</p>
                            </Col>
                        </Row>
                        <Row className="mt-5 mb-2">
                            <Col xs="12" md="6">
                            </Col>
                            <Col xs="12" md="6">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
    ...
    footer {
        background-color: skyblue;
        position: absolute;
        width: 100%;
    }
    ...`}
                            </code>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}