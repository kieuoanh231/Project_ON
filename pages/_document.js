import Document, {Html, Head, Main, NextScript} from 'next/document'

class Mydocument extends Document{
    render(){
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <link rel="stylesheet" href="/bootstrap.min.css"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/keen-slider@latest/keen-slider.min.css" />
                    {/* <link rel="stylesheet" href="/keen-slider.min.css"/> */}
                    <link rel="stylesheet" href="/css/slider.css"/>
                    <link rel="stylesheet" href="/css/footer.css"/>
                    <link rel="stylesheet" href="/css/product.css"/>
                    {/* <link rel="stylesheet" href="/test.css"/> */}
                    <link rel="stylesheet" href="/reponsive/max991.css"/>
                    <link rel="stylesheet" href="/reponsive/max1440.css"/>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default Mydocument