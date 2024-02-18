import styles from "./css/chooseAService.module.css"
import Title from "../atoms/title"
import ServiceCard from "../molecules/serviceCard"
import { useTranslation } from "next-i18next"

const ChooseAService = ({nextStep}) => {
  const { t } = useTranslation("common")

  const services = [
    {
      titleKey: "haircut",
      price: "20",
      duration: "60 mins",
    },
    {
      titleKey: "beardStyling",
      price: "15",
      duration: "30 mins",
    },
    {
      titleKey: "childHaircut",
      price: "15",  
      duration: "30 mins",
    },
    {
      titleKey: "royalShave",
      price: "20",
      duration: "30 mins",
    },
    {
      titleKey: "hairAndBeard",
      price: "35",
      duration: "60 mins",
    },
    {
      titleKey: "beardCamouflage",
      price: "20",
      duration: "30 mins",
    },
    {
      titleKey: "hairAndBrows",
      price: "30",
      duration: "60 mins",
    },
    {
      titleKey: "hairBeardBrows",
      price: "45",
      duration: "90 mins",
    },
    // Add more services here...
  ]

  const handleServiceSelection = (service) => {
    nextStep({ service: service.titleKey })
  }

  return (
    <div className={styles.servicesBody}>
      <div className={styles.container}>
        <Title margin="0 0 3% 0">{t("choose-service")}</Title>
        {services.map((service, index) => (
          <ServiceCard key={index} service={{ ...service, title: t(`service.${service.titleKey}`) }} onSelect={handleServiceSelection}/>
        ))}
      </div>
    </div>
  )
}

export default ChooseAService 