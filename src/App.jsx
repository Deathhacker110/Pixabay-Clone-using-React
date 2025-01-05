import React from "react";
import PixabayC from "./components/PixabayC";
import Ending from "./components/Ending";
import Last from "./components/Last"
export default class App extends React.Component{
    render(){
        return (
        <>
        <PixabayC/>
        <Ending/>
        <Last/>
        </>
        );
    }
}