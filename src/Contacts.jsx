import React from 'react';
import './Contacts.css';
import './All.css';
const Contact = () => {
    return (
        <>
        <div id="contact" className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div id="card" className="card shadow-lg rounded" style={{ maxWidth: '400px' }}>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Contact Us</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="profession" className="form-label">Profession</label>
                                    <input type="text" className="form-control" id="profession" placeholder="Enter your profession" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="What do you want to talk about?" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" id="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5 pt-5">
                    <div className="quote text-center">
                        <h2><em>"Don't believe everything you read on the Internet just because there's a picture with a quote next to it"</em></h2>
                        <h4><em>- Abraham Lincoln</em></h4>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;
