import axios from 'axios';
import { useEffect, useState } from 'react';

export const Weather =  () => {
    const [summary, setSummary] = useState(null)

    const run = async () => {

        const options = {
            method: 'GET',
            url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
            params: {
                
              lat: '19.0400289',
              lon: '-98.2062727',
              timezone: 'auto',
              language: 'es',
              units: 'auto'
            },
            headers: {
              'X-RapidAPI-Key': 'f589d8a220mshbd83c12860b020bp1b6ccejsndba4ab24e96a',
              'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setSummary(response?.data?.current?.summary);
              console.log(response?.data);
          } catch (error) {
              console.error(error);
          }

    }

    useEffect(() => {
        run();
    
    }, [])
    return (
        <div className=" p-4 flex flex-col flex-2 gap-2 items-center justify-between rounded-2xl bg-white">
            <span className='w-full text-left text-sm'>Puebla, México</span>
            {
                summary ? <h2 className="w-full text-2xl text-left text-gray-700">{summary}</h2> : <h2 className="w-full text-2xl text-gray-700 text-center">Loading...</h2>
            }
        </div>
    )
}
