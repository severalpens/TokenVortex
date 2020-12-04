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

 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appService: AppService,
    public authenticationService: AuthenticationService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.http.get(`https://tokenvortexapi.herokuapp.com/blocks/eth`).subscribe((blocks: Array<Block>) => {
        this.blocks = blocks;
      });
    });
  }

  reset(){
    this.route.paramMap.subscribe((params) => {
      this.http.get(`https://tokenvortexapi.herokuapp.com/blocks/eth/reset`).subscribe((result) => {
        // this.http.get(`http://localhost:9002/blocks/eth/reset`).subscribe((result) => {
          location.reload();
      });
    });
  }
}


