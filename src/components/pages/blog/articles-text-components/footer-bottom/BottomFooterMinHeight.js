import React from 'react';
import { Container, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';

import { ARTICLES } from '../../articles';

import firstImg100vh from '../../../../../assets/images/blog-page/articles/footer/100vh/min-height-100-200px.png';
import secondImg100vh200f from '../../../../../assets/images/blog-page/articles/footer/100vh/min-height-100.png';
import ReactCompareImage from 'react-compare-image';

import ExpandImage from '../ExpandImage';
import ShowCode from '../ShowCode'

export default function BottomFooterMinHeight(props) {

    const article100vh = ARTICLES.filter(article => article.url === '/footer-bottom-min-height/')[0];
    const previewImg = article100vh.previewImg.path;
    const initialPage = article100vh.initialPageImg.path;

    return (
        <React.Fragment>
            <section className='bg-white p-3 border border-dark' >
                <Container>
                    <Row>
                        <Col xs='12' md='6' className='align-self-center'>
                            <p>
                                Any Web Developer has faced an issue of a <strong>'flying' footer</strong> once or twice in their life.
                                This problem occurs when <strong>a page does not contain enough content</strong> to show.
                                There are several solutions that I have found for myself to the mentioned query.
                            </p>
                            <p>
                                In this article, I would like to explain one of the methods - <strong>min-height: 100vh</strong>.
                                Let's try to put the footer into the right place.
                            </p>
                        </Col>
                        <Col xs='12' md='6'>
                            <img className='page-screenshot' width='100%' src={previewImg} alt={article100vh.title} />
                        </Col>
                    </Row>
                    <Row className='mt-5 mb-2'>
                        <Col xs='12'>
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

    /* or min-height: 100vh; */
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
                                How you can see, index.html contains: {`<html>`}, {`<head>`}, {`<body>`},
                                {`<header>`}, {`<div class="container">`}, {`<div class="content">`},
                                and {`<footer>`}elements. All elements have different background-color
                                in the styles.css doctument.
                            </p>
                            <p>
                                The html element has min-height: 100% because by default html takes the only
                                height of all element inside but anyway, uses background-color to cover 100%
                                of the page. Furthermore, I have used "min-height" instead of "height" because
                                different kind of pages always should be taken into account,
                                like pages full of content and pages short of content. Of course,
                                CSS classes and ids applied to the short pages could be a solution
                                but I have decided it would be nice to use one approach for all kind of pages.
                                Margin and padding are 0 for all components because some elements have default
                                margins and paddings, and I want to use custom margins and paddings.
                                So, there are 5px left and right margins for the {`<header>`} and .content,
                                because it would be nice to see the .container under other elements.
                            </p>
                            <p>
                                Besides, for screenshots I am using small-screen 740 x 360 px to see elements movements on a better scale.
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
                            </p>
                            <div className="p-3 bg-info w-50 mx-auto my-3">
                                <Toast className="mx-auto">
                                    <ToastHeader>
                                        Useful information:
                                    </ToastHeader>
                                    <ToastBody>
                                        height: 100vh = 100% of the viewport height<br />
                                        height: 100% = 100% of the parent element height<br />
                                    </ToastBody>
                                </Toast>
                            </div>
                            <p>
                                Add <em>min-height: <a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank" rel="noopener noreferrer">100vh</a></em> to the .container in the <strong>styles.css</strong> file.

                            </p>
                            <p> I would recommend using "min-height" property because if you use simply "height" then the height of the element is fixed at some value.  As a result of applying "height", could be cutting the content by the viewport level on full of content pages.
 </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
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
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/100vh/min-height-100.png")} title='.container has min-height: 100vh' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">

                            <p>
                                How can you see on the picture above, the footer now is arranged after the 100% of the viewport and we need to scroll to find it.
                                Not that convenient and looks like the footer is hidden.
                                No problem, we can change it by adding "height" to the footer and then reduce the "min-height" of .container  to the footer "height".

 The best way to do it is - using <a href="https://www.w3schools.com/cssref/func_calc.asp">"calc()"</a> function. It is simpler then everyone think {`:)`}.
 </p>
                            <p>
                                So, let's use calc() function to find a place for the footer inside the viewport.
                                Add the height of the footer, 200px, for example. Then add calc(100vh - 200px) function to the .container "min-height".
 </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="8">
                            <ReactCompareImage leftImage={firstImg100vh} leftImageAlt="Footer outside the viewport" rightImageAlt="Footer inside the viewport" rightImage={secondImg100vh200f} sliderPositionPercentage="0.95" />
                            <p> Compare the current look of the page to the previous one.</p>
                        </Col>
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

                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                One more step before the end. Please, check various pages to be sure the result fits multiple cases.
     In the "flying" footer condition, there are two types of pages: full of content and short of the content.
     To check both, we can create a new page or just add enough content to the "index.html", your choice.
 I am going to change the element with "content" class and add some dummy text, like <a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target="_blank" rel="noopener noreferrer">"Lorem Ipsum"</a>

                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="6">
                            <p>Short page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/100vh/short-min-height-100vh.png")} title='Final page full of content with the footer at the bottom' />
                            <ShowCode button="Final styles.css" codeId="min-height-final-styles"
                                code=
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

    /* or min-height: 100vh; */
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
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/long.png")} title='Final short page with the footer at the bottom' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                There are some nuances, of course. Always check a mobile/tablet version of your website and find, for example, the height of the footer that suits all sizes of the screens (using <strong>@media</strong> for instance). Moreover, you can experiment with different absolute and relative length units and choose the most suitable for your conditions.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}