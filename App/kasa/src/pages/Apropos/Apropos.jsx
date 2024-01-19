
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import img1 from '../../assets/IMG2.png';


function Apropos(){
    const content = [
        <div>
           <Header />
           <Banner  img1={img1}/>
           <Footer />
         </div>
    ]
    return content
}

export default Apropos

