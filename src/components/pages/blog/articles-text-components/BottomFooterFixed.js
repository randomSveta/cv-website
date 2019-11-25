import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import firstImg100vh from '../../../../assets/images/blog-page/articles/footer/min-height-100-200px.png';
import secondImg100vh200f from '../../../../assets/images/blog-page/articles/footer/min-height-100.png';
import ReactCompareImage from 'react-compare-image';

export default function BottomFooterMinHeight(props) {

    return (
        <React.Fragment>
            <section >
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <img className="page-screenshot" width="100%" src={require("../../../../assets/images/blog-page/articles/footer/preview-image-1.png")} alt="All element at the top of the page" />
                        </Col>
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> once or twice in their life.
                                This problem occurs when <strong>a page doesn't contain enough content</strong> to show.
                                There are several solutions that I have found for myself to the mentioned query.
                            </p>
                            <p>In this article, I will explain on of the method - <strong>min-height: 100vh</strong>.
                                Let's try to put the footer into the right place.
                            </p>
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
                            <p>
                                How you can see, <strong>index.html</strong> contains: <strong>{`<html>`}</strong>, <strong>{`<head>`}</strong>, <strong>{`<body>`}</strong>, <strong>{`<header>`}</strong>, <strong>{`<div>`}</strong> with class <em>container</em> -> <strong>header</strong> + <strong>content</strong> (except <strong>footer</strong>) , <strong>{`<div>`}</strong> -> for content, and <strong>{`<footer>`}</strong> elements.
                                                   All elements have different <em>background-color</em> in the <strong>styles.css</strong> doctument to see them more clear.
                    The <strong>{`<html>`}</strong> element also has <em>"width: 100%"</em>, because it is by default, like the <strong>{`<body>`}</strong>, takes only height of all element inside but uses background-color to cover all page 100% of viewport.
                                                                                            So I add <em>"height: 100%"</em> property to make background-color be a real background and reflect the reality.
                                                                                            <em>Margin</em> and <em>padding</em> are <em>0</em> at the start for all components because some elements have default margins and paddings.
                    Then, there are <em>5px left</em> and <em>right margins</em> for the <strong>{`<header>`}</strong> and <strong>.content</strong>, because it would be nice to see the <strong>.container</strong> under other elements.
                                                                                            Furthermore, for screenshots I am using small-screen 740 x 360 px, just to see elements movements on a better scale.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Using min-height</h2>
                            <p>This way is the simplest one, from my point of view.
                                We want all <strong>.container</strong> + <strong>footer</strong> take the whole visible page space.
                                So, let's add to <strong>.container</strong> and <strong>footer</strong> some styles.
                                In the <strong>styles.css</strong> file add <em>min-height: 100vh</em> 
                    (<a className="text-info" href="https://www.w3schools.com/cssref/css_units.asp" alt="viewport height">100vh</a> - means 100% of the height of the viewport).
                </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6">
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

.container {
    background-color: skyblue ;
    border: 5px solid skyblue ;
    min-height: 100vh;
}

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="6">
                            <img className="page-screenshot" width="100%" src={require("../../../../assets/images/blog-page/articles/footer/min-height-100.png")} alt="Class container min-height 100vh" />
            
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <p>You must use "min-height" property for the .container because if use just "height" it means that the height of the element is fixed.
                        If the class with fixed "height" also was applied to the page that takes more than 100% of the viewport.
                        As a result, the content will be cut to the 100% viewport level.
                        How you can see in the picture, the footer is placed after the 100% of the viewport and you need to scroll to find it.
                        Not that convenient and looks like the footer is hidden.
                        No problem, we can change it by adding fixed "height" to the footer and then reduce the "min-height" of ".container" to the footer "height".
                    The best way to do it - using <a className="text-info" href="https://www.w3schools.com/cssref/func_calc.asp">"calc()"</a> function. It is simpler then you can imagen {`:)`}.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
...

.container {
    background-color: skyblue;
    min-height: calc(100vh - 200px);
   /* 200px - the height of the footer */
    }

... 

footer {
    background-color: aquamarine;
    height: 200px;
    }

...
                    `}
                            </code>
                        </Col>
                        <Col xs="12" md="6">
                            <ReactCompareImage leftImage={firstImg100vh} leftImageAlt="" rightImageAlt="" rightImage={secondImg100vh200f} sliderPositionPercentage="1" />
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <p>There are some nuances, of course. You always should check a mobile/tablet version of your website and find the height of the footer that suits all sizes of the screens (using <strong>@media</strong> for instance). Moreover, you can experiment with different absolute and relative length units and choose the most suitable for your conditions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}