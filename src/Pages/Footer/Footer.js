import React from 'react';

const Footer = () => {
    return (
        <div className="mt-5 p-2">
            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></a>


                        <a className="btn btn-outline-light  m-1" href="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></a>
                    </section>

                </div>



                <div className="text-center p-3" style={{backgroundColor:" rgba(0, 0, 0, 0.2)"}}>
                    © 2021 Copyright:
                    <a className="text-white" href="#">MunnaBabu</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;