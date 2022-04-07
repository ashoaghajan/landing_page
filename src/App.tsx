import assets from './assets';
import { Download, Features, SectionWrapper } from './components'
import styles from './styles/Global';

function App() {
  return (
    <>
      <SectionWrapper 
          title='Your own store of Nifty NFTs. Start Selling and Growing'
          description='Buy store, collect NFTs, exchange & ern crypto. 
            Join 25+ million people using ProNef marketplace.'
          showBtn
          mockupImg={assets.homeHero}  
          banner='banner'
      />
      <SectionWrapper 
          title='Smart User Interface Marketplace'
          description='Experience a buttery UI of ProNef NFT Marketplace.
            Smooth constant colors of a fluent UI design.'
          mockupImg={assets.homeCards}  
          reverse
      />
      <Features />
      <SectionWrapper 
          title='Deployment'
          description="ProNef is build using Expo which runs natively on all users devices.
            You can easily get your app into people's hands."
          mockupImg={assets.feature}  
          reverse
      />
      <SectionWrapper 
          title='Creative way to showcase the store'
          description='The app contains two screens. The first screen lists all NFTs
            while the second one shows the details of the specific NFT.'
          mockupImg={assets.mockup}  
          banner='banner02'
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made by {' '} <span className='bold'>Ashot Aghajanyan</span>
        </p>
      </div>
    </>
  );
}

export default App;
