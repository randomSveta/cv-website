import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ExpandImage from '../ExpandImage';
import ShowCSS from '../ShowCSS';

import {ARTICLES} from '../../articles';

import leftShortContent from '../../../../../assets/images/blog-page/articles/footer/absolute/short-absolute.png';
import rightShortContentBorderBox from '../../../../../assets/images/blog-page/articles/footer/absolute/footer-out-of-100vh-viewport.png';
import ReactCompareImage from 'react-compare-image';

export default function BottomFooterAbsolute(props) {

    const articleAbsolute = ARTICLES.filter(article => article.url === '/footer-bottom-absolute/')[0];
    const previewImg = articleAbsolute.previewImg.path;
const initialPage = articleAbsolute.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark">
                <Container >
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                Any Web Developer has faced an issue of a <strong>"flying" footer</strong> once or twice in their life.
                                    This problem occurs when <strong>a page doesn't contain enough content</strong> to show.
                                    There are several solutions that I have found for myself to the mentioned query.
                                </p>
                            <p>In this article, I would like to explain one of the methods (the second one in my blog) - <strong>position: absolute</strong>.
                                The first one - <strong>min-height: 100vh</strong> is <Link to={'/blog/footer-bottom-min-height/'}>here</Link>.
                            </p>
                            <p>
                                Let's start, again! {`:)`}
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img width="100%" src={previewImg} alt={articleAbsolute.title} />
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
                            <ExpandImage src={initialPage} title={articleAbsolute.initialPageImg.path} />
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
                            <h2>Using position "absolute"</h2>
                            <p>
                                I could say the "position: absolute" it is the most popular way to keep a footer at the bottom.
                                Many articles describe this approach. The "absolute" way is always the first suggestion for those who are searching for help with "flying" footer.
                                Invite you to investigate {`:)`}.
                            </p>
                            <p>
                                At first, what is <a href="https://www.w3schools.com/css/css_positioning.asp" target="_blank" rel="noopener noreferrer">"position: absolute"</a>?
                                The element is positioned as "absolute" is excluded from the <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow" target="_blank" rel="noopener noreferrer">normal document flow</a> and placed in the document relatively to the closest positioned parent i.e parent should have "position:" with one of the values: relative, fixed, sticky, absolute but not static.
                                Let's try to position our footer using "position: absolute".
                            </p>
                            <p>
                                Go to the styles.css and add the "position: absolute" property to the footer element styles.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
... 

footer {
    background-color: aquamarine;
    position: absolute;
    }

...
     `}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/pos-absolute-to-footer.png")} title='Added "position: absolute" to the footer' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Hmm... Nothing has been changed in elements order, but the footer tooks only the amount of place needed for its content.
                            </p>
                            <p>
                                Cool! Let's fix it and add "width: 100%" to the footer.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-width-100.png")} title='"width: 100%" for the footer' />
                        </Col>
                        <Col xs="12" md="4">
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
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Then, without adding "position" to the parent element of the footer (we are going to add it later), let's move the {`<footer>`} to the bottom and find which element is the landmark for the absolute positioning.
                            </p>
                            <p>
                                Add "bottom:0" to the footer in "styles.css."
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
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
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-bottom-0.png")} title='Added "bottom: 0" property ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Hmmm...again! Looks like the default "positioned" parent element for the {`<footer>`} is the page itself. It is called a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block" target="_blank" rel="noopener noreferrer"> initial containing block</a>(in many sources the {`<body>`} is mentioned as default object for positioning, but it isn't true.

                                <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                    <p className="m-0 p-2">
                                        The containing block in which the root element ({`<html>`}) resides is a rectangle called the initial containing block.
                                        It has the dimensions of the viewport (for continuous media) or the page area (for paged media).
                                    </p>
                                    <footer class="blockquote-footer p-2 text-right"><cite title="MDN web docs"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block">MDN web docs</a></cite></footer>
                                </blockquote>
                                The footer is laying at the bottom of the page, isn't it? Yes, but it isn't right.
 If you open Web Developers tools in the browser and then find a tab where elements could be inspected ("Inspector" in Mozilla for example), then you can see that the {`<footer>`} is placed outside the {`<body>`} area.
 We know from the index.html layout that the footer should be inside the {`<body>`} tag.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-out-of-body.png")} title='Added "bottom: 0" property ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Let's fix it!
 The closest parent container for the {`<footer>`} is the {`<body>`}. So, let's add "position" property to the body, but which one?
                                How it was described above, for our purpose it could be relative, fixed, absolute, sticky, but not static.
                               
                                The "position: relative" is preferred because it has less impact on the element compared to the other but if you need or want, of course, you can use them either.
                               
                            </p>
                            <p>
                                Add "position: relative" to the body.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">

                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

body {
    background-color: lightsalmon;
    position: relative;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-relative.png")} alt='The <body> has been "positioned"' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Whaaat? Where it will end? Do not worry - soon.
                            </p>
                            <p>
                            How you can see on the image below, the {`<footer>`} is placed "inside" the parent container - {`<body>`} and overall other elements, because the {`<footer>`} is removed from the normal document flow and is resting at the {`<body>`} bottom ("bottom: 0") relatively to it. The next thing we should do is to make the parent element {`<body>`} takes the whole visible height of the page.
 Hence, if we apply the "height" property, then the pages with the long content will have the bottom-border of the body in the middle of the page, then the footer too. I think it's better to use "min-height" instead of "height"  for the body.
                            </p>

                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-inside-body.png")} title='body -> "min-height: 100vh"' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" >
                            <p>
                            Let's consider "min-height: 100%" for the parent container for the footer,  in our case, it is the {`<body>`}. I need to warn you it won't be working {`:)`}.

                            </p>
                            <p>
                            The "min-height: 100%" doesn't work because the relatively positioned element is part of the document flow and takes its height from the first parent, as we applying "min-height" to the body, then closest parent element is {`<html>`} Therefore, the {`<html>`} doesn't have explicit height, only the "min-height", and because of that "min-height" for the body doesn't know what to do. 
You can verify it <a href="https://www.w3.org/TR/CSS2/visudet.html#the-height-property" target="_blank" rel="noopener noreferrer">here</a>
                            </p>

                            <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                    {`<percentage>`}<br/>
                                    <br/>
                                    Specifies a percentage height. The percentage is calculated with respect to the height of the generated box's containing block. If the height of the containing block is not specified explicitly (i.e., it depends on content height), and this element is not absolutely positioned, the value computes to 'auto'. A percentage height on the root element is relative to the initial containing block. Note: For absolutely positioned elements whose containing block is based on a block-level element, the percentage is calculated with respect to the height of the padding box of that element. This is a change from CSS1, where the percentage was always calculated with respect to the content box of the parent element.
                                </p>
                                <footer class="blockquote-footer p-2 text-right"><cite title="W3school"><a href="https://www.w3.org/TR/CSS2/visudet.html#the-height-property">W3</a></cite></footer>
                            </blockquote>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

body {
    background-color: lightsalmon;
    position: relative;
    min-height: 100%;

    /* 100% - doesn't work */ 
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-relative.png")} title='body -> "min-height: 100vh"' />
                        </Col>

                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Besides, I don't like to use fixed "height" for the container elements with different and constantly changing content, because it could be a problem for the responsible design.
                                I suggest to use "min-height: 100vh"
                            </p>

                            <p>
                                Add "min-height: 100vh" to the body in the styles.css file.
                                Moreover, if you want,  you can change the "min-height" for the html to the "100vh" too. 
                            </p>

                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

body {
    background-color: lightsalmon;
    position: relative;
    min-height: 100vh;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-m-height-100vh.png")} title='body -> "min-height: 100vh"' />
                        </Col>

                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                        <p> 
                            Wow! Finally!
                            But wait. Let's have a look at the page with long content. To check it, we can create a new page or just add enough content to the "index.html", your choice.
                            I am going to change the element with "content" class and add some dummy text, like <a href="https://en.wikipedia.org/wiki/Lorem_ipsum" target="_blank" rel="noopener noreferrer">"Lorem Ipsum"</a>
                        </p>
                        <p>
                            Next, remember the last lines of the text. The last words of my text are "deserunt mollit anim id est laborum."
                        </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/long-p-last-line-hidden.png")} title='Long content' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                I couldn't see the last words "anim id est laborum.". Could you see yours? The last line is hidden under the footer. The footer is located over the {`<body>`}, div with class "container" inside the body,  div with the class "content" is inside the "container" div. 
                                Therefore the footer is over text too.
                                To fix this we should give the footer its "height" and add the footer height to the body. 
                                I suggest to use "padding-bottom" property for the closest parent container of the {`<footer>`} -  {`<body>`}.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-2 bg-dark text-light">
                                {`
...

body {
    background-color: lightsalmon;
    position: relative;
    min-height: 100vh;
    padding-bottom: 200px;  
    
    /* 200px - footer height */
   
}

...

footer {
    background-color: aquamarine;
    height: 200px;
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 200px;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/body-pb-footer-h-200.png")} title='"padding-bottom" for the body and "height" for the footer ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Now I can see everything {`:)`}! The last line of my text remains before {`<footer>`}. If you scroll the "long page" from top to bottom, you can see that everything is fine: footer is inside the html tag area and inside the body tag area, like all other content too.
                                It is time to check the short page again. Go to the "short" page.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/footer-out-of-100vh-viewport.png")} title='"padding-bottom" for the body and "height" for the footer ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" >
                            <p>
                                Oh, no! The footer is actually at the bottom, but to see it we need to use the scroll. This has happened because we added a "padding-bottom: 200px" to the body.
                                The height or min-height of the elements by default takes into account only the height of the element content. The "min-height: 100vh" includes only the body content, without any additional padding. So, because of that, there is a scroll for extra 200px down. Padding height is not included in our min-height.
                                To change the situation we can apply property which counts the height of the element as the element content + padding + border.
                                This property is <a href="https://www.w3schools.com/cssref/css3_pr_box-sizing.asp" target="_blank" rel="noopener noreferrer">"box-sizing: border-box;"</a>
                            </p>
                            <blockquote class="blockquote border p-2 my-3 w-75 mx-auto">
                                    <p className="m-0 p-2">
                                    border-box:<br/>
                                    The width and height properties (and min/max properties) includes content, padding and border.
                                </p>
                                <footer class="blockquote-footer p-2 text-right"><cite title="W3schools"><a href="https://www.w3schools.com/cssref/css3_pr_box-sizing.asp">w3schools</a></cite></footer>
                            </blockquote>
                            <p>
                                Let's apply "box-sizing: border-box;" for all elements because I want to measure the height of all elements as a sum of the heights of content, padding and border. 
                                Compare the look of the short page with "border-box" property and without.
                                You can spot the difference for sure.
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
    box-sizing: border-box;
}

...`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ReactCompareImage leftImage={leftShortContent} leftImageAlt='Page with property "box-sizing: border-box;' rightImageAlt='Page without property "box-sizing: border-box;"' rightImage={rightShortContentBorderBox} sliderPositionPercentage="0.95" />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p> 
                                Hurray! We did it. Let's check again that the footer is placed correctly on the long and short pages.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="6">
                            <p>Short page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/absolute/short-absolute.png")} title='"padding-bottom" for the body and "height" for the footer ' />
                            <ShowCSS button="Final styles.css"
                                css=
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
                            <p>Long page</p>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/footer/long.png")} title='"padding-bottom" for the body and "height" for the footer ' />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p> 
                                Congratulations! I have known that we can do it!
                                I urge you to check a pages without enough content  and pages full of content. All pages must be displayed correctly.
                                The same with the footer "height". Check that the height of the footer is adapted to different screen sizes.
                            </p>
                            <p>
                                It has been a long way, but we did it! Everything is possible {`:)`}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

