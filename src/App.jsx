function App() {
    return (
        <>
            <div>
                <form id="signupForm" class="signupForm">
                    <h1>Stay updated!</h1>
                    <p>
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>
                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                    <label>Email address email@company.com</label>{" "}
                    <input id="email" />
                    <button>Subscribe to monthly newsletter</button>
                </form>
            </div>
            <img src="./assets/images/illustration-sign-up-desktop.svg" />
            <div>
                Thanks for subscribing! A confirmation email has been sent to
                ash@loremcompany.com. Please open it and click the button inside
                to confirm your subscription. Dismiss message
            </div>
        </>
    );
}

export default App;
