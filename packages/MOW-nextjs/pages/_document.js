import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/> 
            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
        <body className="font-quicksand text-gray-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument