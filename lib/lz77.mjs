export class LZ77Run {
    constructor(offset=null, length=null, match=null){
        this.offset = offset;
        this.length = length;
        this.match = match;
    }
}

function LZ77Encode(input){
    
}

function LZ77Decode(){
    // TODO: change to buffer
    let output = "";
    for(let record of input){
        if(record.offset == 0 && record.length == 0){
            output += record.match;
        }
        else{
            let startingPoint = output.length - record.offset;
            for(let i = 0; i < record.length; i++){
                output += output[startingPoint + i];
            }
        }
    }
    return output;
}