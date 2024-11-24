import withPWA from '@ducanh2912/next-pwa';

// import type { NextConfig } from 'next';


const PWA= withPWA({
	dest: 'public',
	cacheOnFrontEndNav:true,
	aggressiveFrontEndNavCaching:true,
	reloadOnOnline:true,
	
  // disable: process.env.NODE_ENV === 'development',
	disable:false,
  register: true,
	workboxOptions:{
		disableDevLogs:true,
	}

});



module.exports=  PWA({
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV !== 'development',
	},
});