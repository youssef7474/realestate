import { useTranslation } from "react-i18next"
import Dropdown from 'react-bootstrap/Dropdown';
import { MdOutlineGTranslate } from "react-icons/md";

const TranslateButton = () => {
  const [t,i18n]=useTranslation()

    const languageNow = i18n.language

    console.log(languageNow)

    if(languageNow=== 'ar' ){
        document.documentElement.setAttribute('dir', 'rtl');
    }else{
        document.documentElement.setAttribute('dir', 'ltr');
    }

    const changeLanguageAndDirection = (language) => {
        i18n.changeLanguage(language);
    
        if (language === 'ar' ) {
          document.documentElement.setAttribute('dir', 'rtl');
        } else if(language === 'en' ) {
          document.documentElement.setAttribute('dir', 'ltr');
        }
      };

  return (
    <>
    <Dropdown style={{borderColor:"black"}}>
      <Dropdown.Toggle className="bg-transparent"  id="dropdown-basic" style={{display:"flex",alignItems:"center",justifyContent:"center",borderColor:"white",color:"white"}}>
      <MdOutlineGTranslate />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{
            changeLanguageAndDirection('en')
            i18n.changeLanguage('en')
        }} style={{color:"black"}}>
            EN
        </Dropdown.Item>
        <Dropdown.Item onClick={()=>{
            changeLanguageAndDirection('ar')
            i18n.changeLanguage('ar')
        }}
        style={{color:"black"}}
        >
            AR
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}

export default TranslateButton
