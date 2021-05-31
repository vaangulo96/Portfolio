import React,{useState,createContext,useMemo,useCallback} from 'react';
import './root.css';
import LandingPage from '../landingP/landing';
import App from '../app/app';
import ContactPage from '../contactP/contact';

	const Call2Api = createContext(null);
	
function Root (){

	const [Page,setPage] = useState(0);
	
	const go2stuff = useCallback(()=>setPage(1),[]);

	const go2contact = useCallback(()=>setPage(2),[]);

	const getApi = useMemo(()=> ({go2stuff,go2contact}),[go2stuff,go2contact]);

	return (
		<Call2Api.Provider value = {getApi}>
		{Page === 0 && <LandingPage/>}
		{Page === 1 && <App />}
		{Page === 2 && <ContactPage/>}
		</Call2Api.Provider>
	);
}

export {Root,Call2Api};

