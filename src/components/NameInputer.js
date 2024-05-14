import coffee from '../images/coffee.png'

import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

import './components.css'
import { registerAsDrinker } from '../graphQL/queries';

const NameInputer = ({handler}) => {
    const [name, setName] = useState("");

    const registerDrinker = async() => {
        try{
            const response = await API.graphql(
              graphqlOperation(registerAsDrinker,{
                name: name
              })
            )

            console.log(response)
            if(response.data.registerAsDrinker.resultCode === "200") {
             handler()
            }
          } catch(e){
            console.log("登録クエリ送信に失敗しました")
          }
    }

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <p className='deadline'>入力は当日12時まで!</p>
            <Grid container>
              <Grid item xs={7}>
                <p className='disclaimer'>我々はSDGs達成のため、フードロス削減を目指します。</p>
                <p className='disclaimer'>コーヒーを飲む方は名前を入力して、コーヒーをタップ！</p>
                <TextField id="outlined-basic" onChange={handleChange} value={name} label="おなまえ" required={true} color="success" size='medium' fullWidth  sx={{m:1}}/>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={4}>
                  <button onClick={registerDrinker} style={{padding:'0', border:'none', background:'none'}}>
                      <img className='image-button' alt='コーヒー' src={coffee} style={{ width: '100%', height:'100%'}}></img>
                  </button>
              </Grid>
            </Grid>
        </div>
      );
}

export default NameInputer;