import Head from 'next/head'
import React, { Fragment, useState, useEffect } from 'react';
import About from '../components/about/about';
import BlogSection from '../components/BlogSection/BlogSection';
import CommonHead from '../components/commonHead';
import ContactArea from '../components/ContactArea';
import ExprienceSec from '../components/Exprience/Exprience';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/Navbar/Navbar';
import Pricing from '../components/Pricing/Pricing';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Scrollbar from '../components/scrollbar/scrollbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import Testimonial from '../components/Testimonial/Testimonial';

import usdtABI from '../components/abi/usdtABI.json'
import contractABI from '../components/abi/idoABI.json'
import Web3 from 'web3';
import { ethers } from 'ethers'

let OKCMainnetProvider = 'https://exchainrpc.okex.org/';
let BSCMainnetProvider = 'https://bsc-dataseed.binance.org/';
let web3 = new Web3(new Web3.providers.HttpProvider(OKCMainnetProvider));

const usdtAddress = "0xD0f618C6C2914d8bf3BECE8372B1FA75758aBE99";
const contractAddress = "0xbd5CABaecDD059039C053f0F551d1151FF857e2B";

export default function Home() {
  const [defaultAccount, setDefaultAccount] = useState(null);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [usdtContract, setUsdtContract] = useState(null);

  const handleDefaultAccount = (value) => {
    setDefaultAccount(value);
  }

  const updateEthers = async () => {
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(tempProvider);

    let tempSigner = tempProvider.getSigner();
    setSigner(tempSigner);

    let tempContract = new ethers.Contract(contractAddress, contractABI, tempSigner)
    setContract(tempContract);

    let tempUSDTContract = new ethers.Contract(usdtAddress, usdtABI, tempSigner)
    setUsdtContract(tempUSDTContract);
  }

  useEffect(() => {
    console.log("Change Account to : " + defaultAccount)
    if (defaultAccount !== null)
      updateEthers()
  }, [defaultAccount])

  return (
    <div id='scrool'>
      <CommonHead />
      <Fragment>
        <div className="br-app">
          <Navbar
            defaultAccountChange={handleDefaultAccount}
          />
          <Hero />
          <About
            defaultAccount={defaultAccount}
            contract={contract}
            usdtContract={usdtContract}
            provider={provider}
            signer={signer}
          />
          <ServiceSection />
          <ExprienceSec defaultAccount={defaultAccount} />
          {/* <ProjectSection
            defaultAccount={defaultAccount}
            contract={contract}
            usdtContract={usdtContract}
            provider={provider}
            signer={signer} 
          /> */}
          {/* <Testimonial />
          <Pricing />
          <ContactArea />
          <BlogSection /> */}
          <Footer />
          <Scrollbar />
        </div>
      </Fragment>
    </div>
  )
}
