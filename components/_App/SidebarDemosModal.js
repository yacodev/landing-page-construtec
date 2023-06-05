import React, { Component } from 'react'

export default class SidebarDemosModal extends Component {
    state = {
        modal: false
    };
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }
    render() {
        return (
            <>
                <div className={`demos-side-content ${this.props.active}`}>
                    <div className="modal-header">
                        <h2>View Demo</h2>
                        <button type="button" className="close" onClick={this.closeModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-body">
                        <ul>
                            <li>
                                <div className="demo-item">
                                    <a href="/app-landing">
                                        <span>App Landing</span>
                                        <img src="/images/demo/app-landing.jpg" alt="Demos" />
                                    </a>
                                </div>
                                <div className="lang-sidebar">
                                    <a href="/app-landing" title="LRT Demo">EN</a>
                                    <a href="/ar/app-landing" title="RTL Demo">AR</a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/saas-landing">
                                        <span>SaaS Landing</span>
                                        <img src="/images/demo/saas-landing.jpg" alt="Demos" />
                                    </a>
                                </div>
                                <div className="lang-sidebar">
                                    <a href="/saas-landing" title="LRT Demo">EN</a>
                                    <a href="/ar/saas-landing" title="RTL Demo">AR</a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/seo-marketing">
                                        <span>SEO Marketing</span>
                                        <img src="/images/demo/seo-marketing.jpg" alt="Demos" />
                                    </a>
                                </div>
                                <div className="lang-sidebar">
                                    <a href="/seo-marketing" title="LRT Demo">EN</a>
                                    <a href="/ar/seo-marketing" title="RTL Demo">AR</a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/startup-agency">
                                        <span>Startup Agency</span>
                                        <img src="/images/demo/startup-agency.jpg" alt="Demos" />
                                    </a>
                                </div>
                                <div className="lang-sidebar">
                                    <a href="/startup-agency" title="LRT Demo">EN</a>
                                    <a href="/ar/startup-agency" title="RTL Demo">AR</a>
                                </div>
                            </li>
                            <li>
                                <div className="demo-item">
                                    <a href="/personal-portfolio">
                                        <span>Personal Portfolio</span>
                                        <img src="/images/demo/personal-portfolio.jpg" alt="Demos" />
                                    </a>
                                </div>
                                <div className="lang-sidebar">
                                    <a href="/personal-portfolio" title="LRT Demo">EN</a>
                                    <a href="/ar/personal-portfolio" title="RTL Demo">AR</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
