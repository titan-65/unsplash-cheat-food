import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import PageHeader from './components/PageHeader/PageHeader'
import Section from "./components/Section";
import { createApi } from 'unsplash-js'
import UnsplashForm from "./components/UnsplashForm";
import Unsplash from "./components/Unsplash";

const api = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
})

const App = () => {
  const [data, setPhotosResponse] = useState(null);
  const [formFields, setFormFields] = useState('')



  const getUnsplahPhoto = async (field) => {
    setFormFields(field)
  }

  useEffect(() => {
    api.search
        .getPhotos({ query: `${formFields}`, orientation: "landscape" })
        .then(result => {
          setPhotosResponse(result);
        })
        .catch(() => {
          console.log("something went wrong!");
        });
  }, [formFields]);

  console.log(formFields);
  return (
    <div className="App">
      <Header />
      <PageHeader url="https://images.unsplash.com/photo-1606149059549-6042addafc5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" />
      <UnsplashForm getUnsplahPhoto={getUnsplahPhoto} />
      <Unsplash data={data} />
    </div>
  )
}

export default App
