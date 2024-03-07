import { useTranslation } from "react-i18next"
import style from "./LandingSection.module.css"
const LandingSection = () => {
    const [t]=useTranslation()
  return (
    <div className={style.LandingSection}>
        <div className="flex items-center justify-center h-full">
            <div style={{color:"white",textAlign:"center"}}>
                <p>
                    {t('HeroSection.TheBestWay')}
                </p>
                <h1>
                    {t('HeroSection.FindYourDreamHome')}
                </h1>
                <p>
                    {t('HeroSection.Wehavemorethan')}
                </p>
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default LandingSection
