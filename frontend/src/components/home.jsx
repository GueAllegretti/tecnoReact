import BannerHome from './bannerHome'
import Categorie from './categorie'
import Personalizzazione from './personalizzazione'
import BrandCarosello from './brandCarosello'
import OffertaMese from './offertaMese'
import OfferteLuceGas from './offerteLuceGas'
import Servizi from './servizi'
import BannerUsato from './bannerUsato'
import Social from './social'

const Home = () => (
  <div className="bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-200">
    <BannerHome />
    <OffertaMese />
    <Categorie />
    <Personalizzazione />
    <BrandCarosello />
    <OfferteLuceGas />
    <Servizi />
    <BannerUsato />
    <Social />
  </div>
)

export default Home
