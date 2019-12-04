import Header from './Header'
import ShowMovieList from './ShowMovieList'
import Midcontent from './midcontent'
import Index_CSS from '../components/index_css'
import Footer from './footer'


const Index = () => (
    <div className="Layout">
      <Index_CSS />
      <Header />
      <ShowMovieList />
      <Midcontent />
      <Footer />
    </div>
)

export default Index
