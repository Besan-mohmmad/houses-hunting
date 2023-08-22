
import React ,{useState,useEffect} from 'react'; 
import Hero from '../../components/Hero/index ';
import CardContainer from '../../components/CardContainer'


const Landing = ()=> {

    const [data, setData] = useState([]);
    useEffect(() => {
        // api
        fetch('https://my-json-server.typicode.com/Besan-mohmmad/mock-api/house')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);

    return <>
    {/* {console.log(data, 'houses')} */}
        <CardContainer house={data}/>
    </>

  return<>
  <Hero />
  </>

  
}

export default Landing