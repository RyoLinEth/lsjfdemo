import React from 'react'


const About = (props) => {
    return (
        <div className="wpo-about-area section-padding" id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="wpo-about-exprience-wrap">
                            <div className="wpo-about-exprience">
                                <h2>IDO</h2>
                                <span>參與IDO</span>
                            </div>
                            <div className="client">
                                <h3><span data-count="100">100</span>%</h3>
                                <p>智能合約<br />自動執行</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
                        <div className="wpo-about-content">
                            <div className="wpo-about-title">
                                <h2>綠色積分 - 三代返傭</h2><br />
                            </div>

                            <h5>三代IDO USDT實時返傭</h5>
                            <div className="wpo-about-funfact">
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div className="grid">
                                        <div className="grid-inner">
                                            <h3><span data-count="98">6</span>%</h3>
                                            <p>一代</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="grid-inner">
                                            <h3><span data-count="92">2</span>%</h3>
                                            <p>二代</p>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <div className="grid-inner">
                                            <h3><span data-count="88">1</span>%</h3>
                                            <p>三代</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5>IDO額度 50 / 100 USDT</h5>
                            <div className="wpo-about-funfact">
                                <div className="grid" style={{cursor:"pointer"}}>
                                    <div className="grid-inner">
                                        <h3><span data-count="72">50</span></h3>
                                        <p>USDT</p>
                                    </div>
                                </div>
                                <div className="grid" style={{cursor:"pointer"}}>
                                    <div className="grid-inner">
                                        <h3><span data-count="43">100</span></h3>
                                        <p>USDT</p>
                                    </div>
                                </div>
                                {/* <div className="grid">
                                    <div className="grid-inner">
                                        <h3><span data-count="37">37</span>%</h3>
                                        <p>ReactJS</p>
                                    </div>
                                </div> */}
                            </div>
                            <h5 style={{color:'red'}}>** 點擊上方按鈕直接參加IDO **</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ab-shape">
                <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4267)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="ab-shape-s2">
                <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="line-shape-1">
                <img src="images/about/shape1.png" alt="" />
            </div>
            <div className="line-shape-2">
                <img src="images/about/shape2.png" alt="" />
            </div>
        </div >
    )
}

export default About;