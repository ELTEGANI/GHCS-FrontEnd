import 'semantic-ui-css/semantic.min.css';
import Header from '../components/header';
import Footer from '../components/footer';
import buildClient from '../api/build-clinet';


const AppComponent = ({ Component, pageProps ,currentAdmin}) => {
  return (
    <div>
      <Header currentAdmin={currentAdmin}/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  );
};

AppComponent.getInitialProps = async appContext => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/admin/isadminloggedin')
  console.log(data)

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return {
    pageProps,
    ...data
  };
};

export default AppComponent;



