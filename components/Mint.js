import React from 'react';
import { Accordion, Item, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Mint() {
    return (

        <>
            <div className="main">

                <div className="nav-bar">

                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Poker Protocol</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <div className="links-div">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Mint</Nav.Link>
                                    </div>
                                    <div className="header-connect"><button>Connect Wallet</button></div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                </div>

                <div className="gradient"></div>

                <div className="main-title">Stake ETH</div>
                <div className="sub-title">Stack ETH for 50 days and recieve stETH</div>
                <div className="card-main">
                    <div className="input-group-inline">
                        <span>
                            <img
                                src="/eth.png"
                                className="eth"
                                alt="logo"
                            />
                        </span>
                        <input placeholder='Amount' type="numbers" />
                        <button>Max</button>
                    </div>

                    <div className="button-group">
                        <button>Connect Wallet</button>
                    </div>

                    <div className="info-group">
                        <div className="sub-info">
                            <div className="info">After 50 Days</div>
                            <div>200</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">You will recieve</div>
                            <div>00ETH</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Exchange rate</div>
                            <div>1ETH = 1stETH</div>
                        </div>
                    </div>
                </div>

                <div className="title">Statics</div>

                <div className="statics">
                    <div className="info-group">
                        <div className="sub-info">
                            <div className="info">Annual percentage rate</div>
                            <div>200</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Total staked with Poker</div>
                            <div>00ETH</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Stakers</div>
                            <div>1ETH = 1stETH</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">stETH market cap</div>
                            <div>1ETH = 1stETH</div>
                        </div>
                    </div>
                </div>

                <div className="title">FAQs</div>
                <div className="accordion-div">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>
            </div>
        </>
    );
}