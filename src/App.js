import { Component } from 'react';
import ParticlesBg from 'particles-bg';


import Navigation from './Components/Navigation/Navigation';
import Logo from'./Components/Logo/Logo';
// import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';

import './App.css';

const returnClarifaiJSONRequest = (imageUrl) => {
  const PAT = 'ac5c3cae568d46c19a6294b064f3c3ce';
  const USER_ID = 'harishtsj';
  const APP_ID = 'SmartBrain';
  //const MODEL_ID = 'face-detection';
  const IMAGE_URL = imageUrl;

  console.log(IMAGE_URL)

  const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  onInputChange = (event) => {
    this.setState ({
      input: event.target.value
    }, () => {
      console.log("inputURL")
    })
  }

  calculateFaceLocation = (data) => {
    const faceDataBoundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
    const URLImage  = document.getElementById('URLImage');
    const width     = Number(URLImage.width);
    const height    = Number(URLImage.height);

    return {
      Left_Col:   ( faceDataBoundaries.left_col ) * width,
      Top_Row:    ( faceDataBoundaries.top_row ) * height,
      Right_Col:  ( width - (( faceDataBoundaries.right_col ) * width) ),
      Bottom_Row: ( height - (( faceDataBoundaries.bottom_row ) * height) )
    }

    // console.log("width = ", width, "height = ", height)
  }

  // calculateFaceLocation = (data) => {

  //   const faceDataBoundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
  //   const URLImage  = document.getElementById('URLImage');
  //   const width     = Number(URLImage.width);
  //   const height    = Number(URLImage.height);

  //   const left_Col  = ( faceDataBoundaries.left_col ) * width;
  //   const right_Col = ( width - (( faceDataBoundaries.right_col ) * width) );
  //   const top_Row   = ( faceDataBoundaries.top_row ) * height;
  //   const bottom_Row = ( height - (( faceDataBoundaries.bottom_row ) * height) );

  //   console.log("L -", left_Col, "T -", top_Row ,"R -", right_Col, "B -", bottom_Row)

  //   return {
  //     Left_Col:   left_Col,
  //     Top_Row:    top_Row,
  //     Right_Col:  right_Col,
  //     Bottom_Row: bottom_Row
  //   }

  //   // console.log("width = ", width, "height = ", height)
  // }

  // calculateFaceLocation = (data) => {
  //   const faceDataBoundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
  //   // const URLImage  = document.getElementById('URLImage');
  //   // const width     = Number(URLImage.width);
  //   // const height    = Number(URLImage.height);
  //   const left_Col  = faceDataBoundaries.left_col*100;
  //   const right_Col = faceDataBoundaries.right_col*100;
  //   const top_Row   = faceDataBoundaries.top_row*100;
  //   const bottom_Row = faceDataBoundaries.bottom_row*100;

  //   console.log("L -", left_Col, "T -", top_Row ,"R -", right_Col, "B -", bottom_Row)

  //   return {
  //     Left_Col:   left_Col,
  //     Top_Row:    top_Row,
  //     Right_Col:  right_Col,
  //     Bottom_Row: bottom_Row
  //   }

  //   //console.log("width = ", width, "height = ", height)
  // }

  displayFaceBox = (boxes) => {
    console.log(boxes)
    this.setState({
      box: boxes
    })
  }

  onButtonSubmit = () => {

    this.setState ({
      imageUrl: this.state.input
    })

    console.log('click');

    const MODEL_ID = 'face-detection';

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs", returnClarifaiJSONRequest(this.state.input))
        .then(response => response.json())
        .then(result => {
          // this.calculateFaceLocation(result)
          this.displayFaceBox(this.calculateFaceLocation(result))
          // console.log(result.outputs[0].data.regions[0].region_info.bounding_box)
        })
        .catch(error => console.log('No Face Detected'));
  }

  render() {
    return(
      <div className = 'App'>
        <ParticlesBg num={50} type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        {/* <Rank /> */}
        <ImageLinkForm 
          onInputChange = { this.onInputChange } 
          onButtonSubmit = { this.onButtonSubmit } />
        <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl} />
      </div>
    )
  }
}

// class App extends Component {

//   inputField = (event) => {
//     this.setState({
//       input:event.target.value
//     }, () => {
//       console.log(this.state.input)
//     })
//   }

//   submit = () => {
//     this.setState({
//       button: this.state.input
//     }, () => {
//       console.log(this.state.button)
//     })
//   }

//   constructor() {
//     super();
//     this.state = {
//       input:'',
//       button: ''
//     }
//   }

//   render() {
//   return (
//     <div className="App">
//       <input type="text" onChange = { this.inputField } />
//       <button onClick = { this.submit }>Detect Text</button>
//     </div>
//   );
// }
// }

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
