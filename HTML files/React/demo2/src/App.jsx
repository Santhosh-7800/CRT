import './App.css'  
import CompOne from '../Components/CompOne'
import CompTwo from '../Components/CompTwo'

function App() {
  return (
    <div className='demo'>
    <CompOne name="Bhanu" age={20} rollno='23N3A166Y5' imgsrc="StudentPhotos (3).jpeg"/>
    <CompOne name="Veteesh" age={20} rollno='23N3A166X0' imgsrc="StudentPhotos.jpeg" />
    <CompOne name="Ajay" age={20} rollno='23N3A166V1' imgsrc="StudentPhotos (2).jpeg"/>
    <CompOne name="Nandhu" age={20} rollno='23N3A166Y0' imgsrc="StudentPhotos (1).jpeg"/>
    <CompOne name="Sai" age={20} rollno='24N35A6632' imgsrc="StudentPhotos (4).jpeg"/>
    </div>
  )
}

export default App
