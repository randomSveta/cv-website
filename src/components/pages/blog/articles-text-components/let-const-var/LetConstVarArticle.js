import React from 'react';
import { Row, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import { ARTICLES } from '../../articles';
import ExpandImage from '../ExpandImage';

export default function LetConstVarArticle(props) {

    const articleLCV = ARTICLES.filter(article => article.url === '/let-const-var/')[0];
    const previewImg = articleLCV.previewImg.path;
    const initialPage = articleLCV.initialPageImg.path;

    return (
        <React.Fragment>
            <section className='bg-white p-3 border border-dark' >
                <Container >
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="6" className="align-self-center">
                            <p>
                                I am only starting my journey as a Web Developer and, as for me, this is important to make the right choices when you are writing code. Sometimes to do so, I am spending hours trying to understand what is going on {`:)`}. Spotting a difference between 'var' and 'let' keywords to declare a variable was one of the first mysteries I have faced. The part of it also was to look closer to the 'const' keyword and find the correct time and place to use it.
                            </p>
                            <p>
                                In this article, I will try to explain, mainly for myself, what I have found out and maybe someday my words also help somebody else.
                            </p>
                            <p>
                                Let's go!
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <img className='page-screenshot' width='100%' src={previewImg} alt={articleLCV.title} />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='bg-white p-3 border border-dark mt-3'>
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
                            <p>index.html</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
<!DOCTYPE html>
<html>

	<head>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
		<meta content="utf-8" http-equiv="encoding" />
	</head>

    <body>
		<script src="./scripts.js"></script>
	</body>

</html>`}
                            </code>
                        </Col>
                        <Col xs="12" md="6">
                            <p>script.js</p>
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
function example() {

}
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs='12'>
                            <p>Initial page</p>
                            <ExpandImage src={initialPage} title={articleLCV.initialPageImg.alt} class={' border'} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p> There you can see index.html document without any content  it is just empty page and also blank for the function in the scripts.js file.

                                Then, I opened index.html in a browser. Next, I have opened Development Tools Console window because I am going to use console.log() function to see the results of my actions.
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
                                First of all, the 'let' and 'const' keywords came to the JavaScript with a release of ECMAScript 2015 not that long ago.
                                The var keyword was used from the very beginning of JavaScript. This is the first difference: var - is old, let and const - are new.
                            </p>
                            <p>
                                Second, to understand the behavioral discrepancy between var and let/const keywords, we should learn the definition of the 'scope'.
                            </p>
                            <p>
                                Here it goes!
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
                                'Scope' provides rules which determine the accessibility of the variables. I think you can say that variables may belong to 'scope' or be part of the 'scope' or be inside the 'scope'.
                            </p>
                            <p>
                                There are two types of scopes: 'global scope' and 'local scope'. Moreover, the local scope could be
                            </p>
                            <ul>
                                <li>function scope</li>
                                <li>block scope</li>
                            </ul>
                            <h4>local scope</h4>
                            <p>
                                Let's see what the 'local' scope is. When we declare a variable there should be the proper 'scope' to define it.
     The scope is called 'local' when variables are declared inside the function or the block of code (using the right declaration keyword) and could be accessed only from the inside.
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-startmt-5 mb-2">
                        <Col xs="12" md="6">
                            <h5>function scope</h5>
                            <p>
                                The 'function scope' is placed between function curly brackets. If the variable is declared inside this scope, it could be only accessed, assigned, used inside this particular function. However, other functions inside could use higher-level functions variables.
                            </p>
                        </Col>
                        <Col xs="12" md="6">
                            <h5>block scope</h5>
                            <p>
                                The 'block scope' is placed between curly brackets for blocks of codes as 'for', 'while' and etc loops, conditional statements like 'if', 'switch' and so on. If the variable is declared inside the block scope, it really matters which word let/ var / cons was used, because different words provide different acessability.
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-start mt-5 mb-2">
                        <Col xs="12" md="6">

                            <code className="code-styles px-5 py-3 text-light bg-dark">{`
function example() {
    
    var x = 10; // function scope variable
    ...

}`}
                            </code>
                        </Col>
                        <Col xs="12" md="6">

                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
    ...
    if (true) {
       let y = 33; // block scope variable
       ... 
    }
}`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <h4>global scope</h4>
                            <p>
                                If the variable was declared outside any local scope (function and block) then this variable is a global scope variable and accessible from any function or any block.
                            </p>
                            <p>
                                I can say it is not a good idea to make all variables global.
     The issues could occur when somebody accidentally or intentionally reassign value to the global variable.  The global variable could be accessed from the different block and function scops and sometimes it could be hard to find where the value has been changed.
                            </p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5 mb-2">
                        <Col xs="12" md="6">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
var z = 'food'; // global scope variable

function example() {
    ...
}

if (true) {
    ...
}


`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Okay, I am ready moving forward and compare all keywords.
                            </p>
                        </Col>
                    </Row>
                    <h3>Find the difference in block scope</h3>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
function example() {
    var x = 12;
    console.log('inside ' + x);
}

example();
console.log('outside ' + x);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
function example() {
    let x = 12;
    console.log('inside ' + x);
}

example();
console.log('outside ' + x);
`}
                            </code>
                        </Col>
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
function example() {
    const x = 12;
    console.log('inside ' + x);
}

example();
console.log('outside ' + x);
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Refresh index.html page each time, when you change the code. The outcome is the same for all keywords - the function scope in action.
     I have declared and initialized variable inside the function, talking more precise, inside the function scope. So, if I try to access the variable outside the function scope then the program returns 'undefined' value. This happens because the program knows nothing about variable inside.
     How you can see in the picture below, inside the function variable is accessible and returns the assigned value.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2 justify-content-center">
                        <Col xs='12' md='8'>
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/undefined-outside-function-scope.png")} title='Value is not defined outside the function scope' class={' border'} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Let's try the simmilar with the block scope variables.
                                Change code inside the scripts.js and reload the page for each variant var, let, const.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
if (true) {
    var x = 12;
    console.log('inside ' + x);
}
console.log('outside ' + x);

`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/var-block-scope.png")} title='Var keyword for the block scope' class={' border'} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
if (true) {
    let x = 12;
    console.log('inside ' + x);
}
console.log('outside ' + x);

`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/let-const-block-scope.png")} title='Let keyword for the block scope' class={' border'} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="4">
                            <code className="code-styles px-5 py-3 text-light bg-dark">
                                {`
if (true) {
    var x = 12;
    console.log('inside ' + x);
}
console.log('outside ' + x);

`}
                            </code>
                        </Col>
                        <Col xs="12" md="8">
                            <ExpandImage src={require("../../../../../assets/images/blog-page/articles/let-const-var/let-const-block-scope.png")} title='Const keyword for the block scope' class={' border'} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12" md="12">
                            <p>
                                Finally! We actually could spot some difference between var and let/const. In contrast to var, the let/const variables declared inside the block scope could not be used outside.
     How you can see on the screenshot,  console shows an error: 'ReferenceError: x is not defined'. The part of the program outside the block scope knows nothing about  let/const variables defined inside.
     But, if a var keyword has been used to define a variable inside a block scope, then we could use this variable outside block scope.
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
                                Hoisting - is an ability of JavaScript to move the declaration of the variable to the top of the code.
                                Let's see.
                            </p>

                        </Col>
                    </Row>

                </Container>
            </section>
            <section className="bg-white p-3 border border-dark mt-3">
                <Container >
                    <h2>Summarizing</h2>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <ListGroup>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Creation</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        var - exists from the very beginning of JavScript.
                                        let and const - has been added recently. They are part of the launch of 'ECMAScript 2015'
        </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Block scope</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        var - doesn't support block scope, and variables defined in block scope could be used anywhere.
                                        let and const - support block scope and varisbles defined inside the block scope couldn't be used outside this block scope;
        </ListGroupItemText>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <ListGroupItemHeading>Hoisting</ListGroupItemHeading>
                                    <ListGroupItemText>
                                        var - support hoisting. If the variable is defined after it was initialized there is no issues.
                                        let and const - doesn't support hoisting. Variable could be innitialized only after/at the same time it was initialized.
        </ListGroupItemText>
                                </ListGroupItem>
                            </ListGroup>
                            <p>
                                I hope it makes sense! Think I have a better understanding to the topic after I placed  all my ducks in a row.</p>
                        </Col>
                    </Row>

                </Container>
            </section>
        </React.Fragment>

    );
}
