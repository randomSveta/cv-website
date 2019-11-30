import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { ARTICLES } from '../../articles';

import firstImg100vh from '../../../../../assets/images/blog-page/articles/footer/100vh/min-height-100-200px.png';
import secondImg100vh200f from '../../../../../assets/images/blog-page/articles/footer/100vh/min-height-100.png';
import ReactCompareImage from 'react-compare-image';

import ExpandImage from '../ExpandImage';

import ShowCSS from '../ShowCSS'

export default function BottomFooterMinHeight(props) {

    const article100vh = ARTICLES.filter(article => article.url === '/footer-bottom-min-height/')[0];
    const previewImg = article100vh.previewImg.path;
    const initialPage = article100vh.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark" >
                <Container>
                    <Row>
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> once or twice in their life.
                                This problem occurs when <strong>a page doesn't contain enough content</strong> to show.
                                There are several solutions that I have found for myself to the mentioned query.
                            </p>
                            <p>In this article, I would like to explain one of the methods - <strong>min-height: 100vh</strong>.
                                Let's try to put the footer into the right place.
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img className="page-screenshot" width="100%" src={previewImg} alt={article100vh.title} />
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
                            <ExpandImage src={initialPage} title={article100vh.initialPageImg.alt} />
                            <p>index.html</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`

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
                            <p>styles.css</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
* {
    margin: 0;
    padding: 0;
    }

html {
    background-color: lightgray;
    font-size: 50px;
    text-align: center;
    min-height: 100%;
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
                                How you can see, <strong>index.html</strong> contains: <strong>{`<html>`}</strong>, <strong>{`<head>`}</strong>, <strong>{`<body>`}</strong>, <strong>{`<header>`}</strong>, <strong>{`<div>`}</strong> with class <em>container</em> -> <strong>header</strong> + <strong>content</strong> (except the <strong>footer</strong>) , <strong>{`<div>`}</strong> -> for the content, and <strong>{`<footer>`}</strong> elements.
                                All elements have different <em>background-color</em> in the <strong>styles.css</strong> doctument to see them more clear.
                            </p>
                            <p>
                                The <strong>{`<html>`}</strong> element also has <em>min-height: 100%</em>, because by default html takes only height of all element inside but uses <em>background-color</em> to cover 100% of the page.
                                I used "min-height" instead of "height", because you always should take into account other pages long and full of content and at first set a min-height, then height.
                                <em>Margin</em> and <em>padding</em> are <em>0</em> at the start for all components because some elements have default margins and paddings.
                                Then, there are <em>5px left</em> and <em>right margins</em> for the <strong>{`<header>`}</strong> and <strong>.content</strong>, because it would be nice to see the <strong>.container</strong> under other elements.
                            </p>
                            <p>
                                Furthermore, for screenshots I am using small-screen 740 x 360 px, just to see elements movements on a better scale.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Using min-height</h2>
                            <p>This way is the simplest one, from my point of view.
                                We want all <strong>.container</strong> + <strong>footer</strong> take the whole visible page space.
                                So, let's add to <strong>.container</strong> and <strong>footer</strong> some styles.
                                In the <strong>styles.css</strong> file add <em>min-height: <a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank" rel="noopener noreferrer">100vh</a></em>
                            </p>
                            <p className="border">
                                Useful information:<br />
                                height: 100vh = 100% of the viewport height<br />
                                height: 100% = 100% of the parent element height<br />
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs="12" md="6">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/100vh/min-height-100.png")} title='Class "container" has "min-height:100vh"' />
                        </Col>
                        <Col xs="12" md="4">
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
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>You must use "min-height" property for the .container because if use just "height" it means that the height of the element is fixed.
                        If the class with fixed "height" also was applied to the page that takes more than 100% of the viewport.
                        As a result, the content will be cut to the 100% viewport level.
                            </p>
                            <p>
                                How you can see in the picture, the footer is placed after the 100% of the viewport and you need to scroll to find it.
                            Not that convenient and looks like the footer is hidden.
                            No problem, we can change it by adding fixed "height" to the footer and then reduce the "min-height" of ".container" to the footer "height".
                    The best way to do it - using <a href="https://www.w3schools.com/cssref/func_calc.asp">"calc()"</a> function. It is simpler then you can imagen {`:)`}.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
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
                        <Col xs="12" md="8">
                            <ReactCompareImage leftImage={firstImg100vh} leftImageAlt="" rightImageAlt="" rightImage={secondImg100vh200f} sliderPositionPercentage="0.95" />
                            <p> Compare the current image to the previous one.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                One more step before the end. Please, check different pages to be sure that result fits for various cases.
                                In the "flying" footer situation, there are two types of pages: full of content and short of the content.
                                To check both, we can create a new page or just add enough content to the "index.html" for a while, your choice.
                                I am going to change the element with "content" class and add some dummy text, like <a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target="_blank" rel="noopener noreferrer">"Lorem Ipsum"</a>

                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="6">
                            <p>Short page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/100vh/short-min-height-100vh.png")} title='"padding-bottom" for the body and "height" for the footer ' />
                            <ShowCSS button="Final styles.css"
                                css=
                                {`
html {
    background-color: lightgray;
    font-size: 50px;
    text-align: center;
    min-height: 100%;
}
                                
body {
     background-color: lightsalmon;
}
                                
.container {
        background-color: skyblue;
        min-height: calc(100vh - 200px);

        /* 200px - the height of the footer */
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
    height: 200px;
}`}
                            />
                        </Col>
                        <Col xs="12" md="6">
                            <p>Long page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/long.png")} title='"padding-bottom" for the body and "height" for the footer ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>There are some nuances, of course. You always should check a mobile/tablet version of your website and find the height of the footer that suits all sizes of the screens (using <strong>@media</strong> for instance). Moreover, you can experiment with different absolute and relative length units and choose the most suitable for your conditions.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}