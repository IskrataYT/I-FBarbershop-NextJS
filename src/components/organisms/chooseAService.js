import styles from "./css/chooseAService.module.css";
import Title from "../atoms/title";
import ServiceCard from '../molecules/card';
  

const ChooseAService = () => {

    const services = [
        {
          title: 'Мъжко подстригване',
          price: '20',
          duration: '60 mins',
        },
        {
          title: 'Оформяне на брада',
          price: '15',
          duration: '30 mins',
        },
        {
          title: 'Детско подстригване (до 9г.)',
          price: '15',
          duration: '30 mins',
        },
        {
          title: 'Кралско бръснене',
          price: '20',
          duration: '30 mins',
        },
        {
          title: 'Коса и брада',
          price: '35',
          duration: '60 mins',
        },
        {
          title: 'Камуфлаж на брада',
          price: '20',
          duration: '30 mins',
        },
        {
          title: 'Коса и вежди',
          price: '30',
          duration: '60 mins',
        },
        {
          title: 'Коса, брада и вежди',
          price: '45',
          duration: '90 mins',
        },
        // Add more services here...
      ];

    return(
        <div className={styles.servicesBody}>
          <div className={styles.container}>
          <Title margin="0 0 3% 0">Chose a service:</Title>
            {services.map((service) => (
                <ServiceCard service={service} />
              ))}
          </div>
        </div>

    )
}

export default ChooseAService; 