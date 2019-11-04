import React from 'react';
import { Row, Col } from 'reactstrap';

export default function About(props) {

    return (
        <Row className="m-0 p-0 justify-content-center align-items-center">
            <Col xs="12" sm="4" className="m-0 p-0">
                <p> Hi! My name is Sveta and this is my story.</p>
                <p>
                    I love web development and want to do it for a job. How did I get there?
                    It all started as a hobby. Doing various online courses and code katas I eventually realised that I would like to do it full time.
                    So, I started looking at job openings and see what gaps did I have in my knowledge.
                    Luckily, having more than 5 years of experience as a QA Engineer I have quite a lot of experience with the software development life cycle, agile practices and working in a team.
                    Therefore I focused on my web development skills and now I am feeling much more confident working with HTML, JavaScript, CSS, Bootstrap, React, Git, Nodejs and even MongoDB.
                    </p>

            </Col>
            <Col xs="12" sm="4" className="m-0 p-0">
                <p>Thanks to my previous job, I deeply understand what quality and customer focus means. In retrospective, I think I chose that job because I like solving puzzles, getting to the bottom of the bug and understanding its root cause. What I didn't know is that programming puzzles are much more fun to solve.
                    To be fair, I never thought that I would enjoy web development so much and if someone told me that, I would probably say "me? yeah, right...".
                    But here I am now, one step from starting my successful career in web development.</p>
            </Col>
            <Col xs="12" sm="4" className="m-0 p-0" >
                <p> One the social side, I like travelling and socks with funny patterns.</p>
            </Col>
        </Row>
    );
}