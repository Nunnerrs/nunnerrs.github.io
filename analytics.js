let cookies = localStorage.getItem("cookies");
if (cookies == "true") {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-X1L4RBL935');
}