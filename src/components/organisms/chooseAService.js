import styles from "./css/chooseAService.module.css"
import Title from "../atoms/title"
import ServiceCard from "../molecules/serviceCard"

const ChooseAService = ({nextStep}) => {


  const services = [
    {
      title: "Мъжко подстригване",
      price: "20",
      duration: "60 mins",
    },
    {
      title: "Оформяне на брада",
      price: "15",
      duration: "30 mins",
    },
    {
      title: "Детско подстригване (до 9г.)",
      price: "15",  
      duration: "30 mins",
    },
    {
      title: "Кралско бръснене",
      price: "20",
      duration: "30 mins",
    },
    {
      title: "Коса и брада",
      price: "35",
      duration: "60 mins",
    },
    {
      title: "Камуфлаж на брада",
      price: "20",
      duration: "30 mins",
    },
    {
      title: "Коса и вежди",
      price: "30",
      duration: "60 mins",
    },
    {
      title: "Коса, брада и вежди",
      price: "45",
      duration: "90 mins",
    },
    // Add more services here...
  ]

  const handleServiceSelection = (service) => {
    nextStep({ service: service.title })
  }

  return (
    <div className={styles.servicesBody}>
      <div className={styles.container}>
        <Title margin="0 0 3% 0">Choose a service:</Title>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} onSelect={handleServiceSelection}/>
        ))}
      </div>
    </div>
  )
}

export default ChooseAService 