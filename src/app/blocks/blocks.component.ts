import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Contract } from 'src/app/contracts/contract';
import { Account } from 'src/app/accounts/account';

import { AuthenticationService } from '../auth/_services';
import { AppService } from '../app.service';
import {
  Sequence,
  Step,
  selectOptions,
  Item,
  Method,
  Input,
  IEntity
} from 'src/app/classes';

class Block{
  _id?: string;
  blockchain: string;
  source: string;
  body: any;
}

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {
  selectOptions = selectOptions;
  saved: string;
  sequence: Sequence;
  steps: Array<Step>;
  step: Step;
  contractFields: Array<Item>;
  methods: Array<Method>;
  log: any;
  entities: any[];
  
  
  networks: Array<string>;
  network: string;
  
  msgSender: Account;
  accounts: Array<Account>;
  
  contracts: Array<Contract>;
  contract: Contract;
  
  abi: Array<Method>;
  stepMethod: Method;

  block: Block;
  blocks: Array<Block>

  isRunningEth: boolean;
  isRunningBtc: boolean;
 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService,
    public authenticationService: AuthenticationService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
      this.refresh();
  }

  refresh(){
    this.blocks = new Array<Block>();
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks`).subscribe((blocks: Array<Block>) => {
        blocks.forEach(block => {
          console.log(block)
          if(!block.body.transactions){
            block.body.transactions = [{}];
          }
          this.blocks.push(block);
        });
      });
    });
    
    this.http.get(`${environment.apiDomain}/blocks/eth/status`).subscribe((result:boolean) => {
      this.isRunningEth  = result;
    });

    this.http.get(`${environment.apiDomain}/blocks/btc/status`).subscribe((result:boolean) => {
      this.isRunningBtc  = result;
    });

}

  resetEth(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks/eth/reset`).subscribe((result) => {
         location.reload();
         console.log(result)
      });
    });
  }

  startEth(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks/eth/start`).subscribe((result:boolean) => {
      this.isRunningEth = result;
      });
    });
  }

  stopEth(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks/eth/stop`).subscribe((result:boolean) => {
         this.isRunningEth  = result;
      });
    });
  }
  
  parseInt(value){
    if(value){
      return parseInt(value._hex);
    }
    else{
      return '';
    }
  }


  resetBtc(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks/btc/reset`).subscribe((result) => {
         location.reload();
        });
    });
  }

  startBtc(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks/btc/start`).subscribe((result:boolean) => {
         this.isRunningBtc = result;
      });
    });
  }

  stopBtc(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`${environment.apiDomain}/blocks/btc/stop`).subscribe((result:boolean) => {
         this.isRunningBtc = result;
      });
    });
  }



}


