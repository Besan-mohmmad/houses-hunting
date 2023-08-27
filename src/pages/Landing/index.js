
import React,{useState, useEffect}  from 'react'; 
import CardContainer from '../../components/CardContainer';
import Card from '../../components/hero/index ';

const Landing = ()=> {

    const [data, setData] = useState([]);
    useEffect(() => {
        // api
        fetch('https://my-json-server.typicode.com/Besan-mohmmad/api/houses')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('ERROR', error));
    }, []);

    return <>
     
 <Card/>

   {console.log(data, 'houses')}
   <h3 style={{
     color:'#000839',
     margin:'50px',
     fontSize: '25px',
   }}>Best Collection On Sale</h3>
        <CardContainer houses={data}/>
        
           
    </> 
}

export default Landing