import React from "react";
import { Row, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

import { ARTICLES } from "../../../../website-data/blog/articles";
import ExpandImage from "../ExpandImage";

export default function VarLetConstArticle(props) {

    const articleLCV = ARTICLES.filter(article => article.url === "/var-let-const/")[0];
    const previewImg = articleLCV.previewImg.path;
    const initialPage = articleLCV.initialPageImg.path;

    return (
        <React.Fragment>
            <section className="bg-white p-3 border border-dark" >
                <Container >
                    <Row className="my-3">
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                I am only starting my journey as a <strong>Web Developer</strong> and, as for me, this is important to make the right choices when you are writing code. Sometimes to do so, I am spending hours trying to understand what is going on {`:)`}. Variable declaration keywords such as <strong>var</strong>, <strong>let</strong>, and <strong>const</strong> was one of the first mysteries I have faced.
                            </p>
                            <p>
                                Let's go!
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img width="100%" src={previewImg} alt={articleLCV.title} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container>
                    <h2>Initial settings</h2>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Two documents have been prepared: <strong>index.html</strong>,
                                and <strong>script.js</strong>.
                                Have a look at them.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-start m-0 p-0">
                        <Col xs="12" md="6" className="m-0 p-0">
                            <p><strong>index.html</strong></p>
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
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
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {

}
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <h2>Initial settings</h2>
                            <ExpandImage src={initialPage} title={articleLCV.initialPageImg.alt} class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p> Open <strong>index.html</strong> in a browser - it is just an empty page.
                            Next, open <em>Web Developer Console</em> window from <em>Developer Tools</em> because it shows errors and results of data manipulations (also console.log() is very useful).
                            </p>
                            <p>
                                Let's go!
                            </p>

                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The first: Creation</h2>
                    <Row className="my-3">
                        <Col xs="12">

                            <p>
                                First of all, the <strong>let</strong> and <strong>const</strong> keywords came to the JavaScript with a release of ECMAScript 2015 not that long ago. The <strong>var</strong> keyword was used from the very beginning of JavaScript.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p>
                                <strong>var</strong> - exists from the very beginning of JavaScript.<br />
                                <strong>let</strong> and <strong>const</strong> - has been added recently. They are part of the launch of <strong>ECMAScript 2015</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The second: Block scope</h2>
                    <h3>Global and local scopes</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                To understand the behavioural discrepancy between <strong>var</strong>, <strong>let</strong> and <strong>const</strong> keywords, you should learn the definition of the <strong>scope</strong>.
                            </p>
                            <p>
                                <strong>Scope</strong> provides rules which determine the accessibility of the variables. I think it is acceptable to say that variables may belong to <strong>scope</strong>, or be part of it, or be inside it.
                            </p>
                            <p>
                                There are two types of scopes: <strong>global</strong> and <strong>local (lexical).</strong> Moreover, the <strong>local scope</strong> could be
                            </p>
                            <ul>
                                <li>function scope</li>
                                <li>block scope</li>
                            </ul>
                            <h4>local scope</h4>
                            <p>
                                Let's see what the <strong>local</strong> means. <strong>Declaration</strong> of a variable should be done in the propper <strong>scope</strong>. The <strong>scope</strong> is called <strong>local</strong> when code sits between curly braces &#123;...&#125;. It is a bad practice to create variables in a <strong>global</strong> environment.

                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-start my-3">
                        <Col xs="12" md="6">
                            <h5>function scope</h5>
                            <p>
                                The <strong>function scope</strong> is between function curly braces.
                                If the variable is declared inside this <strong>scope</strong>,
                                it could be only accessed, assigned, used inside this particular function.
                                However, other <em>functions inside could use higher-level functions variables</em>.
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <h5>block scope</h5>
                            <p>
                                The <strong>block scope</strong> is between curly braces for blocks of code like <em>for</em>, <em>while</em>, etc.
                                loops, conditional statements like <em>if</em>, <em>switch</em>, etc..
                                If a variable is declared inside the <strong>block scope</strong>,
                                it matters which word <strong>let</strong>, <strong>var</strong> or <strong>const</strong> was applied.
                                Each keyword provides a different kind of accessibility.
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-start my-3">
                        <Col xs="12" md="6">

                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    
    var `}<span className="app-mint-text">x</span>{` = 10; `}<span className="text-success">&#47;&#47; function scope variable</span>{`
    ...

}`}
                            </code>
                        </Col>
                        <Col xs="12" md="6">

                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark">
                                {`
    ...
    `}<span className="text-warning">if(true)</span>{` {
       let `}<span className="app-mint-text">x</span>{` = 33; `}<span className="text-success">&#47;&#47; block scope variable</span>{`
       ... 
    }
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="12">
                            <h4>global scope</h4>
                            <p>
                                If a variable is declared outside any <strong>local scope</strong>  then the variable
                                is a <strong>global scope</strong> variable.
                            </p>
                            <p>
                                It is not a good idea to make all variables global. The issues could occur when somebody
                                accidentally or intentionally reassigns the value of the <strong>global variable</strong>.
                                The <strong>global variable</strong> could be accessed from any <strong>code block</strong> or <strong>function</strong>.
                                Sometimes it could be hard to find where the <strong>global variable</strong> value has been changed.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center my-3">
                        <Col xs="12" md="6">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                {`
var `}<span className="app-mint-text">x</span>{` = "food"; `}<span className="text-success">&#47;&#47; global scope variable</span>

                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    ...
}

`}<span className="text-warning">if(true)</span>{` {
    ...
}


`}
                            </code>
                        </Col>
                    </Row>
                    <h3>Differences</h3>
                    <Row className="my-3">
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {

    `}<span className="app-pink-text">var</span> <span className="app-mint-text">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="app-mint-text">x</span>{`);

}

`}<span className="text-warning">example()</span>{`;
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="app-mint-text">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {

    `}<span className="app-pink-text">let</span> <span className="app-mint-text">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="app-mint-text">x</span>{`);

}

`}<span className="text-warning">example()</span>{`;
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="app-mint-text">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {

    `}<span className="app-pink-text">const</span> <span className="app-mint-text">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="app-mint-text">x</span>{`);

}

`}<span className="text-warning">example()</span>{`;
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="app-mint-text">x</span>{`);
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="12">
                            <p>
                                Do not forget to save <strong>index.html</strong> and refresh web-page after changes.
                                The outcome is the same for all keywords. I have <em>declared</em> and <em>initialised</em> variable inside the <strong>function scope</strong>.
                                So, if I try to access the variable <em>outside</em> the <strong>function scope</strong> then the code returns an error <strong>x is not defined</strong>.
                                It happens because outside the <strong>function scope</strong> the program knows nothing about <em>x</em>.
                                How you can see on the picture below, <em>x</em> from the inside is accessible and returns the right value.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/undefined-outside-function-scope.png")} title="Value is not defined outside the function scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="12">
                            <p>
                                Let's try the same approach with <strong>block scope</strong> variables.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">if(true)</span>{` {

    `}<span className="app-pink-text">var</span> <span className="app-mint-text">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="app-mint-text">x</span>{`);

}
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="app-mint-text">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-block-scope.png")} title="Var keyword for the block scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">if(true)</span>{` {

    `}<span className="app-pink-text">let</span> <span className="app-mint-text">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="app-mint-text">x</span>{`);

}
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="app-mint-text">x</span>{`);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/let-const-block-scope.png")} title="Let keyword for the block scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">if(true)</span>{` {

    `}<span className="app-pink-text">const</span> <span className="app-mint-text">x</span>{` = 12;
    `}<span className="text-warning">console.log</span>{`("inside " + `}<span className="app-mint-text">x</span>{`);

}
`}<span className="text-warning">console.log</span>{`("outside " + `}<span className="app-mint-text">x</span>{`);`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/let-const-block-scope.png")} title="Const keyword for the block scope" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="12">
                            <p>
                                So, there is actually a difference between the keywords. <strong>Let</strong>, <strong>const</strong> variables declared within
                                the <strong>block scope</strong> could not be used outside the scope in contrast to variables declared by <strong>var</strong>.
                                As you can see on the last two screenshots, <em>console</em> shows an error: <em>ReferenceError: x is not defined</em> meaning that the part of the program outside the <strong>block scope</strong> knows
                                nothing about <strong>let</strong>, <strong>const</strong> variables defined inside.
                                However, if <strong>var</strong> keyword defines a variable inside a <strong>block scope</strong>,
                                then you could work with the variable outside the <strong>block scope</strong> (could see <em>outside 12</em> value).
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p>
                                <strong>var</strong> - <em>does not support <strong>block scope</strong></em>, and variables defined within <strong>block scope</strong> could be used anywhere.<br />
                                <strong>let</strong> and <strong>const</strong> - <em>support <strong>block scope</strong></em> and variables defined within particular <strong>block scope</strong> could not be used outside that particular <strong>block scope</strong>;
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The third: Global object properties</h2>
                    <h3>Global object</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>Mozilla Web Docs have a very simple and neat explanation of a <strong>global object.</strong></p>
                            <blockquote className="border p-2 my-3 w-75 mx-auto">
                                <p className="m-0 p-2">
                                    A <strong>global object</strong> is an object that always exists in the <strong>global scope</strong>.<br /><br />

                                    In JavaScript, there's always a <strong>global object</strong> defined. In a web browser, when scripts create global variables, they're created as members of the <strog>global object</strog>. (In Node.js this is not the case.) The <strong>global object's</strong> interface depends on the execution context in which the script is running.
                                    <br />For example:<br />
                                    - In a web browser, any code which the script doesn't specifically start up as a background task has a Window as its <strong>global object</strong>. This is the vast majority of JavaScript code on the Web.<br />
                                    - Code running in a Worker has a WorkerGlobalScope object as its <strong>global object</strong>.<br />
                                    - Scripts running under Node.js have an object called global as their <strong>global object</strong>.

                                </p>
                                <footer className="p-2 text-right"><cite title="MDN"><a href="https://developer.mozilla.org/en-US/docs/Glossary/Global_object">MDN</a></cite></footer>
                            </blockquote>
                            <p>
                                Let's find a <strong>global object</strong> in a browser. Open an empty new page (<em>about:blank</em> works for most of the browsers). Next, open <em>Web Developer Tools - Web Console</em> (the path may differ from browser to browser).
                                Write down <strong>window</strong> into the <em>console</em> and press <em>Enter</em>. Now you can see something called <strong>window</strong>. If you check the <strong>window</strong> type using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> you will see an <em>object</em>.
                            </p>
                            <p>
                                The <strong>global object</strong> has properties. You can add a new one in several ways: using dot notation (window.a = "something...") or bracket notation (window["a"] = "something...") just as for any other object.
                                Also, a way to add property is to add a <strong>global variable</strong> using theright keyword.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="6">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/window-global-object.png")} title="Browser global object - window" class=" border" />
                        </Col>
                        <Col xs="12" md="6">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/window-properties.png")} title="The window properties" class=" border" />
                        </Col>
                    </Row>
                    <h3>Differences</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                The main difference is - a variable defined through <strong>var</strong> keyword becomes the <strong>global object</strong> property as compared with a variable defined with <strong>let</strong> or <strong>const</strong>.
                                Let's see if it is true. Repeat all steps for each keyword - <strong>var</strong>, <strong>let</strong>, <strong>const</strong>.
                            </p>
                            <ol>
                                <li><em>Console</em> in your browser should be open. Come up with a variable name. Check that the <strong>window</strong> object does not have a property with the same name (use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty()</a> build-in function)<br />
                                    <strong>var</strong>, <strong>let</strong>, <strong>const</strong> - the result of the function call is <em>false</em>.<br />
                                </li>
                                <li>
                                    Define a variable using the keyword and the name.<br />
                                    <strong>var</strong>, <strong>let</strong>, <strong>const</strong> - the result is <em>undefined</em> (if the action returns nothing then JavaScript returns <em>undefined</em>.
                                </li>
                                <li>
                                    Check the <strong>window</strong> object now has the property (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty">hasOwnProperty()</a>)<br />
                                    <strong>var</strong> - the result of the function call is <em>true</em>.<br />
                                    <strong>let</strong> and <strong>const</strong> - the result of the function call is <em>false</em>.
                                </li>
                                <li>
                                    Using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors">property accessors</a> on <strong>window</strong> object check the property value.<br />
                                    <strong>var</strong> - the property exists, and you can see its value (which is "chocolate" in my example).<br />
                                    <strong>let</strong> and <strong>const</strong> - the property does not exist, and action returns <em>undefined</em>.
                                </li>
                                <li>
                                    Check that the <strong>global variable</strong> with the given name exists in a <strong>global scope</strong>, and contains the given value.<br />
                                    <strong>var</strong>, <strong>let</strong>, <strong>const</strong> - the result is value assigned to that particular <strong>global variable</strong> ("chocolate", "apple", "mint" in my example).
                                </li>
                            </ol>
                            <p>
                                Pictures below show these 5 steps for each keyword. As you can see, the difference is visible from step 3. <br />
                                The only <strong>var</strong> defined variable added to the <strong>window</strong> object as a property. Other two keywords just allow creating a variable in a <strong>global scope</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="4">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-global-object-property.png")} title="Global variable created with var is the global object property" class=" border" />
                        </Col>
                        <Col xs="12" md="4">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/let-global-object-property.png")} title="Global variable created with let is not the global object property" class=" border" />
                        </Col>
                        <Col xs="12" md="4">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/const-global-object-property.png")} title="Global variable created with const is not the global object property" class=" border" />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p>
                                <strong>var</strong> - <em>creates property</em> for a global object<br />
                                <strong>let</strong> and <strong>const</strong> - <em>do not create properties</em> for a global object
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The fourth: Hoisting</h2>
                    <h3>Hoisting</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                <strong>Hoisting</strong> - is an ability of <em>JavaScript</em> to move the <em>declaration</em> of a variable to the top of the current code scope.
                                Need to know, <strong>hoisting</strong> is about <em>declaration</em>, not about <em>initialisation</em> or <em>assignment</em>.
                            </p>
                            <p>
                                Let's get this sorted out.
                            </p>
                            <p>
                                <strong>Declaration</strong> - is a creation of the variable when it receives a name, all properties, type and boundaries of the scope.
                                All variables get <em>initialised</em> with a default JS value <em>undefined</em> right after the <em>declaration</em>.
                            </p>
                            <p>
                                <strong>Initialisation</strong> - is more of an inside process which helps to put the value
                                inside the variable. <em>Initialisation</em> could happen only after the <em>declaration</em> and means - <em>assign an initial value
                                to the declared variable (using undefined as default initial value)</em>.
                            </p>
                            <p>
                                <strong>Assignment</strong> - the process of adding a new value into the variable container or changing the value that variable holds to the new one.
                            </p>
                            <p>
                                <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                    <span className="app-pink-text">var</span> <span className="app-mint-text">x</span>;  <span className="text-success">&#47;&#47; declaration and initialisation with "undefined"</span><br /><br />
                                    <span className="app-pink-text">var</span> <span className="app-mint-text">x</span> = 5; <span className="text-success">&#47;&#47; declaration and initialisation with 5</span><br /><br />
                                    <span className="app-mint-text">x</span> = 7; <span className="text-success">&#47;&#47; assignment a new value 7</span>
                                </code>
                            </p>

                            <p>
                                So, <strong>hoisting</strong> "under a hood" moves <em>declaration</em> of the variable to the top of the current scope. Let's see how using <strong>var</strong>, <strong>let</strong> and <strong>const</strong> keywords is affected by that.
                            </p>
                        </Col>
                    </Row>
                    <h3>Differences</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Each variable declaration hoists, but there are some nuances connected to declaration keywords.
                            </p>
                            <p>
                                Delete code from the <strong>scripts.js</strong> file and put new provided below code instead.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">console.log</span>{`("var " + `}<span className="app-mint-text">x</span>{`);

`}<span className="app-pink-text">var</span> <span className="app-mint-text">x</span>{`;

`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-hoisting.png")} title="Var keyword hoisting" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">console.log</span>{`("let " + `}<span className="app-mint-text">x</span>{`);

`}<span className="app-pink-text">let</span> <span className="app-mint-text">x</span>{`;

`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/let-const-hoisting.png")} title="Let keyword hoisting" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-warning">console.log</span>{`("const " + `}<span className="app-mint-text">x</span>{`);

`}<span className="app-pink-text">const</span> <span className="app-mint-text">x</span>{`;

`}
                            </code>
                        </Col>
                        <Col xs="12" md="7">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/let-const-hoisting.png")} title="Const keyword hoisting" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <p>
                                Okay, everything is clear now. <strong>Hoisting</strong> mechanism moved the variable <em>declaration</em> to the top of the current scope (in that case <strong>global scope</strong>),
                                then initialised the variable as <em>undefined</em> (meaning that variable value now is <em>undefined</em>).
                                So, when you use the <strong>var</strong> declared variable, it already contains a value and <em>console</em> shows that value.
                            </p>
                        </Col>
                        <Col xs="12" md="5">
                            <p>x hoisted to the top of the document</p>
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">

                                <span className="app-pink-text">var</span> <span className="app-mint-text">x</span>{`;

`}<span className="text-warning">console.log</span>{`("var " + `}<span className="app-mint-text">x</span>{`);

`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                For <strong>let</strong>, <strong>const</strong> keywords <strong>hoisting</strong> works too, but <strong>let</strong> and <strong>const</strong> are <em>initialised</em> only when a parser evaluates it.
                                JavaScript throws an error <em>ReferenceError: can't access lexical declaration `x' before initialization</em> showing that you need to initialise <strong>x</strong> first.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p>
                                <strong>var</strong> - supports <strong>hoisting</strong>, and <em>the variable is initialised to "undefined" during declaration.</em><br />
                                <strong>let</strong> and <strong>const</strong> - support <strong>hoisting </strong>, but <em> the variable is not initialised until the parser evaluates it.</em>.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The fifth: Reassignment(update) and redeclaration</h2>
                    <h3>Update and redeclaration</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>To verify how <strong>reassignment</strong> works, you should assign a value at first, then reassign a different value to the same variable in the same scope.
                            </p>
                            <p>
                                The same with <strong>redeclaration</strong>. Declare a variable and then inside the same scope declare the same variable again.
                            </p>
                            <p>
                                You will look into mechanisms of <strong>reassignment</strong> and <strong>redeclaration</strong> inside the particular scope because if you declare variables in different scopes they would be different variables.
                                Want to remind that the <strong>var</strong> keyword declares a function-scoped or globally-scoped variable, but not a block-scoped, so I am using <strong>function scope</strong> in my examples.
                            </p>
                        </Col>
                    </Row>
                    <h3>Differences</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Delete code from the <strong>scripts.js</strong> file and put new provided below code instead. At first, let's see the <em>reassignment</em> of the variables.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">var</span> <span className="app-mint-text">a</span>{` = 6;
    `}<span className="text-warning">console.log</span>{`("declare, initialise, assign-> " + `}<span className="app-mint-text">a</span>{`);
                                
    `}<span className="app-mint-text">a</span>{` = "moon";
    `}<span className="text-warning">console.log</span>{`("reassign-> " + `}<span className="app-mint-text">a</span>{`);
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-let-reassignment.png")} title="Reassignment of a variable declared with var keyword" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">let</span> <span className="app-mint-text">a</span>{` = 6;
    `}<span className="text-warning">console.log</span>{`("declare, initialise, assign-> " + `}<span className="app-mint-text">a</span>{`);
                                
    `}<span className="app-mint-text">a</span>{` = "moon";
    `}<span className="text-warning">console.log</span>{`("reassign-> " + `}<span className="app-mint-text">a</span>{`);
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-let-reassignment.png")} title="Reassignment of a variable declared with let keyword" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">const</span> <span className="app-mint-text">a</span>{` = 6;
    `}<span className="text-warning">console.log</span>{`("declare, initialise, assign-> " + `}<span className="app-mint-text">a</span>{`);
                                
    `}<span className="app-mint-text">a</span>{` = "moon";
    `}<span className="text-warning">console.log</span>{`("reassign-> " + `}<span className="app-mint-text">a</span>{`);
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/const-reassignment.png")} title="Reassignment of a variable declared with const keyword" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/const-change-object.png")} title="Changing array assigned to a const variable" class={" border"} />
                        </Col>
                        <Col xs="12" md="7">
                            <p>
                                As can be seen, <strong>var</strong>, <strong>let</strong> variables could be reassigned and contain new values. The same cannot be said for <strong>const</strong> variables.
                            </p>
                            <p>
                                <strong>Reassignment</strong> of the <strong>const</strong> defined variable does not work. <strong>Const</strong> means <strong>constant</strong> - something that does not change.
                                You tried to <strong>reassign</strong>, in other words, change connection between the <strong>const</strong> variable and its value and, as a result, the error saying us it is not possible because the variable already contains a value.
                                Well, it's not that simple. When it comes to objects(including arrays) changing object/arrays from the inside is allowed to, but anyway, you cannot replace the value contained in the <strong>const</strong> variable. Look at the example on the right.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Let's replace <strong>reassignment</strong> part of the code with <strong>redeclaratiion</strong>.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">var</span> <span className="app-mint-text">a</span>{` = 6;
    `}<span className="text-warning">console.log</span>{`("declare, initialise, assign-> " + `}<span className="app-mint-text">a</span>{`);
                                
    `}<span className="app-pink-text">var</span> <span className="app-mint-text">a</span>{` = "moon";
    `}<span className="text-warning">console.log</span>{`("redeclare-> " + `}<span className="app-mint-text">a</span>{`);
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-redeclaration.png")} title="Reassignment of a variable declared with var keyword" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">let</span> <span className="app-mint-text">a</span>{` = 6;
    `}<span className="text-warning">console.log</span>{`("declare, initialise, assign-> " + `}<span className="app-mint-text">a</span>{`);
                                
    `}<span className="app-pink-text">let</span> <span className="app-mint-text">a</span>{` = "moon";
    `}<span className="text-warning">console.log</span>{`("redeclare-> " + `}<span className="app-mint-text">a</span>{`);
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/let-redeclaration.png")} title="Redeclaration of a variable declared with let keyword" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">const</span> <span className="app-mint-text">a</span>{` = 6;
    `}<span className="text-warning">console.log</span>{`("declare, initialise, assign-> " + `}<span className="app-mint-text">a</span>{`);
                                
    `}<span className="app-pink-text">const</span> <span className="app-mint-text">a</span>{` = "moon";
    `}<span className="text-warning">console.log</span>{`("redeclare-> " + `}<span className="app-mint-text">a</span>{`);
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/const-redeclaration.png")} title="Reassignment of a variable declared with const keyword" class={" border"} />
                        </Col>
                    </Row>
                    <hr />
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p>
                                <strong>var</strong> - <em>can be updated and redeclared</em> within its scope<br />
                                <strong>let</strong> -  <em>can be updated, but not redeclared</em> within its scope<br />
                                <strong>const</strong> -  <em>can neither be updated nor redeclared</em> within its scope
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>The sixth: Declaration without specified initialisation</h2>
                    <h3>Declaration without specified initialisation</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                It is  pretty easy to <strong>declare</strong> a variable without specified initialisation.
                                All you have to do is use keyword and variable name: <strong>var x;</strong> and that is it.
                                For this kind of declaration, JavaScript initialises a variable with the default <em>undefined</em> value.
                            </p>
                        </Col>
                    </Row>
                    <h3>Differences</h3>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                Delete code from the <strong>scripts.js</strong> file and put new provided below code instead.
                            </p>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">var</span> <span className="app-mint-text">a</span>{` = "sweet";
    `}<span className="text-warning">console.log</span>{`("declaration + default initialisation to 'undefined'-> " + `}<span className="app-mint-text">a</span>{`);                                
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-let-declaration-wo-initialisation.png")} title="Declaration without specified initialisation using var" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">let</span> <span className="app-mint-text">a</span>{` = "sweet";
    `}<span className="text-warning">console.log</span>{`("declaration + default initialisation to 'undefined'-> " + `}<span className="app-mint-text">a</span>{`);                                
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/var-let-declaration-wo-initialisation.png")} title="Declaration without specified initialisation using let" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12" md="7">
                            <code className="app-code pl-5 pr-2 py-2 text-light bg-dark mb-sm-2 mb-xs-2">
                                <span className="text-info">function</span> <span className="text-warning">example()</span>{` {
    `}<span className="app-pink-text">const</span> <span className="app-mint-text">a</span>{` = "sweet";
    `}<span className="text-warning">console.log</span>{`("declaration + default initialisation to 'undefined'-> " + `}<span className="app-mint-text">a</span>{`);                                
}
                                
`}<span className="text-warning">example()</span>{`;
`}
                            </code>
                        </Col>
                        <Col xs="12" md="5">
                            <ExpandImage src={require("../../../../../assets/images/blog/articles/var-let-const/const-declaration-wo-initialisation.png")} title="Declaration without specified initialisation using const" class={" border"} />
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                As you recall, <strong>const</strong> means <strong>constant</strong> something you cannot change. The error shows that you should use "=" during <strong>const</strong> declaration.
                                It makes sense, because if JavaScript initialise a <strong>const</strong> variable with <em>undefined</em> value than you cannot change it.
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row className="my-3 justify-content-center">
                        <Col xs="12" md="6">
                            <p>
                                <strong>var</strong> and <strong>let</strong> - <em>can be declared without being initialised</em><br />
                                <strong>const</strong> -  <em>must be initialised during declaration</em>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>Summarising</h2>
                    <Row className="my-3">
                        <Col xs="12">
                            <ListGroup>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Creation</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - exists from the very beginning of JavaScript.<br />
                                        <strong>let</strong> and <strong>const</strong> - has been added recently. They are part of the launch of <strong>ECMAScript 2015</strong>
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Block scope</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - <em>does not support <strong>block scope</strong></em>, and variables defined within <strong>block scope</strong> could be used anywhere.<br />
                                        <strong>let</strong> and <strong>const</strong> - <em>support <strong>block scope</strong></em> and variables defined within particular <strong>block scope</strong> could not be used outside that particular <strong>block scope</strong>;
        </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Global object property</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - <em>creates property</em> for a global object<br />
                                        <strong>let</strong> and <strong>const</strong> - <em>do not create properties</em> for a global object
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Hoisting</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - supports <strong>hoisting</strong>, and <em>the variable is initialised to "undefined" during declaration.</em><br />
                                        <strong>let</strong> and <strong>const</strong> - support <strong>hoisting </strong>, but <em> the variable is not initialised until the parser evaluates it.</em>.
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Update and redeclaration</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> - <em>can be updated and redeclared</em> within its scope<br />
                                        <strong>let</strong> -  <em>can be updated, but not redeclared</em> within its scope<br />
                                        <strong>const</strong> -  <em>can neither be updated nor redeclared</em> within its scope
                                    </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Declaration without specified initialisation</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        <strong>var</strong> and <strong>let</strong> - <em>can be declared without being initialised</em><br />
                                        <strong>const</strong> -  <em>must be initialised during declaration</em>
                                    </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col xs="12">
                            <p>
                                I hope it makes sense! That was nice to <em>get all ducks in a row</em> and add a piece of new knowledge to the bag.
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
