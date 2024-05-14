import Header from './components/Header'
import Board from './components/Board';
import NameInputer from './components/NameInputer';

import { Grid } from '@mui/material';

import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { getDrinkers } from './graphQL/queries';

import './App.css';

const App = () => {
  // const [renderCount, setRenderCount] = useState(0)
  const [drinkers, setDrinkers] = useState([])

  useEffect(() => {
    drinkersGet()
  },[])

  const drinkersGet = async() => {
    try{
      const response = await API.graphql(
        graphqlOperation(getDrinkers)
      )
      setDrinkers(response.data.getDrinkers)
    } catch(e){
      console.log("クエリ送信に失敗しました")
    }
  }


  return (
    <div className="background-image">
      <div className='header'>
        <Header></Header>
      </div>
      <Grid container>
        <Grid item xs={0.5}>
        </Grid>
        <Grid item xs={4}>
          <Board drinkers={drinkers}></Board>
        </Grid>
        <Grid item xs={7.5}>
          <NameInputer handler={drinkersGet}></NameInputer>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
