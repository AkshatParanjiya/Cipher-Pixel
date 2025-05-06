// src/components/Footer.jsx
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-4 text-center flex items-center justify-center">
        

     <div className="flex flex-col gap-10 w-[90%] ">
     <div className="mt-2">
        <h1 className="mb-2">Subscribe to our newsletter</h1>
          <input className="rounded-l-2xl p-1.5 border-2 border-r-0 border-gray-500" type="email" placeholder="Enter your email" />
          <button className="rounded-r-2xl p-1.5 bg-violet-500 border-2 border-r-0 border-gray-500 cursor-pointer">Subscirbe</button>
       </div>


       <div className="flex  items-center justify-around border-b-2  ">
        <h1 className="font-bold text-2xl">Cipher Pixel </h1>
        <div className="flex mr-5">
          <ul className="flex gap-10 text-[18px]  ">
            <li>Pricing</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Careers</li>
          </ul>
        </div>
        
       </div>




  <div className="flex items-center justify-around">
    <div>
    <select name="language" className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <option className="text-black" value="English">English</option>
  <option className="text-black" value="Hindi">Hindi</option>
  
</select>
    </div>
  <div className="flex items-center justify-center gap-10 "> 
  <p className="text-gray-400 text-sm font-bold">
          &copy; 2025 Brand,Inc.   </p>
           <ul className="flex gap-5 list-disc">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Sitemap</li>
            </ul>
     
   </div>
     <div>
     <ul className="flex gap-5 text-2xl">
        <li className="text-blue-300"><a href=""><FaTwitter /></a></li>
        <li className="text-blue-500"><a href=""></a><FaFacebook/> </li>
        <li className="text-blue-700"><a href=""></a><FaLinkedin/></li>
        <li className="text-red-600 text-3xl"><a href=""><FaYoutube/></a></li>
      </ul>
     </div>
  </div>
     </div>

      </footer>
    );
  }
  
  export default Footer;
  