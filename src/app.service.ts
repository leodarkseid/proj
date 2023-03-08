import { Injectable } from '@nestjs/common';
import { ethers, providers } from 'ethers';
import * as tokenJson from './assets/MyToken.json'


const CONTRACT_ADDRESS = "0x242428242d82hb284242j429842j";


@Injectable()
export class AppService {
  getTotalSuply(): number {
    const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider)
    return CONTRACT_ADDRESS.totalSupply(); 
  }
  getContractAddress(): string {
    return CONTRACT_ADDRESS;
  } 
  getHello(): string {
    return 'Hello Suckers!' + (Math.random()*1000).toFixed(0);
  }

  

}
