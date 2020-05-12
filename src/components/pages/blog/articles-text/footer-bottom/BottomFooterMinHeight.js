import React from "react";
import { Container, Row, Col, Toast, ToastBody, ToastHeader } from "reactstrap";

import { ARTICLES } from "../../../../website-data/blog/articles";

import firstImg100vh from "../../../../../assets/images/blog/articles/footer/100vh/min-height-100-200px.png";
import secondImg100vh200f from "../../../../../assets/images/blog/articles/footer/100vh/min-height-100.png";
import ReactCompareImage from "react-compare-image";

import ExpandImage from "../ExpandImage";
import ShowCode from "../ShowCode";

export default function BottomFooterMinHeight(props) {

    const article100vh = ARTICLES.filter(article => article.url === "/footer-bottom-min-height/")[0];
    const previewImg = article100vh.previewImg.path;
    const initialPage = article100vh.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark" >
                <Container>
                    <Row>
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> several times. The problem occurs when a page does <em>not</em> contain <em>enough content</em> to show. There are several ways to solve the problem and make things right.
                            </p>
                            <p>
                                In this article, I would like to explain one of the methods, which has something to do with: <strong>min-height: 100vh</strong>.
                            </p>
                            <p>
                                Let's try to settle a footer at the end of a page.
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img width="100%" src={previewImg} alt={article100vh.title} />
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
                            <ExpandImage src={initialPage} title={article100vh.initialPageImg.alt} />
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
                            <h2>Using <strong>min-height</strong></h2>
                            <p> From my point of view, the <strong>min-height: 100vh</strong> way to place a footer is the easiest one.
                                The main goal is that <em>.container</em> + <em>&lt;footer&gt;</em> should take the whole visible space on the page.
                            </p>
                            <p>
                                So, let's add to  <em>.container</em> and <em>&lt;footer&gt;</em> elements some styles.
                            </p>
                            <div className="p-3 bg-info w-50 mx-auto my-3">
                                <Toast className="mx-auto">
                                    <ToastHeader>
                                        Useful information:
                                    </ToastHeader>
                                    <ToastBody>
                                        <strong>height: 100vh</strong> = 100% of the viewport height<br />
                                        <strong>height: 100% </strong> = 100% of the parent element height<br />
                                    </ToastBody>
                                </Toast>
                            </div>
                            <p>
                                Add <strong>min-height: <a href="https://www.w3schools.com/cssref/css_units.asp" target="_blank" rel="noopener noreferrer">100vh</a></strong> to the <em>.container</em> class inside the <strong>styles.css</strong> file.

                            </p>
                            <p>
                                I would recommend using "min-height" property because if use just <strong>height</strong> then the height of the element is fixed at specified value. As a result of applying <strong>height</strong>, could be page cropped in the middle of the content.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">{`
...
`}<span className="text-info">.container</span>{` {
    background-color: skyblue ;
    border: 5px solid skyblue ;
    min-height: `}<span className="text-warning">100vh</span>{`;
}
... `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/100vh/min-height-100.png")} title=".container has min-height: 100vh" />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">

                            <p>
                                As you can see on the picture above, the <em>footer</em> now is arranged after the 100% of the viewport and we need to scroll to find it. Not very convenient and looks like the <em>footer</em> is hidden. No big deal. First, we can change the situation by adding <strong>height</strong> to the <em>footer</em>. Second, reduce the <strong>min-height</strong> of <em>.container</em> by the <em>footer</em> <strong>height</strong>. The best way to do so is by using <strong><a href="https://www.w3schools.com/cssref/func_calc.asp">"calc()"</a></strong> function. No worries, it is easier than it looks {`:)`}.
                            </p>
                            <p>
                                So, let's use <strong>calc()</strong> function. Add the <strong>height</strong> property to the <em>footer</em>, for example, <strong>200px</strong>. Then add <strong>calc(100vh - 200px)</strong> function to the <em>.container</em> class <strong>min-height</strong>.
 </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <ReactCompareImage leftImage={firstImg100vh} leftImageAlt="Footer outside the viewport" rightImageAlt="Footer inside the viewport" rightImage={secondImg100vh200f} sliderPositionPercentage="0.95" />
                            <p> Compare the current look of the page to the previous one.</p>
                        </Col>
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">
                                {`
...

`}<span className="text-info">.container</span>{`{
    background-color: skyblue;
    min-height: `}<span className="text-warning">calc(100vh - 200px);</span><br />
                                {`/* 200px - the height of the footer */
    }

... 

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    height: `}<span className="text-warning">200px</span>{`;
    }

...
                    `}
                            </code>
                        </Col>

                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                One more thing before finishing. I would like to check two kinds of pages depending on the length of content: <em>long</em> and <em>short</em> (which I already have). To make a page full of content, I am going to change the element with <em>"content"</em> class and add some long dummy text, like <a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target="_blank" rel="noopener noreferrer">"Lorem Ipsum"</a>

                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p><strong>Short page</strong></p>
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/100vh/short-min-height-100vh.png")} title="Short page with footer at the bottom" />
                            <ShowCode button="styles.css" codeId="min-height-final-styles"
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
                            <p><strong>Long page</strong></p>
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/footer/long.png")} title="Long page with the footer at the bottom" />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                There are, of course, some nuances. I always check a mobile/tablet version of my website to be sure I have chosen the correct length of the footer and everything works together.
Cool, the <em>footer</em> is at the bottom of the page! I am glad to see that {`:)`}
                            </p>
                            <p><strong>Good luck!</strong></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment >
    );
}