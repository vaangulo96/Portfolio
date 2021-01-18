import React,{useState,createContext,useMemo,useCallback} from 'react';
import './root.css';
import * as cn from 'classnames';
import LandingPage from '../landingP/landing';
import App from '../app/app';

	const Call2Api = createContext(null);
	
function Root (){

	const [Page,setPage] = useState(0);
	
	const go2stuff = useCallback(()=>setPage(1),[]);

	const go2contact = useCallback(()=>setPage(2),[]);

	const getApi = useMemo(()=> ({go2stuff,go2contact}));

	return (
		<Call2Api.Provider value = {getApi}>
		{Page === 0 && <LandingPage/>}
		{Page === 1 && <App />}
		</Call2Api.Provider>
	);
}

export {Root,Call2Api};

