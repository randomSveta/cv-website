import React from "react";
import { Row, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

import { ARTICLES } from "../../articles";
import ExpandImage from "../ExpandImage";

export default function LetConstVarArticle(props) {

    const articleLCV = ARTICLES.filter(article => article.url === "/let-const-var/")[0];
    const previewImg = articleLCV.previewImg.path;
    const initialPage = articleLCV.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark" >
                <Container >
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                I am only starting my journey as a <strong>Web Developer</strong> and, as for me, this is important to make the right choices when you are writing code. Sometimes to do so, I am spending hours trying to understand what is going on {`:)`}. Spotting a difference between <strong>var</strong> and <strong>let/const</strong> keywords to declare a variable was one of the first mysteries I have faced.
                            </p>
                            <p>
                                In this article, I will try to explain, mainly for myself, what I have found out about variable declaration keywords. For the record, I am <strong>not comparing const vs let</strong> keywords in this topic, because the difference between them deserves separate consideration. So, compared with <strong>var</strong> they have the same behaviour and I set them together.
                            </p>
                            <p>
                                Let's go!
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img className="page-screenshot" width="100%" src={previewImg} alt={articleLCV.title} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <h2>Initial settings</h2>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Two documents have been prepared: <strong>index.html</strong>, and <strong>script.js</strong>.
                        Have a look at them.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-start m-0 p-0">
                        <Col xs="12" md="6" className="m-0 p-0">
                            <p><strong>index.html</strong></p>
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
<!DOCTYPE html>
`}<span className="text-success">&lt;html&gt;</span>{`

    `}<span className="text-success">&lt;head&gt;</span>{`
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
		<meta content="utf-8" http-equiv="encoding" />
    `}<span className="text-success">&lt;/head&gt;</span>{`

    `}<span className="text-success">&lt;body&gt;</span>{`
    `}<span className="text-info">&lt;script</span>{` src="./scripts.js"`}<span className="text-info">&gt;</span><span className="text-info">&lt;/script&gt;</span>{`
    `}<span className="text-success">&lt;/body&gt;</span>{`

`}<span className="text-success">&lt;/html&gt;</span>
                            </code>
                        </Col>
                        <Col xs="12" md="6">
                            <p><strong>script.js</strong></p>
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
function `}<span className="text-warning">example()</span>{` {

}
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Initial settings</h2>
                            <ExpandImage src={initialPage} title={articleLCV.initialPageImg.alt} class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p> There you can see <strong>index.html</strong> document without any content it is just empty page and also a function template in the <strong>scripts.js</strong> file. Next, I opened <strong>index.html</strong> in a browser. Following, I opened the <em>Web Developer Console</em> window from Developer Tools because I am going to use <em>console.log()</em> function to see a result of my actions.
                            </p>
                            <p>
                                I am ready! Do you?
                            </p>

                        </Col>
                    </Row>

                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The first point: Creation</h2>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">

                            <p>
                                First of all, the <strong>let</strong> and <strong>const</strong> keywords came to the JavaScript with a release of ECMAScript 2015 not that long ago. The <strong>var</strong> keyword was used from the very beginning of JavaScript. This is the first difference: <strong>var</strong> - is old, <strong>let</strong> and <strong>const</strong> - are new.
                            </p>
                            <p>
                                Here it goes! The first one!
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The second point: Block scope</h2>
                    <h3>Global and local scopes</h3>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                Second, to understand the behavioural discrepancy between <strong>var</strong> and <strong>let/const</strong> keywords, we should learn the definition of the <strong>scope</strong>.
                            </p>
                            <p>
                                <strong>Scope</strong> provides rules which determine the accessibility of the variables. I think you can say that variables may belong to <strong>scope</strong> or be part of the <strong>scope</strong> or be inside the <strong>scope</strong>.
                            </p>
                            <p>
                                There are two types of scopes: <strong>global scope</strong> and <strong>local(lexical) scope.</strong> Moreover, the <strong>local scope</strong> could be
                            </p>
                            <ul>
                                <li>function scope</li>
                                <li>block scope</li>
                            </ul>
                            <h4>local scope</h4>
                            <p>
                                Let's see what the <strong>local</strong> scope is. When we declare a variable there should be the proper <strong>scope</strong> to define it. The <strong>scope</strong> is called <strong>local</strong> when code placed between &#123;...&#125; and in addition <em>variables were declared inside</em> the function or the block of code (using the right declaration keyword) could be accessed only from the inside.
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-startmt-5 mb-2">
                        <Col xs="12" md="6">
                            <h5>function scope</h5>
                            <p>
                                The <strong>function scope</strong> is located between function curly brackets. If the variable is declared inside this <strong>scope</strong>, it could be only accessed, assigned, used inside this particular function. However, other <em>functions inside could use higher-level functions variables</em>.
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <h5>block scope</h5>
                            <p>
                                The <strong>block scope</strong> is placed between curly brackets for blocks of codes as <em>for</em>, <em>while</em> etc loops, conditional statements like <em>if</em>, <em>switch</em> and so on. If the variable is declared inside the <strong>block scope</strong>, it matters which word <strong>let/var/const</strong> was used, because <em>different keywords provide different acessability</em>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-start mt-5 mb-2">
                        <Col xs="12" md="6">

                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">{`
function `}<span className="text-warning">example()</span>{` {
    
    var `}<span className="text-mint">x</span>{` = 10; `}<span className="text-success">&#47;&#47; function scope variable</span>{`
    ...

}`}
                            </code>
                        </Col>
                        <Col xs="12" md="6">

                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
    ...
    `}<span className="text-warning">if(true)</span>{` {
       let `}<span className="text-mint">x</span>{` = 33; `}<span className="text-success">&#47;&#47; block scope variable</span>{`
       ... 
    }
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <h4>global scope</h4>
                            <p>
                                If the variable was declared outside any<strong>local scope</strong>  (function or block) then the variable is a <strong>global scope</strong> variable and accessible from any function or any block.
                            </p>
                            <p>
                                I can say it is not a good idea to make all variables global. The issues could occur when somebody accidentally or intentionally reassign value of the global variable. The <strong>global variable</strong> could be accessed from the different <strong>block</strong> or <strong>function scope</strong> and sometimes it could be hard to find where the value has been changed.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5 mb-2">
                        <Col xs="12" md="6">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
var `}<span className="text-mint">x</span>{` = "food"; `}<span className="text-success">&#47;&#47; global scope variable</span>{`

function `}<span className="text-warning">example()</span>{` {
    ...
}

`}<span className="text-warning">if(true)</span>{` {
    ...
}


`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Okay, I am ready moving forward and compare keywords.
                            </p>
                        </Col>
                    </Row>
                    <h3>Find the difference in a block scope</h3>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
function `}<span className="text-warning">example()</span>{` {

    `}<span className="text-pink">var</span> <span className="text-mint">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="text-mint">x</span>{`);

}

`}<span className="text-warning">example()</span>{`;
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="text-mint">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
function `}<span className="text-warning">example()</span>{` {

    `}<span className="text-pink">let</span> <span className="text-mint">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="text-mint">x</span>{`);

}

`}<span className="text-warning">example()</span>{`;
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="text-mint">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
function `}<span className="text-warning">example()</span>{` {

    `}<span className="text-pink">const</span> <span className="text-mint">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="text-mint">x</span>{`);

}

`}<span className="text-warning">example()</span>{`;
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="text-mint">x</span>{`);
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Refresh <strong>index.html</strong> page each time, when you change the code. The outcome is the same for all keywords - the <strong>function scope</strong> in action. I have <em>declared</em> and <em>initialised</em> variable inside the function, talking more precise, inside the <strong>function scope</strong>. So, if I try to access the variable <em>outside</em> the<strong>function scope</strong> then the program returns an error <strong>x is not defined</strong>. This happens because the program knows nothing about variable inside. How you can see in the picture below, variable is accessible and returns the assigned value inside the <strong>function scope</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/undefined-outside-function-scope.png")} title="Value is not defined outside the function scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Let's try the similar approach with the <strong>block scope</strong> variables. Change code inside the <strong>scripts.js</strong> and reload the page for each keyword: <strong>var</strong>, <strong>let</strong>, <strong>const</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="5">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">if(true)</span>{` {

    `}<span className="text-pink">var</span> <span className="text-mint">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="text-mint">x</span>{`);

}
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="text-mint">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/var-block-scope.png")} title="Var keyword for the block scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="5">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">if(true)</span>{` {

    `}<span className="text-pink">let</span> <span className="text-mint">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="text-mint">x</span>{`);

}
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="text-mint">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/let-const-block-scope.png")} title="Let keyword for the block scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="5">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">if(true)</span>{` {

    `}<span className="text-pink">const</span> <span className="text-mint">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="text-mint">x</span>{`);

}
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="text-mint">x</span>{`);`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/let-const-block-scope.png")} title="Const keyword for the block scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                So, we actually could spot the difference between <strong>var</strong> and <strong>let/const</strong>.The <strong>let/const</strong> variables declared inside the <strong>block scope</strong> could not be used outside in contrast to variables declared by <strong>var</strong>. How you can see on the screenshot, console shows an error: <em>ReferenceError: x is not defined</em> for <strong>let/const</strong>. The part of the program outside the <strong>block scope</strong> knows nothing about <strong>let/const</strong> variables defined inside. However, if a <strong>var</strong> keyword defines a variable inside a <strong>block scope</strong>, then we could use the variable outside <strong>block scope</strong>, and could see <em>outside 12</em> in the console.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The third point: Hoisting</h2>
                    <h3>Hoisting</h3>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                <strong>Hoisting</strong> - is an ability of <em>JavaScript</em> to move the <em>declaration</em> of a variable to the top of the current code scope. It is important to know that <strong>hoisting</strong> is about - <em>declaration</em> and not about <em>initialization</em> or <em>assignment</em>.
                            </p>
                            <p>
                                Let's get this sorted out.
                            </p>
                            <p>
                                <strong>Declaration</strong> - is a creation of the variable when it receives a name, all properties, type and boundaries of the scope. All variables get <em>initialised</em> with a default JS value <em>"undefined"</em> right after the <em>declaration</em>.
                            </p>
                            <p>
                                <strong>Initialisation</strong> - is more of an inside process which helps to put the value inside the variable. How I understand <em>initialisation</em> could be only once and it initialises value after the <em>declaration</em>.
                            </p>
                            <p>
                                <strong>Assignment</strong> - the process of adding a new value into the variable container or changing the value that variable hold to the new one.
                            </p>
                            <p>
                                <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                    <span className="text-pink">var</span> <span className="text-mint">x</span>;  <span className="text-success">&#47;&#47; declaration and initialisation with "undefined"</span><br /><br />
                                    <span className="text-pink">var</span> <span className="text-mint">x</span> = 5; <span className="text-success">&#47;&#47; declaration and initialisation with 5</span><br /><br />
                                    <span className="text-mint">x</span> = 7; <span className="text-success">&#47;&#47; assignment a new value 7</span>
                                </code>
                            </p>

                            <p>
                                So, <strong>hoisting</strong> "under a hood" of the JavaScript moves <em>declarations</em> of the variables to the top of the current scope. Let's see how using <strong>var</strong>, <strong>let</strong> and <strong>const</strong> keywords is affected by that.
                            </p>
                        </Col>
                    </Row>
                    <h3>Find the difference regarding hoisting</h3>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                It is time to compare the behaviour of <strong>var</strong> and <strong>let/const</strong> related to the <em>variable declaration</em> and <em>hoisting</em>.
                            </p>
                            <p>
                                Delete code from the <strong>scripts.js</strong> file and put new provided below code instead.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="5">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
`}<span className="text-warning">console.log</span>{`("var " + `}<span className="text-mint">x</span>{`);

`}<span className="text-pink">var</span> <span className="text-mint">x</span>{`;

`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/var-hoisting.png")} title="Var keyword hoisting" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="5">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
`}<span className="text-warning">console.log</span>{`("let " + `}<span className="text-mint">x</span>{`);

`}<span className="text-pink">let</span> <span className="text-mint">x</span>{`;

`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/let-const-hoisting.png")} title="Let keyword hoisting" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="5">
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
`}<span className="text-warning">console.log</span>{`("const " + `}<span className="text-mint">x</span>{`);

`}<span className="text-pink">const</span> <span className="text-mint">x</span>{`;

`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/let-const-hoisting.png")} title="Const keyword hoisting" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="7">
                            <p>
                                Okay, everything is clear now. <strong>Var</strong> keyword allows us to see initialised as default <em>"undefined"</em> value in the conole without any errors. <strong>Hoisting</strong> moves the variable <em>declaration</em> to the top of the current scope (in that case global) and for the JS it looks like variable was <em>declared</em> before the usage.
                            </p>
                        </Col>
                        <Col xs="12" md="5">
                            <p>x hoisted to the top of the document</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark mb-sm-2 mb-xs-2">

                                <span className="text-pink">var</span> <span className="text-mint">x</span>{`;

`}<span className="text-warning">console.log</span>{`("var " + `}<span className="text-mint">x</span>{`);

`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                For <strong>let/const</strong> keywords <strong>hoisting</strong> does not work. So JavaScript assumes that variable <strong>x</strong> has not been declared yet before console.log() was called and shows an error <em>ReferenceError: can't access lexical declaration `x' before initialization</em>.
                            </p>
                            <p>We did it! Now we know the truth!</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>Summarising</h2>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <ListGroup>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Creation</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - exists from the very beginning of JavScript.<br /><br />
                                        <strong>let</strong> and <strong>const</strong> - has been added recently. They are part of the launch of <strong>ECMAScript 2015</strong>
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Block scope</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - <em>does not support <strong>block scope</strong></em>, and variables defined in <strong>block scope</strong> could be used anywhere.<br /><br />
                                        <strong>let</strong> and <strong>const</strong> - <em>support <strong>block scope</strong></em> and variables defined inside the <strong>block scope</strong> could not be used outside this <strong>block scope</strong>;
        </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Hoisting</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - <em>support <strong>hoisting</strong></em>. Variable could be declared after it was used.<br /><br />
                                        <strong>let</strong> and <strong>const</strong> - <em>does not support <strong>hoisting</strong></em>. Variable could be used only after/at the same time it was declared.
        </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                I hope it makes sense! That was nice to <em>get all ducks in a row</em> and added a piece of new knowledge to the bag.
                            </p>
                            <p>
                                <strong>Good luck!</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>

    );
}
