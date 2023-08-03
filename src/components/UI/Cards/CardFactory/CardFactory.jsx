import React from "react";

import SmallCard from "../SmallCard/SmallCard";
import LargeCard from "../LargeCard/LargeCard";

function CardFactory() {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <SmallCard title="70K +" description="Jobs Available" />
                <SmallCard title="30000" description="Candidates Hired" />
                <SmallCard title="100%" description="Client Satisfaction" />
            </div>

            <div className="row d-flex justify-content-center mt-3">
                <LargeCard
                    title="Alpha beta gamma"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Nec feugiat nisl pretium fusce id velit"
                    image="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c025e88e6c753fe68ba4f_always-know.png"
                    alt="Alpha beta gamma"
                    background="#f1f9f4"
                />
                <LargeCard
                    title="Delta epsilon zeta"
                    description="Imperdiet massa tincidunt nunc pulvinar. Arcu odio ut sem nulla pharetra. Felis donec et odio pellentesque. Sed euismod nisi porta lorem mollis aliquam. Integer malesuada nunc vel risus. A lacus vestibulum sed arcu non odio euismod lacinia."
                    image="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c025f8bcab06271d03c42_looks-great.png"
                    alt="Delta epsilon zeta"
                    background="#fff2fc"
                />
                <LargeCard
                    title="Iota kappa"
                    description="Purus semper eget duis at tellus. Ante metus dictum at tempor. Vulputate dignissim suspendisse in est ante in nibh. Dignissim convallis aenean et tortor at. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue."
                    image="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/630ce2df1763f1788c0b79b1_Frame%2029110-min.png"
                    alt="Iota kappa"
                    background="#eaf6ff"
                />
                <LargeCard
                    title="Lambda sigma omega"
                    description="Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Netus et malesuada fames ac turpis egestas. Ultrices in iaculis nunc sed augue lacus. Cursus risus at ultrices mi tempus imperdiet."
                    image="https://global-uploads.webflow.com/605ad29901132bc543e01d9b/645c025e37f19b035c4836c3_portal-on-website.png"
                    alt="Lambda sigma omega"
                    background="#fde9dd"
                />
            </div>
        </>
    );
}

export default CardFactory;
