/**@type {import('next').NextConfig}*/
const nexConfig = {
 images: {
  remotePatterns:[
    {
     protocol: 'https',
     hostname: '**'
    },
  ],
 },
};
