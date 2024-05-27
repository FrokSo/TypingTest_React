interface FooterProp {
    footerInput: string
}

function Footer({ footerInput }: FooterProp) {
    return (
        <footer>
            <div>
                <p></p>
            </div>
            <p>&copy;{footerInput}</p>
        </footer>
    );
}

export default Footer;