import React from "react";
import { Container, Row, Col, Toast, ToastHeader, ToastBody } from "reactstrap";
import { Link } from "react-router-dom";

import ExpandImage from "../ExpandImage";
import ShowCode from "../ShowCode";

import { ARTICLES } from "../../articles";

import leftShortContent from "../../../../../assets/images/blog-page/articles/footer/absolute/short-absolute.png";
import rightShortContentBorderBox from "../../../../../assets/images/blog-page/articles/footer/absolute/footer-out-of-100vh-viewport.png";
import ReactCompareImage from "react-compare-image";

export default function BottomFooterAbsolute(props) {

    const articleAbsolute = ARTICLES.filter(article => article.url === "/footer-bottom-absolute/")[0];
    const previewImg = articleAbsolute.previewImg.path;
    const initialPage = articleAbsolute.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark">
                <Container >
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> several times. The problem occurs when a page does <em>not</em> contain <em>enough content</em> to show. There are several ways to solve the problem and make things right.
                            </p>
                            <p>In this article, I would like to explain one of the methods (the second one in my blog) - <strong>position: absolute</strong>.
                                The first one is <Link to={"/blog/footer-bottom-min-height/"}><strong>min-heignt: 100vh</strong></Link>.
                            </p>
                            <p>
                                Let's start, again! {`:)`}
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img width="100%" src={previewImg} alt={articleAbsolute.title} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Initial settings</h2>
                            <p>
                                Two documents have been prepared: <strong>index.html</strong>, and <strong>styles.css</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="d-flex flex-row flex-wrap justify-content-center align-items-start m-0 p-0">
                        <Col xs="12" md="6" className="m-0 p-0">
                            <ExpandImage src={initialPage} title={articleAbsolute.initialPageImg.alt} />
                            <p className="mt-2 mb-0"><strong>index.html</strong></p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">{`

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
                            <code className="code-styles px-5 py-3 text-light bg-dark">
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
                    <Row className="mt-5 mb-2">
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
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Using <strong>absolute</strong> position</h2>
                            <p>
                                I could say the absolute positioning it is the most popular way to keep a <em>footer</em> at the page bottom. Many articles suggest this approach. The <strong>absolute</strong> way often is the first recommendation for those who are seeking for a help with <strong>"flying"</strong> <em>footer</em>
                            </p>
                            <p>
                                First of all, what does<a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener noreferrer">position: absolute</a> mean?
                            The <strong>absolutely</strong> positioned element is excluded from the <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow" target="_blank" rel="noopener noreferrer">normal document flow</a> and placed in the document flow relative to the closest positioned parent i.e the parent should have <strong>position</strong> property with one of the values: relative, fixed, sticky, absolute but not static.
    
                            </p>
                            <p>
                                I invite you to investigate {`:)`}.
                            </p>
                            <p>
                                Let's try to position our <em>footer</em> using <strong>position: absolute</strong>. Go to the styles.css and add the "position: absolute" property to the footer element styles.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
... 

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    position: `}<span className="text-warning">absolute</span>{`;
    }

...
     `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/pos-absolute-to-footer.png")} title="Footer position is absolute" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                            Hmm... Nothing changed in the order of the elements, but now the <em>footer</em> is using content space only.
                            </p>
                            <p>
                            Good anyway! So, we should make the <em>footer</em> full size long and add <strong>width: 100%</strong> to it.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-width-100.png")} title="Footer has width 100%" />
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    position: absolute;
    width: `}<span className="text-warning">100%</span>{`;
    }

...`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                            Next, let's try to move the <em>&lt;footer&gt;</em> to the page bottom and find what element is the reference point for the absolute positioning.
                            </p>
                            <p>
                                Add <strong>bottom: 0</strong> to the <em>footer</em> in <strong>styles.css</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    position: absolute;
    width: 100%;
    bottom: `}<span className="text-warning">0</span>{`;
    }

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-bottom-0.png")} title="Bottom 0" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                            Looks like the <strong>default positioned parent</strong> element for the <em>&lt;footer&gt;</em> is the page itself or in other words an <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block" target="_blank" rel="noopener noreferrer"> initial containing block</a>. Sometimes the <em>&lt;body&gt;</em> is specified as a default object for positioning, but it is not true.
                            </p>
                            <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                    The containing block in which the root element (<em>&lt;html&gt;</em>) resides is a rectangle called the initial containing block.
                                    It has the dimensions of the viewport (for continuous media) or the page area (for paged media).
                                </p>
                                <footer class="blockquote-footer p-2 text-right"><cite title="MDN"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block">MDN</a></cite></footer>
                            </blockquote>
                            <p>
                            The <em>footer</em> is laying at the bottom of the page, isn't it? Yes, but there are some issues. Let's open Web Developer tools in a browser and then find a tab where elements could be inspected (Ex. <strong>Inspector</strong> in Mozilla). How you can see the <em>&lt;footer&gt;</em> is located outside the <em>&lt;body&gt;</em> element area. We know from the <strong>index.html</strong> layout that the <em>footer</em> should be inside the <em>&lt;body&gt;</em> tag.
                                    </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-out-of-body.png")} title="Footer outside the body area" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                            We should sort it out. The closest parent container for the <em>&lt;footer&gt;</em> is the <em>&lt;body&gt;</em>. Let's add <strong>position</strong> property to the <em>body</em> tag, but which value should we use? How it was described above it could be <em>relative, fixed, absolute, and sticky</em> values but <em>not the static</em>.

                            </p>
                            <p>
                            The <strong>position: relative</strong> is preferred because it has less impact on the element in comparison with the other. 
                            </p>
                            <p>
                            Add <strong>position: relative</strong> to the <em>body</em>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">

                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

`}<span className="text-success">body</span>{` {
    background-color: lightsalmon;
    position: `}<span className="text-warning">relative</span>{`;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-relative.png")} title="Body has a relative position" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                            How you can see on the image below, the <em>&lt;footer&gt;</em> is placed <strong>inside</strong> the parent container which is <em>&lt;body&gt;</em>. Also, the <em>footer</em> is located over all other elements, because the <em>&lt;footer&gt;</em> is removed from the <em>normal document flow</em> and now is resting at the <em>&lt;body&gt;</em> bottom (<strong>bottom: 0</strong>) relatively to it. The next step is to make the <em>&lt;body&gt;</em> element take the whole visible height of the page. Hence, if we apply the <strong>height</strong> property, then the pages with the long content will be cut by the footer in the middle of a page. I believe it would be much better to use <strong>min-height</strong> instead of <strong>height</strong>, especially for the container elements.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-inside-body.png")} title="Footer is at the body bottom" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" >
                            <p>
                                Could we use <strong>min-height: 100%</strong> for the parent container? We could, but it would not work {`:)`}.
                            </p>
                            <div className="p-3 bg-info w-50 mx-auto my-3">
                                <Toast className="mx-auto">
                                    <ToastHeader>
                                        Useful information:
                                    </ToastHeader>
                                    <ToastBody>
                                        <strong>height: 100vh</strong> = 100% of the viewport height<br />
                                        <strong>height: 100%</strong> = 100% of the parent element height<br />
                                    </ToastBody>
                                </Toast>
                            </div>
                            <p>
                                The <strong>min-height: 100%</strong> property value does not work because the relatively positioned element like <em>body</em> is a part of the document flow and takes the first parent height. As we applying only <strong>min-height</strong> to the body, then closest parent element is <em>&lt;html&gt;</em>. Therefore, the <em>&lt;html&gt;</em> does not have explicit <strong>height</strong>, only the <strong>min-height</strong>, which does not count. Sadly, the body <strong>min-height</strong> does not know what height it should use to apply 100%.
                                You can verify it <a href="https://www.w3.org/TR/CSS2/visudet.html#the-height-property" target="_blank" rel="noopener noreferrer">in the CSS documentation</a>.
                                </p>

                            <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                <strong>&lt;percentage&gt;</strong><br />
                                    <br />
                                    Specifies a percentage height. The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the value computes to "auto". A percentage height on the root element is relative to the initial containing block. Note: For absolutely positioned elements whose containing block is based on a block-level element, the percentage is calculated with respect to the height of the padding box of that element. This is a change from CSS1, where the percentage was always calculated with respect to the content box of the parent element.
                                </p>
                                <footer class="blockquote-footer p-2 text-right"><cite title="w3"><a href="https://www.w3.org/TR/CSS2/visudet.html#the-height-property">w3</a></cite></footer>
                            </blockquote>
                            <p>
                                Let's check it anyway and add <strong>min-height: 100%</strong> property to the <em>body</em> element.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

`}<span className="text-success">body</span>{` {
    background-color: lightsalmon;
    position: relative;
    min-height: `}<span className="text-warning">100%</span>{`;

    /* 100% - doesn't work */ 
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-relative.png")} title="Body min-height 100% does not work" />
                        </Col>

                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Yep, does not work. The next way to make the <em>body</em> take the whole page height is to use CSS <a href="https://www.w3schools.com/css/css_units.asp" target="_blank" rel="noopener noreferrer">vh</a> units.
                            </p>
                            <p>
                                Add <strong>min-height: 100vh</strong> to the <em>body</em> in the <strong>styles.css</strong> file.
                                Moreover, if you want,  you can use the <strong>100vh</strong> for the <em>html</em> element <strong>min-height</strong> too.
                            </p>

                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

`}<span className="text-success">footer</span>{` {
    background-color: lightsalmon;
    position: relative;
    min-height: `}<span className="text-warning">100vh</span>{`;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-m-height-100vh.png")} title="Body min-height is 100vh" />
                        </Col>

                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                            Wow! Finally!
                             Wait, I would like to have a look at the page with long content block. Create a new page or just add enough content to the <strong>index.html</strong> file, your choice.
                                I am going to change the element with <em>content</em> class and add a dummy text like <a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target="_blank" rel="noopener noreferrer">"Lorem Ipsum"</a>
                            </p>
                            <p>
                                Next, remember the last lines of the added text, just in case {`:)`}. The last words of my text are "deserunt mollit anim id est laborum."
 </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/long-p-last-line-hidden.png")} title="Long content block" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                            I could not see the last words <strong>"anim id est laborum."</strong>. Could you see yours? The final line is under the <em>footer</em> element.
                                The <em>footer</em> is placed over text because the <em>footer bottom border</em> is staying relatively to the <em>body bottom border</em>.
                                 To fix that we should give the <em>footer</em> its <strong>height</strong> and somehow make the body element longer on that height. 
                                 I suggest to use <strong>padding-bottom</strong> property.
                            </p>
                            <p>
                                Add the footer <strong>height</strong> and then add <strong>padding-bottom</strong> for the <em>body</em> that equal to the <em>footer</em> height.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

`}<span className="text-success">body</span>{` {
    background-color: lightsalmon;
    position: relative;
    min-height: 100vh;
    padding-bottom: `}<span className="text-warning">200px</span>{`;  
    
    /* 200px - footer height */
   
}

...

`}<span className="text-success">footer</span>{` {
    background-color: aquamarine;
    height: 200px;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: `}<span className="text-warning">200px</span>{`;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-pb-footer-h-200.png")} title="Added padding-bottom for the body and height for the footer " />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Now I could see everything {`:)`}!
                                The last line of my text rests before the <em>&lt;footer&gt;</em>. If you scroll the <em>long page</em> from top to bottom, you can see that everything is fine: <em>footer</em> is inside the <em>html</em> tag area and inside the <em>body</em> tag area, like all other content too.

                            </p>
                            <p>
                            It is time to check the <em>short page</em> again.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-out-of-100vh-viewport.png")} title="Footer outside the viewport area on the short page" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" >
                            <p>
                            Oh, no! The <em>footer</em> is actually at the short page bottom, but we need to scroll to see it. This has happened because we added a <strong>padding-bottom: 200px</strong> to the <em>body</em>. The <strong>height</strong> or <strong>min-height</strong> of the elements takes into account only the <strong>height</strong> of the element content by default. So, <strong>min-height: 100vh</strong> includes only the <em>body</em> content, without any additional <strong>padding</strong> and there is a scroll bar for an extra 200px. <strong>Padding height</strong> is not included in the <strong>min-height</strong> property for the <em>&lt;body&gt;</em>.
                            </p>
                            <p>
                            To change the situation we can apply CSS property which counts the height of the element as the <em>sum of <strong>content, padding, and border</strong></em>.
                                The property is <strong><a href="https://www.w3schools.com/cssref/css3_pr_box-sizing.asp" target="_blank" rel="noopener noreferrer">box-sizing: border-box</a></strong>
                            </p>
                            <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                    <strong>border-box:</strong><br />
                                    The width and height properties (and min/max properties) includes content, padding and border.
                                </p>
                                <footer class="blockquote-footer p-2 text-right"><cite title="w3schools"><a href="https://www.w3schools.com/cssref/css3_pr_box-sizing.asp">w3schools</a></cite></footer>
                            </blockquote>
                            <p>
                            Let's apply <strong>box-sizing: border-box</strong> for each element because I want to measure the height of an element as a sum of the <em>height of the content, padding and border</em>. Compare the <strong>short</strong> page with <strong>border-box</strong> property and without. You can spot the difference for sure.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

* {
    margin: 0;
    padding: 0;
    box-sizing: `}<span className="text-warning">border-box</span>{`;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ReactCompareImage leftImage={leftShortContent} leftImageAlt="Page with property box-sizing is border-box" rightImageAlt="Page without property box-sizing is border-box" rightImage={rightShortContentBorderBox} sliderPositionPercentage="0.95" />
                            <p> Compare the current look of the page to the previous one.</p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                            Hurray! We did it. Let's check again that the <em>footer</em> is placed correctly on the <strong>long</strong> and <strong>short</strong> pages.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="6">
                            <p><strong>Short page</strong></p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/short-absolute.png")} title="Footer at the bottom of the short page" />
                            <ShowCode button="styles.css" codeId="absolute-final-styles"
                                code=
                                {`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;                                    
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
     position: relative;
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
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 200px;
}`}
                            />
                        </Col>
                        <Col xs="12" md="6">
                            <p><strong>Long page</strong></p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/long.png")} title="Footer at the bottom of the long page" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                            Congratulations! I knew we could do it!
     I recommend you always review pages with <em>long</em> and <em>short</em> content blocks. All kinds of pages should have the correct layout and elements placement. Also, be careful with the <em>footer height</em> and make it sutable for different screen sizes.
                            </p>
                            <p>
                                Has been a long way, but we did it! Everything is possible {`:)`}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

