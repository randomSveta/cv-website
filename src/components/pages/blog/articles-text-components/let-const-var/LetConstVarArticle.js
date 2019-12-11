import React from 'react';
import { Row, Col, Container } from 'reactstrap';

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
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Initial settings</h2>
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
window.onload = function example() {

}
`}
                            </code>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5 mb-2">
                        <Col xs='12'>
                            <p>Initial page</p>
                            <ExpandImage src={initialPage} title={articleLCV.initialPageImg.alt} class={' border'} />
                        </Col>
                    </Row>
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <p>
                                I have opened my  Development Tools Console because I am going to use console.log() function to see the results of my actions.
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
                    <Row className="mt-5 mb-2">
                        <Col xs="12">
                            <h2>Global and local scopes</h2>
                            <p>
                                First of all, the 'let' and 'const' keywords came to the JavaScript with a release of ECMAScript 2015, also known as ES6  (add link) not that long ago.
                            </p>
                            <p>
                                To understand the discrepancy between these 3 keywords we should learn the definition of the 'scope'.
                            </p>
                            <p>
                                'Scope' provides rules which determine the accessibility of the variables. I think you can say that variables may belong to 'scope' or be part of the 'scope' or be inside the 'scope'.
                            </p>
                            <p>
                                There are two types of scopes: 'global scope' and 'local scope'. Moreover, the local scope could be
                            <ul>
                                    <li>function scope</li>
                                    <li>block scope</li>
                                </ul>
                            </p>
                            <h3>local scope</h3>
                            <p>
                                Let's see what the local scope is. When we declare a variable we should find the proper 'scope' to declare and use it.
                                The scope is called 'local' when variables are declared inside the function or the block of code and could be accessed only from the inside.
                            </p>
                            <h4>function scope</h4>
                            <p>
                                The 'function scope' is placed between function curly brackets. If the variable declared inside this scope, it could be only accessed, assigned, used inside this particular function. However, other functions inside could use higher-level functions variables.
                            </p>

                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>

    );
}

