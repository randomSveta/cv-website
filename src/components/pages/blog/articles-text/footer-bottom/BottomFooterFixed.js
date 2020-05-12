import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import { ARTICLES } from "../../../../website-data/blog/articles";

import ExpandImage from "../ExpandImage";
import ShowCode from "../ShowCode";

export default function BottomFooterFixed(props) {

    const articleFixed = ARTICLES.filter(article => article.url === "/footer-bottom-fixed/")[0];
    const previewImg = articleFixed.previewImg.path;
    const initialPage = articleFixed.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark" >
                <Container>
                    <Row>
                        <Col xs="12" md="6">
                            <img width="100%" src={previewImg} alt={articleFixed.title} />
                        </Col>
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> several times. The problem occurs when a page does <em>not</em> contain <em>enough content</em> to show. There are several ways to solve the problem and make things right.
                            </p>
                            <p>
                                In this article, I would like to explain one of the methods - <strong>position: fixed</strong>.
                                There are at least two more ways for the same purpose: <Link to={"/blog/footer-bottom-min-height/"}> "min-height: 100vh"</Link> and
                                <Link to={"/blog/footer-bottom-absolute/"}> "position: absolute"</Link>.
                             </p>
                            <p>
                                Let's try to settle a footer at the end of a page.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <Row className="my-3">
                        <Col xs="12">
                            <h2>Initial settings</h2>
                            <p>
                                Two documents have been prepared: <strong>index.html</strong>, and <strong>styles.css</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-row flex-wrap justify-content-center align-items-start m-0 p-0">
                        <Col xs="12" md="6" className="m-0 p-0">
                            <ExpandImage src={initialPage} title={articleFixed.initialPageImg.alt} />
                            <p className="mt-2 mb-0"><strong>index.html</strong></p>
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`

<!DOCTYPE html>
`}<span className="text-success">&lt;html&gt;</span>{`

    `}<span className="text-success">&lt;head&gt;</span>{`
        <link rel="stylesheet" href="./styles.css">
    `}<span className="text-success">&lt;/head&gt;</span>{`

    `}<span className="text-success">&lt;body&gt;</span>{`
        `}<span className="text-info">&lt;div class="container"&gt;</span>{`

            `}<span className="text-success">&lt;header&gt;</span>{`
                header
            `}<span className="text-success">&lt;/header&gt;</span>{`
        
            `}<span className="text-info">&lt;div class="content"&gt;</span>{`
                content
            `}<span className="text-info">&lt;/div&gt;</span>{`
        
        `}<span className="text-info">&lt;/div&gt;</span>{`

        `}<span className="text-success">&lt;footer&gt;</span>{`
            footer
        `}<span className="text-success">&lt;/footer&gt;</span>{`

    `}<span className="text-success">&lt;/body&gt;</span>{`
`}<span className="text-success">&lt;/html&gt;</span>
                            </code>
                        </Col>
                        <Col xs="12" md="6">
                            <p className="my-0 pt-0"><strong>styles.css</strong></p>
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">
                                {`
* {
    margin: 0;
    padding: 0;
    }

`}<span className="text-success">html</span>{` {
    background-color: lightgray;
    font-size: 50px;
    text-align: center;
    min-height: 100%;
    /* or min-height: 100vh; */
    }

`}<span className="text-success">body</span>{` {
    background-color: lightsalmon;
}

`}<span className="text-info">.container</span>{` {
    background-color: skyblue;
}

`}<span className="text-success">header</span>{` {
    background-color: lemonchiffon;
    margin: 0 5px;
}

`}<span className="text-info">.content</span>{` {
    background-color: hotpink;
    margin: 0 5px;
}

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
}`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                How you can see, <strong>index.html</strong> contains: <em>&lt;html&gt;</em>, <em>&lt;head&gt;</em>, <em>&lt;body&gt;</em>, <em>&lt;header&gt;</em>, <em>&lt;div class="container"&gt;</em>, <em>&lt;div class="content"&gt;</em>, and <em>&lt;footer&gt;</em> elements. Each element has different background-color in the <strong>styles.css</strong> file so that every one is visible.
                            </p>
                            <p>
                                The html element has CSS property <strong>min-height: 100%</strong> because <em>&lt;html&gt;</em> <strong>background-color</strong> covers 100% of the viewport by default despite the fact that <em>&lt;html&gt;</em> height could be less than the height of the viewport and as for me it looks weird. Besides, I have used <strong>min-height</strong> property <em>instead</em> of <strong>height</strong> so long pages would not be cut to the fixed height. <em>Margin</em> and <em>padding</em> are 0 for all components because some elements have default values, but I would like to use custom margins and paddings. The 5px left and right margins have purpose to show  <em>&lt;header&gt;</em> and <em>.content</em> elements under the other.
                            </p>
                            <p>
                                I am using small-screen 740 x 360 px to see elements changes in a better scale.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <Row className="my-3">
                        <Col xs="12">
                            <h2>Using <strong>fixed</strong> position</h2>
                            <p>
                                This way is the third and not that complicated.
                                I suggest fixing the <em>&lt;footer&gt;</em> at the bottom of the parent container, which is <em>&lt;body&gt;</em> in our case.
                                To start our experiment, let's apply <strong>position: fixed</strong> to the <em>footer</em>.
                                Add <strong>position: <a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener noreferrer">fixed</a></strong> to the <strong>styles.css</strong> file.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-position-fixed.png")} title="Footer has position: fixed" />
                        </Col>
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...
`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    position:`}<span className="text-warning">fixed</span>{`;
}
... `}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                It seems nothing has been modified in the order of the elements. The size of the <em>footer</em> now is the same as the size of its content. However, for using <strong>position: fixed</strong> properly, we also should use some directions.
                            </p>
                            <blockquote className="border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                    An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
                                    A fixed element does not leave a gap in the page where it would normally have been located.
                                </p>
                                <footer className="p-2 text-right"><cite title="w3school"><a href="https://www.w3schools.com/css/css_positioning.asp">w3school</a></cite></footer>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Let's make <em>&lt;footer&gt;</em> take the widthof the whole page, not only the width of its content.
                                To do so we should apply <strong>width</strong> property to the <strong>footer</strong> element.
                            </p>
                            <p>
                                Apply <strong>width: 100%</strong> to the <em>&lt;footer&gt;</em>
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    position: fixed;
    width: `}<span className="text-warning">100%</span>{`;
}

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-width-100.png")} title={"Width of the footer is 100%"} />

                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                That is so much better now!
                            </p>
                            <p>
                                So, it is time to add directions like <strong>bottom</strong> property, because we want the <em>footer</em> at the bottom of the page. Also, it is a good idea to add <strong>left</strong> or <strong>right</strong> property to be sure where the <em>footer</em> is attached.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-bottom-0.png")} title={"The footer is fixed to the bootom of the page"} />
                        </Col>
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    position: fixed;
    width: 100%;
    bottom: `}<span className="text-warning">0</span>{`;
    left: `}<span className="text-warning">0</span>{`;
}

... `}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Looks nice but...
                            </p>
                            <p>
                                Let's open <strong>Developer Tools</strong> from your browser and find a tab where you can inspect elements (ex. <strong>Inspector</strong> tab in the Firefox). Next, locate the <em>&lt;body&gt;</em> tag using the inspector.
How can you see, the <em>footer</em> element is outside the <em>&lt;body&gt;</em> area. We should do something about it because that is not the correct behaviour.
                            </p>
                            <p>
                                The footer element is placed inside the <em>&lt;body&gt;</em> tag in the <strong>index.html</strong>and should be inside it on the page.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-outside-body.png")} title={"Footer is fixed outside the body element"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                The position <strong>fixed</strong> places an element relatively to the page viewport. To fix the situation <em>"the footer outside the body"</em> we should make <em>&lt;body&gt;</em> take the viewport height. As always, I suggest using <strong>min-height: <a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank" rel="noopener noreferrer">100vh</a></strong> instead of <strong>height</strong> property to be sure we would not destroy other pages layout.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...

`}<span className="text-success">body</span>{` {
    background-color: lightsalmon;
    min-height: `}<span className="text-warning">100vh</span>{`;
}

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-inside-body.png")} title={"Footer fixed inside the body"} />

                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Nice work! Almost there!
                            </p>
                            <p>
                                Let's see how the page would look like if it has long content, just in case. I am going to add one more HTML document for the <em>full of content</em> page and add a dummy text <strong><a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target="_blank" rel="noopener noreferrer">"Lorem Ipsum"</a></strong> to a new page inside the <em>&lt;div class="content"&gt;</em> element.
                            </p>
                            <p>
                                So, now we have two types of pages related to content: <em>short</em> and <em>long</em>. Let's look closely at them.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-long-page.png")} title={"Fixed footer on the long page."} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                What a disaster a long page is! The <em>footer</em> is fixed relative to the viewport and because of that, there is a scroll bar at the right. If I scroll down, the <em>footer</em> stays fixed at the bottom of the viewport but the page content starts moving. We should fix this!
                            </p>
                            <p>

                                So, I suggest to add CSS class "short-page" to the short page footer and move some added CSS properties from the footer element to that class.
                            </p>
                            <p>
                                Go to the <strong>index.html</strong> and add class "short-page" to the <em>footer</em> tag. Next, go to the <strong>styles.css</strong> and move all the properties except <strong>background-color</strong> to the new class.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="5">
                            <p><strong>index.html</strong></p>
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...

`}<span className="text-success">&lt;footer class="short-page"&gt;</span>{`
    footer
`}<span className="text-success">&lt;/footer&gt;</span>{`

... `}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <p><strong>styles.css</strong></p>
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
}

`}<span className="text-info">.short-page</span>{` {
    position: `}<span className="text-warning">fixed</span>{`;
    width: `}<span className="text-warning">100%</span>{`;
    bottom: `}<span className="text-warning">0</span>{`;
    right: `}<span className="text-warning">0</span>{`;
}

... `}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                We did it! Check the both pages!
                        </p>
                        </Col>
                    </Row>

                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p><strong>Short page</strong></p>
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-short-page-final.png")} title="Fixed footer on the short page" />
                            <ShowCode button="index.html" codeId="fixed-final-index-html"
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
                                
         <footer class="short-page">
             footer
         </footer>
                                
     </body>
                                
 </html>
`}
                            />
                            <ShowCode button="styles.css" codeId="fixed-final-styles"
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
                        </Col>
                        <Col xs="12" md="6">
                            <p><strong>Long page</strong></p>
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/fixed/footer-fixed-long-page-final.png")} title="Fixed footer on the long page " />
                            <ShowCode button="long-content-page.html"
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
                    </Row>
                    <Row className="my-3">
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