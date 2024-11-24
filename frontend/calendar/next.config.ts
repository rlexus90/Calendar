import Serwist from '@serwist/next'

// import type { NextConfig } from 'next';


const nextConfig ={

};

module.exports = Serwist({
	swSrc: "src/app/sw.ts",
	swDest: "public/sw.js",
})(nextConfig);