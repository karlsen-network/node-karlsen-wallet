import * as karlsencore from '@karlsen/core-lib';
import {UnspentOutputInfo} from '../types/custom-types';
export class UnspentOutput extends karlsencore.Transaction.UnspentOutput {
	blockDaaScore: number;
	scriptPublicKeyVersion: number;
	id:string;
	signatureOPCount:number;
	mass:number;
	isCoinbase:boolean;
	scriptPubKey:string;
	constructor(o: UnspentOutputInfo) {
		super(o);
		this.blockDaaScore = o.blockDaaScore;
		this.scriptPublicKeyVersion = o.scriptPublicKeyVersion;
		this.id = this.txId + this.outputIndex;
		this.signatureOPCount = this.script.getSignatureOperationsCount();
		this.mass = this.signatureOPCount * karlsencore.Transaction.MassPerSigOp;
		this.mass+= 151 * karlsencore.Transaction.MassPerTxByte; //standalone mass 
		this.isCoinbase = o.isCoinbase,
		this.scriptPubKey = o.scriptPubKey
	}
}
