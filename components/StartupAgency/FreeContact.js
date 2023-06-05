import React from 'react';
import Link from 'next/link';

const FreeContact = () => {
    return (
        <div className="free-contact-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>We Are Supporting All Kind Of Online Services, Feel Free To Contact</h2>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account.</p>

                    <div className="free-contact-btn">
                        <Link href="#">
                            <a className="default-btn">Contact Us</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FreeContact;