import React from 'react'
import Header from './Header'
import Navabar from './Navabar'
import Banner from './Banner'
import Sidemenu from './Sidemenu'
import Maindisplay from './Maindisplay'
import Footer from './Footer'
import CreateComponent from './CreateComponent'
import Parent from './StatusAndProps/Parent'
import MultiComponent from './StatusAndProps/MultiComponent'
import RenderComponent from './ConditionalRender/RenderComponent'
import ConditionalRender02 from './ConditionalRender/ConditionalRender02'
import StatesAndProps from './ConditionalRender/StatesAndProps'
import StateValueUpdate from './UseState/StateValueUpdate'
import UpdateCustomState from './UseState/UpdateCustomState'
import UpdateviaInput from './UseState/UpdateviaInput'
import FetchApi from './UseEffect/FetchApi'
import AxiosApi from './UseEffect/AxiosApi'
import UserRefHook from './UseRef/UserRefHook'
import UseCallBack from './UseCallBack/UseCallBack'
import UseMemoHook from './UseMemoHook/UseMemoHook'
import BootstrapComponent from './bootstrap/BootstrapComponent'
import MaterialComponent from './MaterialUi/MaterialComponents'
import Navbar from './Navigations/Navbar'
import Container from './Navigations/Container'
import CreateContext from './Context/CreateContext'
import PrintStoreValue from './Redux/PrintStoreValue'
import Hoc from './HOC/Hoc'
import NetFlix from './NetFlixApp/NetFlix'
import FormValidations from './Formvalidations/FormValidations'
import Counter from './Counter'

const App = () => {


  return (
    <>
    <Counter />
    {/* <FormValidations /> */}
    {/* <Hoc />
    <NetFlix /> */}
   {/*  <PrintStoreValue /> */}

     {/*  <Navbar />
      <Container />
      <h1 style={{ textAlign: 'center', color: 'blue' }}>Welcome to Context...</h1>
      <CreateContext /> */}
    </>

  )
}

export default App