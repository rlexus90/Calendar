import withPWA from 'next-pwa';
// import type { NextConfig } from 'next';


const PWA= withPWA({
	dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports=  PWA({
	reactStrictMode: true,
	compiler: {
		removeConsole: process.env.NODE_ENV !== 'development',
	},
});