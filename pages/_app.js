import 'semantic-ui-css/semantic.min.css';
import Header from '../components/header';
import Footer from '../components/footer';

export default ({Component,pageProps}) =>{
    return (
        <div>
            <Header/>
          <Component  {...pageProps}/>;
          <Footer/>
        </div>
    );
    
}


