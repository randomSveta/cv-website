import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { ARTICLES } from '../../articles';

import ExpandImage from '../ExpandImage';
import ShowCode from '../ShowCode';

export default function BottomFooterFixed(props) {

    const articleFixed = ARTICLES.filter(article => article.url === '/footer-bottom-fixed/')[0];
    const previewImg = articleFixed.previewImg.path;
    const initialPage = articleFixed.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark" >
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <img className="page-screenshot" width="100%" src={previewImg} alt={articleFixed.title} />
                        </Col>
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> once or twice in their life.
                                This problem occurs when <strong>a page does not contain enough content</strong> to show.
                                There are several solutions that I have found for myself to the mentioned query.
                            </p>
                            <p>
                                In this article, I would like to explain one of the methods - <strong>position: fixed</strong>.
                                There are also at least two more ways whish I have already described: <Link to={'/blog/footer-bottom-min-height/'}> 'min-heignt: 100vh'</Link> and
                                <Link to={'/blog/footer-bottom-absolute/'}> 'position: absolute'</Link>.
                             </p>
                            <p>
                                Let's try to put the footer into the right place one more time.
                             </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='bg-white p-3 border border-dark mt-3'>
                <Container>
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
                            <ExpandImage src={initialPage} title={articleFixed.initialPageImg.alt} />
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

    /* or  min-height: 100vh; */
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
                                of the page. Furthermore, I have used 'min-height' instead of 'height' because
                                different kind of pages always should be taken into account,
                                like pages full of content and pages short of content. Anyway, I am going to apply
                                CSS class to the short pages to make the styles stay only for particular pages.
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
                            <h2>Using position 'fixed'</h2>
                            <p>
                                This way is the third and not that complicated.
                                I suggest fixing the {`<footer>`} at the bottom of the parent container, which is {`<body>`} in our case.
                                To start our experiment, let's apply 'position: fixed' to the footer.
                                Add <em>position: <a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener noreferrer">fixed</a></em>
                                In the <strong>styles.css</strong> file.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/fixed/footer-position-fixed.png")} title='Footer has position: fixed' />
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

footer {
    background-color: aquamarine;
    position: fixed;
}

... `}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                It seems like nothing has been changed in the order of the elements, only the size of the footer now the same to the size of its content. To use position: fixed properly, we also should use some directions.
                            </p>
                            <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                    An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
                                    A fixed element does not leave a gap in the page where it would normally have been located.
                                </p>
                                <footer class="blockquote-footer p-2 text-right"><cite title="w3school"><a href="https://www.w3schools.com/css/css_positioning.asp">w3school</a></cite></footer>
                            </blockquote>
                            <p>

                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

footer {
    background-color: aquamarine;
    position: fixed;
    width: 100%;
}

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require('../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-width-100.png')} title={"Width of the footer is 100%"} />

                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                So, it is time to add 'bottom' property, because we want the footer at the bottom of the page, and also 'left' or 'right' property (in our case it does not matter) to the fixed footer.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="8">
                            <ExpandImage src={require('../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-bottom-0.png')} title={"The footer is fixed to the bootom of the page"} />
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

footer {
    background-color: aquamarine;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
}

... `}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Looks nice but... Let's open Developer Tools from a browser and find a tab where we can inspect elements like  'Inspector' tab in the Firefox.
                                Next, locate the {`<body>`} using the inspector. How can you see, the footer is outside the body area. We should do something because that is not correct. The footer element is placed inside the {`<body>`} tag in the index.html and obviously should be inside it on the page.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="8">
                            <ExpandImage src={require('../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-outside-body.png')} title={"Footer is fixed outside the body element"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                The position 'fixed' placed element relatively to the page viewport. To fix the situation 'the footer outside the body' we should make {`<body>`} take the whole page viewport height.
                                As always I suggest using "min-height: <a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank" rel="noopener noreferrer">100vh</a>" instead of "height" to bu sure we will not destroy other pages layout.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

body {
    background-color: lightsalmon;
    min-height: 100vh;
}

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require('../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-inside-body.png')} title={'Footer fixed inside the body'} />

                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs='12'>
                            <p>
                                Good job! Almost there!
                            </p>
                            <p>
                                Just in case, let's see how the page would look like if it has long content.
                                I am going to add one more html document for the long page and add a dummy text <a href='https://en.wikipedia.org/wiki/Lorem_ipsum' target='_blank' rel='noopener noreferrer'> 'Lorem Ipsum'</a> to a new page to the {`<div class='content'>`} element.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="8">
                            <ExpandImage src={require('../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-long-page.png')} title={"Fixed footer on the long page."} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                So, we have two pages: short of content and full of content.
                            </p>
                            <p>
                                What a disaster on the long page! The footer is fixed relative to the viewport and because of it, there is a scroll to the end of the content.
                                If I scroll, the footer stays but page content is scrolling. Nobody wants this effect on the footer,  I suppose. Time for pages style separation has come.
                            </p>
                            <p>
                                To make pages style different I suggest to add CSS class= 'short-page' to the short page footer and move all added properties from footer, except 'background-color' to that class.
                            </p>
                            <p>
                                Go to the "'ndex.html' and add class='short-page' to the footer.
                                Then, go to the 'styles.css' and move the properties (except 'bacground-color') to the new
                                class .short-page .
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="4">
                            <p>index.html</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

<footer class="short-page">
    footer
</footer>

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <p>styles.css</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
...

footer {
    background-color: aquamarine;
}

.short-page {
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
}

... `}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                We did it! Check the both pages!
                        </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="6">
                            <p>Short page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-short-page-final.png")} title='Fixed footer on the short of the content page' />
                            <ShowCode button="Final styles.css" codeId="fixed-final-styles"
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
    min-height: 100vh;
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
}

.short-page {
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
}`}
                            />
                            <ShowCode button="Final index.html" codeId="fixed-final-index-html"
                                code=
                                {`
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
                                
 </html>
`}
                            />
                            <ShowCode button="Final long-content-page.html"
                                codeId="fixed-final-long-html"
                                code=
                                {`
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
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                     nisi ut aliquipex ea commodo consequat. Duis aute irure dolor in 
                     reprehenderit in voluptate velit esse cillum dolore eu
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia
                     deserunt mollit anim id est laborum.
                </p>
            /div>
           
        </div>
        
        <footer>
            footer
        </footer>
                                
    </body>
                                
</html>`}
                            />
                        </Col>
                        <Col xs="12" md="6">
                            <p>Long page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/fixed/footer-fixed-long-page-final.png")} title='Fixed footer on the full of the content page ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Wow! It is the third way to put the wild footer to its place. I am sure there are more ways!
                               I wish you luck and am happy to show everything I know.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}