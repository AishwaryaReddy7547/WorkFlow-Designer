import React from "react";

import "../css/contact.css"
import Header from "../components/Header"

export default function Contact() {
    return (
        <>
            <Header />
            <div class="about-section">
                <h1>About </h1>
                <p>I ama a React and Web Developer. I love Coding and Development</p>
                <p>I am studying in 3rd Year B.Tech in Computer Science and Engineering from Jawaharlal Nehru Technological University, Anantapur.</p>
            </div>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <div class="container">
                            <h2>Guntakanti Aishwarya Reddy & Devangam Sajja Rajesh</h2>
                            <p class="title">Student Developers</p>
                            <p></p>
                            <p>aishureddy535@gmail.com</p>
                            <br />
                            <p>dsrajesh71@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
