import React, { useState } from "react";
import Card from "@mui/material/Card";
//import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Banner from "../../assets/banner.png";


import "./Home.css";
function Home() {
  const [selectedCity, setSelectedCity] = useState('');
  const [Button, setButton] = useState(true);
  const [pick,setPick]=useState('')
  const [drop,setDrop] = useState('')
  const [contact,setContact] =useState('')
  const [date,setDate] = useState('')

  const cities = ["Delhi","Kolkata","Mumbai","Pathna"];
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

 const heandelFromSubmit = () => {
  console.log(pick)
  console.log(drop)
  console.log(contact)
  console.log(date)

  setPick('')
  setDrop('')
  setContact('')
  setDate('')
 }


  //console.log(Button)
  
  return (
    <main id="container">
      <section id="section-1" className="section">
        <Card sx={{ maxWidth: 850, margin: 1 }}>
          <CardMedia
            sx={{ height: "auto" }}
            image={Banner}
            title="green iguana"
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#292355",
                  fontWeight: "bold",
                }}
                variant="h5"
                component="div"
              >
                BOOK YOUR SERVICE NOW
              </Typography>
              <Typography
                sx={{
                  color: "#646464",
                  fontWeight: "bold",
                  fontSize: 45,
                  marginBottom: 5,
                }}
                variant="h4"
                component="div"
              >
                Fine art service
              </Typography>
              <Typography
                sx={{
                  color: "#292355",
                  fontWeight: "bold",
                  fontSize: 45,
                  marginBottom: 1,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
                variant="h3"
                component="div"
              >
                ON TIME DELIEVERYS
              </Typography>
              <Typography
                sx={{
                  color: "#292355",
                  fontWeight: "bold",
                  fontSize: 45,
                  marginBottom: 1,
                }}
                variant="h3"
                component="div"
              >
                ECONIMICAL PRICE
              </Typography>
              <Typography
                sx={{
                  color: "#292355",
                  fontWeight: "bold",
                  fontSize: 45,
                  marginBottom: 1,
                }}
                variant="h3"
                component="div"
              >
                ZERO DAMAGE POLICY
              </Typography>
            </CardContent>
          </CardMedia>
        </Card>
        <div id="card">
          <Card
            sx={{
              width: 400,
              textAlign: "center",
              backgroundColor: "#D9D9D9",
              borderRadius: 1,
              padding: 10,
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#292355",
                  fontWeight: "bold",
                  fontSize: 25,
                  marginBottom: 5,
                }}
                variant="h5"
                component="div"
              >
                Transportation
              </Typography>

              <ul>
                <li style={{ textAlign: "center", color: "#292355" }}>
                  Transportation by road should be in fully closed hard walled
                  secured trucks, equipped with a mobile phone and an internal
                  strapping system.  A supply of clean PU Foam, bubble wrap and
                  acid free tissue should be carried.
                </li>
                <li style={{ textAlign: "center", color: "#292355" }}>
                  The cargo area of the truck should be clean and free of any
                  loose objects/particles.
                </li>

                <li style={{ textAlign: "center", color: "#292355" }}>
                  Works should be crated for transportation, as per Museum
                  specifications.
                </li>

                <li style={{ textAlign: "center", color: "#292355" }}>
                  Crates should be strapped or wedged so that they cannot move
                  about when in transit.
                </li>

                <li style={{ textAlign: "center", color: "#292355" }}>
                  There should be a minimum of two UAPL staff  with the works in
                  transit, at all times, other than when the shipments are on
                  board vessel or on the aircraft or accompanied by a courier
                  designated by the lender/Museum/Art Gallery/Organiser
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            sx={{
              width: 400,
              textAlign: "center",
              backgroundColor: "#D9D9D9",
              borderRadius: 1,
              padding: 10,
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "#292355",
                  fontWeight: "bold",
                  fontSize: 25,
                  marginBottom: 5,
                }}
                variant="h5"
                component="div"
              >
                Airport Supervision
              </Typography>

              <ul>
                <li style={{ textAlign: "center", color: "#292355" }}>
                  To handle successful fine art consignment is to have maximum
                  control on the consignment starting from packing, handling,
                  transportation and handover to airlines.
                </li>
                <li style={{ textAlign: "center", color: "#292355" }}>
                  The key is to go one step more and oversee the handling at
                  airport, witnessing the palletizing / de-palletizing of the
                  consignment
                </li>

                <li style={{ textAlign: "center", color: "#292355" }}>
                  Permissions for overseeing the handling at airport can be
                  obtained at the time of filing the documents at Customs
                  (depending on the security situation at each city).
                  Professional Art handlers for examination & x-ray handling of
                  crates.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="section-2" className="section">
      <div style={{marginLeft: 50,}}>
      <select id="city-select" className="option" value={selectedCity} onChange={handleCityChange}>
        {cities.map((city, index) => (
          <option key={index} value={city} >
            {city}
          </option>
        ))}
      </select>
    </div>

    <div id="from-container">
      <div className="button-container">
      <button
              onClick={() => setButton(!Button)}
              className={Button ? "button-on" : "button-off"}
            >
              Domestic
            </button>
            <button
              onClick={() => setButton(!Button)}
              className={Button ? "button-off" : "button-on"}
            >
              International
            </button>
      </div>
     {Button? <div style={{marginLeft: 60,marginTop: 60,width: '100%', display: 'flex', flexDirection: 'column'}}>
    <label  className="lable">Pick up location</label><br/>
    <input value={pick} onChange={(e) => setPick(e.target.value)}className="input" type="text"/><br/>
    <label  className="lable">Drop up location</label><br/>
    <input value={drop} onChange={(e) => setDrop(e.target.value)} className="input" type="text"/><br/>
    <label  className="lable">Contact</label><br/>
    <input value={contact} onChange={(e) => setContact(e.target.value)} className="input-2" type="text"/><br/>
    <label  className="lable">Shipping Date</label><br/>
    <input value={date} onChange={(e) => setDate(e.target.value)} className="input-2" type="date" /><br/>
    <button onClick={heandelFromSubmit} className="btn">Get estimate</button>
  </div>: null}
    </div>
      </section>
    </main>
  );
}

export default Home;
