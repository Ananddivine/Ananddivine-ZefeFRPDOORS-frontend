import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Location.css';

const Location = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [radius, setRadius] = useState(40); // Initial search radius
  const [nearbyShops, setNearbyShops] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Preload shop locations
  const shops = [

    {
      id: 1,    
      name: 'Shop 1',
      Lat: 10.7641593,
      Lng: 76.6616528,
      contact: '9846994787',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2852.950820296175!2d76.65912407326375!3d10.763918259427935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ1JzUwLjEiTiA3NsKwMzknNDIuMSJF!5e1!3m2!1sen!2sin!4v1723569343771!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 2,    
      name: 'Shop 2',
      Lat: 11.8583,
      Lng: 75.6114,
      contact: '9447945985',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2852.950820296175!2d76.65912407326375!3d10.763918259427935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ1JzUwLjEiTiA3NsKwMzknNDIuMSJF!5e1!3m2!1sen!2sin!4v1723569343771!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 3,    
      name: 'Shop 3',
      Lat: 10.6967302,
      Lng: 76.657889,
      contact: '8592885246',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.487965335771!2d76.65602287326273!3d10.696795260661107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86d4bffffffff%3A0xd96a6a2e5b79ec01!2sKrishna%20roof%20tiles%20and%20hardwares!5e0!3m2!1sen!2sin!4v1723570147795!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 4,    
      name: 'Shop 4',
      Lat: 10.8358812,
      Lng: 76.5727608,
      contact: '9645040387',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.4615074383687!2d76.57246043947099!3d10.83601874678492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba871fdb5035e01%3A0x17908569e65715f0!2sEEE%20PEE%20PLY!5e0!3m2!1sen!2sin!4v1723570509088!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 5,    
      name: 'Shop 5',
      Lat: 10.801476779054973, 
      Lng: 76.55329844134658,
      contact: '9048442199',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3919.1391924528866!2d76.55072407504224!3d10.800649589349597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ4JzAyLjMiTiA3NsKwMzMnMTEuOSJF!5e0!3m2!1sen!2sin!4v1724179308285!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 6,    
      name: 'Shop 6',
      Lat: 11.010502294423567, 
      Lng:  76.95269066961504,
      contact: '9443006688',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13171.894124817622!2d76.93818520153896!3d11.036559605861006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591cd4e6d6d9%3A0x2432015d05e89e59!2sSir%20Shanmugam%20Rd%2C%20R.S.%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu%20641002!5e0!3m2!1sen!2sin!4v1724179542663!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 7,    
      name: 'Shop 7',
      Lat: 10.530483403014365, 
      Lng: 76.21144233514445,
      contact: '9387104040',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.621623117812!2d76.2088727732601!3d10.530438563686465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee5aeb8e3e7f%3A0x4f7f075934785f0d!2sThaikattil%20Aluminium!5e0!3m2!1sen!2sin!4v1724179647042!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 8,    
      name: 'Shop 8',
      Lat: 10.507360853124954, 
      Lng: 76.0596789711649,
      contact: '7510188444',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.9177478936554!2d76.05968969999999!3d10.507144600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba793c4701ccd19%3A0x12651a10e9e69581!2sAsian%20Aluminium%20%26%20PVC%20Centre!5e0!3m2!1sen!2sin!4v1724179752274!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 9,    
      name: 'Shop 9',
      Lat: 10.591656002584683, 
      Lng: 76.041850758251,
      contact: '9447878516',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.8442309994366!2d76.03942607326104!3d10.59134926258387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba794899fb7fd75%3A0xff60640ac0f60a4a!2sWoodline%20Aluminium%20%26%20PVC%20Doors!5e0!3m2!1sen!2sin!4v1724179842065!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 10,    
      name: 'Shop 10',
      Lat: 10.692400087535196, 
      Lng: 76.35139159028225,
      contact: '8281732871',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3920.5392455285732!2d76.34924582326263!3d10.692827060733803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCHELAKKARA%2C%20MEPPADAM%20CENTRE%20THRISSUR!5e0!3m2!1sen!2sin!4v1724179958176!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 11,    
      name: 'Shop ',
      Lat:9.559832367278752,  
      Lng: 76.3440548531854,
      contact: '9249973635',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.413061462368!2d76.34138337324593!3d9.559615480461158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0886bf1afeeba9%3A0x3be75a6f2965e3bf!2sShobha%20Glass%20House!5e0!3m2!1sen!2sin!4v1724180244652!5m2!1sen!2sin"></iframe>'
    },

    {
      id: 12,    
      name: 'Shop ',
      Lat: 9.253371266630356, 
      Lng: 76.54643250773171, 
      contact: '9544821941',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89108.38272604524!2d76.48331339305739!3d9.237916294556705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061ee020787e0d%3A0xc496b728b31ffb0f!2sMavelikara%2C%20Kerala!5e0!3m2!1sen!2sin!4v1724180447976!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 13,    
      name: 'Shop ',
      Lat: 9.174859798175392,
      Lng:  76.50133382498261, 
      contact: '9947823065',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2785.1270402169503!2d76.4999075757568!3d9.175709841130121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3b061dd95da77f69%3A0xf8b340bda969e155!2sKareelakulangara%2C%20Kerala!3m2!1d9.193439699999999!2d76.4852265!4m5!1s0x3b061c549dfb32f3%3A0x3cc5f9f4d4a5b63d!2sKAYAMKULAM%20ALAPPUZHA!3m2!1d9.174842199999999!2d76.5013352!5e0!3m2!1sen!2sin!4v1724180539591!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 14,    
      name: 'Shop ',
      Lat: 9.245448843156764, 
      Lng: 76.54025135133553, 
      contact: '9447103827',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.9909661725796!2d76.53765497324174!3d9.2451046855724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061f29cda44dc1%3A0x19270567e3823012!2sSree%20Buddha%20Statue!5e0!3m2!1sen!2sin!4v1724180588597!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 15,    
      name: 'Shop ',
      Lat: 9.479173404079187, 
      Lng: 76.57456965197366, 
      contact: '9744642403',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26474.02401843256!2d76.56446519232281!3d9.475008810064875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRKR%20CHANGANASSERI%20KTYM!5e0!3m2!1sen!2sin!4v1724180712680!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 16,    
      name: 'Shop ',
      Lat: 9.273697371954697, 
      Lng: 76.66599678017097,
      contact: '9744292990',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.6738624248255!2d76.6633896732421!3d9.273406185118969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0617d4156f6e0b%3A0xc2c33c7dee828d77!2sSadev%20aluminium!5e0!3m2!1sen!2sin!4v1724180775174!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 17,    
      name: 'Shop ',
      Lat: 11.094037084719778,
      Lng:  76.22390951412584, 
      contact: '9847004568',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692.1273816081471!2d76.22348088071489!3d11.093712311133164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba633cb43e06dd1%3A0x7aba2cf3be600076!2sPandikkad%2C%20Kerala%20676521!5e0!3m2!1sen!2sin!4v1724180886847!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 18,    
      name: 'Shop ',
      Lat: 11.233683997665677, 
      Lng: 76.05112772457309, 
      contact: '9947236745',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15653.633065663666!2d76.04048472015563!3d11.231347820069521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sEDAVANNA%20ARIKKODE%20MPM%20HYNESS%20INTERIOR!5e0!3m2!1sen!2sin!4v1724180997701!5m2!1sen!2sin"></iframe>'
    },


    {
      id: 19,    
      name: 'Shop ',
      Lat: 11.118872314768645, 
      Lng: 76.11273550912318, 
      contact: '9605032855',
      iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2768.2771385085744!2d76.11262929907446!3d11.118213517444191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPANDIKKAD%20ROAD%20%2C%20MANJERI%20MPM%20FMS%20MPM!5e0!3m2!1sen!2sin!4v1724181149082!5m2!1sen!2sin"></iframe>'
    }


  


   
  ];

  useEffect(() => {
    // Ask for location permission and get the user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(`User location: Lat: ${latitude}, Lng: ${longitude}`);
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error('Error obtaining location:', error);
          setError('Location permission denied. Please allow location access.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Calculate distance between user and each shop
      const nearby = shops.filter((shop) => {
        const distance = getDistance(userLocation.lat, userLocation.lng, shop.lat, shop.lng);
        console.log(`Distance to ${shop.name}: ${distance} km`);
        return distance <= radius; // Consider shops within the specified radius
      });
      setNearbyShops(nearby);
      console.log(`Shops within ${radius} km:`, nearby);
    }
    // Disable exhaustive-deps warning for shops array as it is static
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation, radius]);

  // Function to calculate distance between two coordinates using Haversine formula
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  return (
    <div className='location'>
      {error && <p>{error}</p>}
      {!error && !userLocation && <p>Loading location...</p>}
      {!error && userLocation && nearbyShops.length === 0 && (
        <div className='radious-top'>
          <span>No nearby shops found within {radius} km  </span>
          {radius < 100 && (
            <div className='radious'>
              {radius === 40 && (
                <button onClick={() => setRadius(60)}>Search within 60 km</button>
              )}
              {radius === 60 && (
                <button onClick={() => setRadius(80)}>Search within 80 km</button>
              )}
              {radius === 80 && (
                <button onClick={() => setRadius(100)}>Search within 100 km</button>
              )}
            </div>
          )}
          {radius === 100 && (
            <button onClick={() => navigate('/contact')}>Contact Us</button>
          )}
        </div>
      )}
      {!error && userLocation && nearbyShops.length > 0 && (
        <div>
          <h2>Nearby Shops</h2>
          <div className="shops-container">
            {nearbyShops.map((shop) => (
              <div key={shop.id} className="shop-item">
                <h3>{shop.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: shop.iframe }} />
                <p>Contact: {shop.contact}</p>
                {shop.iframe.includes('maps.googleapis.com') && (
                  <p style={{ color: 'red' }}>Note: If the map is not loading, please disable any ad blockers.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
